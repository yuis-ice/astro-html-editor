# Persistence

## File layout

All HTML files live under `data/` in the working directory:

```
data/
  2026-04/
    landing-page.html
    experiment.html
  2026-05/
    my-project.html
    draft.html
```

The subdirectory is the year-month of creation (`YYYY-MM`). This keeps the directory manageable as files accumulate and makes the file list easy to sort (reverse-alphabetical = newest month first).

## Slug format

A slug is a `YYYY-MM/name` string without the `.html` extension:

```
2026-05/my-project   →   data/2026-05/my-project.html
```

Slugs appear directly in the URL:

```
/file/2026-05/my-project
```

## Atomic write

`writeSlug()` uses a two-step write to avoid leaving a half-written file if the process dies mid-write:

```typescript
async function writeSlug(slug: string, code: string): Promise<void> {
  const target = slugToPath(slug);
  const tmp = target + '.tmp';
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(tmp, code, 'utf-8');
  await fs.rename(tmp, target);   // atomic on POSIX filesystems
}
```

`fs.rename` is atomic on POSIX systems when source and destination are on the same filesystem (which they always are here). The worst case on a crash is an orphaned `.tmp` file, which is filtered out by `listFiles()`.

## Sync triggers

| Event | Behavior |
|-------|----------|
| `paste` | Sync immediately on the next animation frame |
| `input` | Debounce 800 ms, then sync |
| `Ctrl+S` | Cancel debounce, sync immediately |
| Page unload | No explicit flush — the debounce may fire after navigation |

The 800 ms debounce means at most one server write per second during continuous typing, which is imperceptible on local storage.

## Rename

`/api/rename` calls `fs.rename(oldPath, newPath)` directly. This is a single syscall and is atomic. The file keeps its content; only the path changes.

The rename endpoint keeps the file in the same month directory (the month prefix is taken from the existing slug, not recalculated). To move a file to a different month, use **Clone** and delete the original.

## Clone

`/api/clone` reads the source file and calls `writeSlug()` with a new name. It resolves conflicts by appending `-copy`, then `-copy-2`, `-copy-3`, etc.

## No localStorage

The editor never reads from or writes to `localStorage`. If the browser crashes between keystrokes the worst that's lost is 800 ms of input, because the last debounced write already reached the server.
