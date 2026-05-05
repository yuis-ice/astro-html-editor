# Use Cases

## Paste and iterate on HTML snippets

Got a snippet from somewhere and want to see how it looks?

1. Click **New**.
2. Select all in the editor (`Ctrl+A`) and paste your snippet.
3. The preview updates immediately. The file is saved to the server on paste.
4. Use **Save As** to give it a meaningful name, or leave it as `untitled-*` if it's throwaway.

## Local HTML prototyping

Working on a standalone HTML file without a build pipeline:

1. **New** → start from the default template, or paste your file's content.
2. Edit in the browser. The preview reflects every change within 800 ms.
3. When done, **Download** to get the `.html` file, or open the `data/YYYY-MM/` directory directly — the file is already there.

## Keeping a reference library

The file list groups entries by month. Over time it becomes a searchable archive of HTML snippets and experiments. Use **Clone** to branch off a known-good state before experimenting.

## Reviewing HTML email templates

HTML email rendering is full of quirks. Paste a template into the editor and the sandboxed `iframe` shows a browser-side approximation. Useful for spotting obvious layout breaks before sending to an actual mail client.

## Sharing a page between machines on a LAN

Run the server on a machine accessible to other devices on the same network:

```bash
PORT=4321 npm start
```

Anyone on the LAN can open `http://<machine-ip>:4321` and access the same file list. All edits from any machine go to the same `data/` directory.

::: warning
No authentication is included. Only use this on trusted networks. See [Self-Hosting](/guide/self-hosting) for how to add access control.
:::

## Scripting: write files directly

Because files are plain `.html` files in `data/YYYY-MM/`, you can generate or update them outside the browser:

```bash
# Write a file that will appear in the editor's file list
mkdir -p data/2026-05
cat > data/2026-05/generated.html << 'EOF'
<!DOCTYPE html><html><body><h1>Generated</h1></body></html>
EOF
```

The file appears in the list immediately on next page load (the list is read from disk on every request).
