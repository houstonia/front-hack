const path = require('node:path');
const { rmSync, readFile, writeFileSync } = require('node:fs');

const dirName = process.argv[2];
const componentName = process.argv[3];

const src = path.resolve(__dirname, '..', 'src');
const dirPath = path.resolve(src, dirName);
const componentDir = path.resolve(dirPath, componentName);

rmSync(componentDir, { recursive: true, force: true });

readFile(`${dirPath}/index.ts`, (e, data) => {
  if (e) throw e;

  const replaced = data.toString().replaceAll(`export * from './${componentName}';\n`, '');

  writeFileSync(`${dirPath}/index.ts`, replaced);
});
