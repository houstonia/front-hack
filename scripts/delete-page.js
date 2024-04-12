const path = require('node:path');
const { rmSync, readFile, writeFileSync } = require('node:fs');

const pageName = process.argv[2];

const src = path.resolve(__dirname, '..', 'src');
const pages = path.resolve(src, 'pages');
const pageDir = path.resolve(pages, pageName);

rmSync(pageDir, { recursive: true, force: true });

readFile(`${pages}/index.ts`, (e, data) => {
  if (e) throw e;

  const replaced = data.toString().replaceAll(`export * from './${pageName}';\n`, '');

  writeFileSync(`${pages}/index.ts`, replaced);
});
