import type { APIRoute } from 'astro';
import { currentMonth, writeSlug } from '../../lib/store';
import { DEFAULT_HTML } from '../../lib/defaults';

export const POST: APIRoute = async () => {
  const slug = `${currentMonth()}/untitled-${Date.now()}`;
  try {
    await writeSlug(slug, DEFAULT_HTML);
    return new Response(JSON.stringify({ slug }), { status: 200 });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
};
