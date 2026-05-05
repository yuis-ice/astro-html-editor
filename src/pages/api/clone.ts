import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import { sanitizeSlug, slugToPath, writeSlug, currentMonth } from '../../lib/store';

export const POST: APIRoute = async ({ request }) => {
  let body: { slug?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid json' }), { status: 400 });
  }

  const { slug } = body;
  if (!slug) return new Response(JSON.stringify({ error: 'missing slug' }), { status: 400 });

  const safeSlug = sanitizeSlug(slug);
  if (!safeSlug) return new Response(JSON.stringify({ error: 'invalid slug' }), { status: 400 });

  let code: string;
  try {
    code = await fs.readFile(slugToPath(safeSlug), 'utf-8');
  } catch {
    return new Response(JSON.stringify({ error: 'source not found' }), { status: 404 });
  }

  const [, name] = safeSlug.split('/');
  const month = currentMonth();

  // find non-conflicting name: name-copy, name-copy-2, name-copy-3 ...
  let newSlug = `${month}/${name}-copy`;
  let i = 2;
  while (true) {
    try {
      await fs.access(slugToPath(newSlug));
      newSlug = `${month}/${name}-copy-${i++}`;
    } catch {
      break; // path does not exist — safe to use
    }
  }

  try {
    await writeSlug(newSlug, code);
    return new Response(JSON.stringify({ slug: newSlug }), { status: 200 });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
};
