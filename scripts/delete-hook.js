const path = require('node:path');
const { rmSync, readFile, writeFileSync } = require('node:fs');

const hookName = process.argv[2];

const src = path.resolve(__dirname, '..', 'src');
const hooks = path.resolve(src, 'hooks');

rmSync(`${hooks}/${hookName}.ts`, { recursive: true, force: true });

readFile(`${hooks}/index.ts`, (e, data) => {
  if (e) throw e;

  const replaced = data.toString().replaceAll(`export * from './${hookName}';\n`, '');

  writeFileSync(`${hooks}/index.ts`, replaced);
});
