const path = require('node:path');
const { rmSync, readFile, writeFileSync } = require('node:fs');

const componentName = process.argv[2];

const src = path.resolve(__dirname, '..', 'src');
const components = path.resolve(src, 'components');
const componentDir = path.resolve(components, componentName);

rmSync(componentDir, { recursive: true, force: true });

readFile(`${components}/index.ts`, (e, data) => {
  if (e) throw e;

  const replaced = data.toString().replaceAll(`export * from './${componentName}';\n`, '');

  writeFileSync(`${components}/index.ts`, replaced);
});
