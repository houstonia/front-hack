const path = require('node:path');
const { rmSync, readFile, writeFileSync } = require('node:fs');

const sliceName = process.argv[2];

const src = path.resolve(__dirname, '..', 'src');
const redux = path.resolve(src, 'redux');
const slices = path.resolve(redux, 'slices');

rmSync(`${slices}/${sliceName}.ts`, { recursive: true, force: true });

readFile(`${slices}/index.ts`, (e, data) => {
  if (e) throw e;

  const replaced = data.toString().replaceAll(`export * from './${sliceName}';\n`, '');

  writeFileSync(`${slices}/index.ts`, replaced);
});
