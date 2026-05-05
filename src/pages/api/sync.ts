import type { APIRoute } from 'astro';
import { sanitizeSlug, writeSlug } from '../../lib/store';

export const POST: APIRoute = async ({ request }) => {
  let body: { code?: string; slug?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid json' }), { status: 400 });
  }

  const { code, slug } = body;
  if (typeof code !== 'string' || typeof slug !== 'string' || !slug) {
    return new Response(JSON.stringify({ error: 'missing code or slug' }), { status: 400 });
  }

  const safeSlug = sanitizeSlug(slug);
  if (!safeSlug) {
    return new Response(JSON.stringify({ error: 'invalid slug' }), { status: 400 });
  }

  try {
    await writeSlug(safeSlug, code);
    return new Response(JSON.stringify({ ok: true, slug: safeSlug }), { status: 200 });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
};
