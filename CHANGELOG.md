# Changelog

## [0.1.0] - 2026-05-05

### Added

- Astro 5 SSR with standalone Node.js adapter
- Split-pane layout: textarea editor (left) + iframe srcdoc live preview (right)
- Server-side file persistence via Astro API endpoints and `node:fs`
- Atomic writes (`tmp` file → `fs.rename`) to prevent partial saves
- Files organized under `data/YYYY-MM/` with URL-based routing (`/file/YYYY-MM/name`)
- Immediate server sync on paste; debounced sync on input (800ms)
- Ctrl+S triggers immediate save
- Tab key inserts 2 spaces
- Line-number gutter synced to textarea scroll
- File management: New, Save As, Rename, Clone, Load, Copy, Download, Reset, Open in new window
- `/api/sync` — write file to disk
- `/api/files` — list saved files with byte sizes
- `/api/new` — create file with default template, return slug
- `/api/rename` — rename file on server (`fs.rename`, same-month)
- `/api/clone` — duplicate file, resolve name conflicts (`-copy`, `-copy-2`, ...)
- Path traversal sanitization on all endpoints
- SSR landing page (`/`) grouped by month, newest first
- New button creates a named file immediately (`untitled-{timestamp}.html`) then redirects
- Dark theme (Tokyo Night color palette)
- WCAG AA contrast verified for all text colors
- File sizes displayed in Load dialog (B / KB / MB)
