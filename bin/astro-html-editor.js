#!/usr/bin/env node
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const entry = join(__dirname, '..', 'dist', 'server', 'entry.mjs');

const child = spawn(process.execPath, [entry], { stdio: 'inherit' });
child.on('exit', code => process.exit(code ?? 0));
