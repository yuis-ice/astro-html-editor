# Comparison

## vs CodePen / JSFiddle / StackBlitz

Cloud editors. Your files live on their servers, subject to their terms, their uptime, and their account system. `astro-html-editor` is self-hosted — files are on your machine.

## vs VS Code + Live Server

VS Code is a full IDE with syntax highlighting, IntelliSense, extensions, and multi-file projects. `astro-html-editor` is a single-purpose tool: one file, one preview, in a browser tab. No install beyond Node.js, no local port conflicts to manage.

If you're working on a multi-file project, use VS Code. If you want to paste a snippet and see it render without switching applications, use `astro-html-editor`.

## vs saving files locally and refreshing

The traditional approach: edit in a text editor, save, switch to browser, refresh. `astro-html-editor` removes the switch-and-refresh step. The preview is always current.

## vs Monaco Editor-based tools

Monaco (the VS Code editor component) is around 3-5 MB of JavaScript. It adds syntax highlighting, IntelliSense, and multi-cursor editing. It also adds complexity: a web worker, a language server protocol shim, and significant initial load time.

`astro-html-editor` uses a plain `textarea`. Tab handling and line numbers are the only custom behavior. The entire client-side script is under 4 KB. On a slow connection or a low-spec machine, this matters.

## Summary

| | astro-html-editor | Cloud editor | VS Code | textarea + refresh |
|---|---|---|---|---|
| Self-hosted | Yes | No | Yes | Yes |
| Server-side persistence | Yes | Yes | Yes | No |
| Live preview | Yes | Yes | Yes (with extension) | No |
| Syntax highlighting | No | Yes | Yes | No |
| Multi-file projects | No | Yes | Yes | No |
| No install (browser-only) | No | Yes | No | No |
| Offline | Yes | No | Yes | Yes |
