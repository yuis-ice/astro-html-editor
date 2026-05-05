import type { APIRoute } from 'astro';
import { listFiles } from '../../lib/store';

export const GET: APIRoute = async () => {
  try {
    const files = await listFiles();
    return new Response(JSON.stringify({ files }), { status: 200 });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
};
