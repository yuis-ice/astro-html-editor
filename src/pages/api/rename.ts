import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';
import { sanitizeSlug, slugToPath } from '../../lib/store';

export const POST: APIRoute = async ({ request }) => {
  let body: { oldSlug?: string; newName?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid json' }), { status: 400 });
  }

  const { oldSlug, newName } = body;
  if (!oldSlug || !newName) {
    return new Response(JSON.stringify({ error: 'missing oldSlug or newName' }), { status: 400 });
  }

  const safeOld = sanitizeSlug(oldSlug);
  if (!safeOld) return new Response(JSON.stringify({ error: 'invalid oldSlug' }), { status: 400 });

  // keep same month; only rename the name part
  const [month] = safeOld.split('/');
  const safeNew = sanitizeSlug(`${month}/${newName}`);
  if (!safeNew) return new Response(JSON.stringify({ error: 'invalid newName' }), { status: 400 });

  if (safeOld === safeNew) {
    return new Response(JSON.stringify({ ok: true, slug: safeNew }), { status: 200 });
  }

  const src  = slugToPath(safeOld);
  const dest = slugToPath(safeNew);

  try {
    await fs.access(src);
  } catch {
    return new Response(JSON.stringify({ error: 'source file not found' }), { status: 404 });
  }

  try {
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.rename(src, dest);
    return new Response(JSON.stringify({ ok: true, slug: safeNew }), { status: 200 });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
};
