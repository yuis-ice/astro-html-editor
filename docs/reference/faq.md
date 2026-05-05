# FAQ

## Why does the preview not show my CSS?

The preview uses `iframe srcdoc`. External resources (fonts, images, stylesheets) referenced by URL will load normally if the server hosting them is reachable. Resources loaded from the local filesystem (`file://` paths) will not work inside `srcdoc` — use a CDN URL instead.

## Why is the file saved under a different name than I typed?

The name sanitizer replaces characters outside `[a-zA-Z0-9._-]` with hyphens. Spaces, slashes, and special characters are all converted. The sanitized result is shown in the URL and the page title.

## Why does Rename keep the file in the same month?

Rename is a filesystem `rename` syscall — fast and atomic. Changing the month would require moving the file to a different directory, which is a different operation. To "move" a file to a different month, Clone it, then delete the original from the filesystem.

## Can I edit CSS and JavaScript separately?

No. The editor works on a single HTML file. CSS and JavaScript go in `<style>` and `<script>` tags inside the HTML. For multi-file workflows, use a proper text editor.

## Is the preview sandboxed?

Yes. The `iframe` has `sandbox="allow-scripts allow-same-origin"`. This blocks form submission, popups, and top-level navigation. JavaScript inside the preview runs in an isolated document and cannot access the parent page's DOM or cookies.

## What happens if I open the same file in two tabs?

The last write wins. Both tabs debounce independently, so whichever tab fires its 800 ms timer last will overwrite the other's changes. There is no locking or conflict detection.

## Can I use this over HTTPS?

Yes, with a reverse proxy. The application itself serves plain HTTP. See [Self-Hosting](/guide/self-hosting) for nginx and Caddy examples.

## The server is running but the page shows a blank preview.

Check if your HTML includes a `<!DOCTYPE html>` declaration and a valid `<html>` structure. Some browser security policies reject `srcdoc` content that is not well-formed. Also check the browser console for errors.

## Files disappeared after restarting.

Check that the `data/` directory is in the same working directory you're running `npm start` from. If you're running inside Docker, verify the volume is mounted at `/app/data` (or wherever your working directory is).
