# Usage

## Layout

The editor page splits into two panels:

- **Left** — textarea with a line-number gutter
- **Right** — `iframe` that renders the current HTML via `srcdoc`

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `Tab` | Insert 2 spaces at the cursor |
| `Ctrl+S` | Force-save immediately (skips the debounce) |

## Toolbar buttons

| Button | Description |
|--------|-------------|
| New | Create a new file and navigate to it |
| Save As | Save the current content under a new name |
| Rename | Rename the current file in place |
| Clone | Duplicate the current file and open the copy |
| Load | Open a file from the list of saved files |
| Copy | Copy the full HTML source to the clipboard |
| Download | Download the file as `<name>.html` |
| Reset | Restore the default starter template |
| Open | Open the current HTML in a new browser tab |

## Auto-save behavior

- **Paste** — syncs to the server immediately, on the next animation frame after the paste event.
- **Keystroke** — syncs after 800 ms of inactivity.
- **Ctrl+S** — syncs immediately, cancels any pending debounced sync.

A status indicator in the header shows `saving…`, `saved`, or an error message.

## File list

The landing page (`/`) groups all saved files by month, newest first. Clicking a row opens the editor for that file.

## File naming

File slugs follow the format `YYYY-MM/name`. The name part is sanitized: only `a-z`, `A-Z`, `0-9`, `.`, `_`, and `-` are kept; everything else becomes `-`.

When you create a new file via the **New** button, the server assigns a timestamped name (`untitled-<timestamp>`).
