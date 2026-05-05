# API Endpoints

All endpoints are under `/api/`. They accept and return JSON. Path traversal is sanitized on every endpoint that takes a filename or slug.

## POST /api/sync

Write HTML content to a file on disk.

**Request body**

```json
{ "code": "<html>...", "slug": "my-file" }
```

The `slug` is sanitized via `sanitizeSlug()`. If it has no month prefix, the current month is prepended. If it already has a valid `YYYY-MM/name` prefix, it is used as-is.

**Response (200)**

```json
{ "ok": true, "slug": "2026-05/my-file" }
```

**Response (400)** — missing or invalid fields.

**Response (500)** — filesystem error.

---

## GET /api/files

List all saved files.

**Response (200)**

```json
{
  "files": [
    { "slug": "2026-05/my-file", "name": "my-file", "month": "2026-05", "size": 1024 },
    ...
  ]
}
```

Files are sorted alphabetically within each month. Months are sorted newest-first.

---

## POST /api/new

Create a new file with the default starter template and return its slug.

**Request body** — empty or `{}`.

**Response (200)**

```json
{ "slug": "2026-05/untitled-1746441600000" }
```

The timestamp in the name is `Date.now()` at the time of creation.

---

## POST /api/rename

Rename an existing file. Keeps the same month directory.

**Request body**

```json
{ "oldSlug": "2026-05/old-name", "newName": "new-name" }
```

`newName` is the bare name without month prefix or `.html` extension.

**Response (200)**

```json
{ "slug": "2026-05/new-name" }
```

**Response (400)** — if `oldSlug` or `newName` is invalid, or if the source file does not exist.

**Response (409)** — if a file with `newName` already exists in the same month.

---

## POST /api/clone

Duplicate a file. Resolves name conflicts automatically.

**Request body**

```json
{ "slug": "2026-05/my-file" }
```

**Response (200)**

```json
{ "slug": "2026-05/my-file-copy" }
```

If `my-file-copy` exists, tries `my-file-copy-2`, `my-file-copy-3`, and so on.

---

## Path sanitization

`sanitizeSlug(input)` in `src/lib/store.ts`:

1. Strips leading slashes and `.html` suffix.
2. Splits on `/`. Rejects inputs with 0 or more than 2 parts.
3. If two parts, validates the first as `YYYY-MM`. If one part, prefixes current month.
4. Replaces anything outside `[a-zA-Z0-9._-]` in the name with `-`, then strips leading/trailing hyphens.

Any input that doesn't survive these steps returns `null` and the endpoint responds with 400.
