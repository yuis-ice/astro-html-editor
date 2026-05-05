import fs from 'node:fs/promises';
import path from 'node:path';

export const DATA_DIR = path.join(process.cwd(), 'data');

export function currentMonth(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

/**
 * Slug format: "YYYY-MM/name"  (no .html extension)
 * Accepts: "2026-05/my-file", "2026-05/my-file.html", or just "my-file"
 */
export function sanitizeSlug(input: string): string | null {
  const cleaned = input.replace(/^\/+/, '').replace(/\.html$/i, '');
  const parts = cleaned.split('/').filter(Boolean);
  if (parts.length === 0 || parts.length > 2) return null;

  let month: string;
  let name: string;

  if (parts.length === 2) {
    [month, name] = parts;
    if (!/^\d{4}-\d{2}$/.test(month)) return null;
  } else {
    month = currentMonth();
    [name] = parts;
  }

  const safeName = name.replace(/[^a-zA-Z0-9._-]/g, '-').replace(/^-+|-+$/g, '') || 'file';
  return `${month}/${safeName}`;
}

export function slugToPath(slug: string): string {
  return path.join(DATA_DIR, slug + '.html');
}

export async function fileExists(slug: string): Promise<boolean> {
  try {
    await fs.access(slugToPath(slug));
    return true;
  } catch {
    return false;
  }
}

export async function readSlug(slug: string): Promise<string> {
  return fs.readFile(slugToPath(slug), 'utf-8');
}

export async function writeSlug(slug: string, code: string): Promise<void> {
  const target = slugToPath(slug);
  const tmp = target + '.tmp';
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(tmp, code, 'utf-8');
  await fs.rename(tmp, target);
}

export interface FileEntry {
  slug: string;
  name: string;
  month: string;
  size: number;
}

export async function listFiles(): Promise<FileEntry[]> {
  await fs.mkdir(DATA_DIR, { recursive: true });

  let months: string[] = [];
  try {
    months = (await fs.readdir(DATA_DIR, { withFileTypes: true }))
      .filter(e => e.isDirectory() && /^\d{4}-\d{2}$/.test(e.name))
      .map(e => e.name)
      .sort()
      .reverse(); // newest month first
  } catch {
    return [];
  }

  const entries: FileEntry[] = [];
  for (const month of months) {
    const monthDir = path.join(DATA_DIR, month);
    try {
      const files = (await fs.readdir(monthDir, { withFileTypes: true }))
        .filter(e => e.isFile() && e.name.endsWith('.html') && !e.name.endsWith('.tmp.html'))
        .map(e => e.name)
        .sort();
      for (const file of files) {
        try {
          const stat = await fs.stat(path.join(monthDir, file));
          const name = file.replace(/\.html$/, '');
          entries.push({ slug: `${month}/${name}`, name, month, size: stat.size });
        } catch {
          // skip unreadable files
        }
      }
    } catch {
      // skip unreadable month dirs
    }
  }
  return entries;
}
