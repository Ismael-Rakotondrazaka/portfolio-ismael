import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import process from 'node:process';

const require = createRequire(import.meta.url);

const binPath = (pkg, relativeBin) =>
  join(dirname(require.resolve(`${pkg}/package.json`)), relativeBin);

const files = process.argv.slice(2);

if (files.length === 0) {
  process.exit(0);
}

const run = (bin, args) =>
  new Promise(resolve => {
    const child = spawn(process.execPath, [bin, ...args], { stdio: 'inherit' });
    child.on('exit', code => resolve(code ?? 0));
  });

const [prettierCode, eslintCode] = await Promise.all([
  run(binPath('prettier', 'bin/prettier.cjs'), [
    '--write',
    '--ignore-unknown',
    ...files,
  ]),
  run(binPath('eslint', 'bin/eslint.js'), ['--fix', ...files]),
]);

process.exit(prettierCode || eslintCode || 0);
