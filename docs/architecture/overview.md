# Architecture Overview

## Design goals

1. **No client-side state management.** The server filesystem is the source of truth. Reload the page and nothing is lost.
2. **No framework islands.** The editor is a `textarea`. The preview is an `iframe`. Both are wired together with plain JavaScript. No virtual DOM, no reactivity system, no build-time component hydration.
3. **Minimal dependencies.** The only runtime dependencies are Astro and its Node.js adapter. VitePress is a devDependency for documentation only.

## Request flow

```
Browser                         Astro SSR (Node.js)          Filesystem
  │                                     │                         │
  │  GET /                              │                         │
  │────────────────────────────────────>│                         │
  │                                     │  listFiles()            │
  │                                     │────────────────────────>│
  │                                     │  [FileEntry[]]          │
  │                                     │<────────────────────────│
  │  HTML (file list, server-rendered)  │                         │
  │<────────────────────────────────────│                         │
  │                                     │                         │
  │  GET /file/2026-05/my-page          │                         │
  │────────────────────────────────────>│                         │
  │                                     │  readSlug()             │
  │                                     │────────────────────────>│
  │                                     │  file content           │
  │                                     │<────────────────────────│
  │  HTML (editor + initial code baked  │                         │
  │  in, server-rendered)               │                         │
  │<────────────────────────────────────│                         │
  │                                     │                         │
  │  [user types]                       │                         │
  │  POST /api/sync {code, slug}        │                         │
  │────────────────────────────────────>│                         │
  │                                     │  writeSlug()            │
  │                                     │────────────────────────>│
  │  {ok:true, slug}                    │                         │
  │<────────────────────────────────────│                         │
```

## Technology choices

| Layer | Choice | Why |
|-------|--------|-----|
| Server framework | Astro SSR | File-based routing, API routes, zero client JS by default |
| Server adapter | `@astrojs/node` standalone | Single `node dist/server/entry.mjs` to run; no external server needed |
| Editor | `<textarea>` | Zero deps, keyboard events are straightforward, no hydration needed |
| Preview | `<iframe srcdoc>` | Isolated document, no navigation, sandboxed |
| Persistence | `node:fs` (atomic) | Direct, fast, portable — files are real files, not encoded blobs |
| Styling | Inline CSS (Tokyo Night) | No build step, no class name collisions, easy to audit |

## What Astro SSR does here

Astro renders two server-side pages:

- `/` — reads the data directory, builds the file list, returns HTML. No client-side fetch needed to see the list.
- `/file/[...slug]` — reads the file from disk, embeds the content in the `<textarea>` value server-side. The editor opens with the correct content instantly, no loading state.

The API routes (`/api/*`) handle all mutations: create, write, rename, clone.
