const path = require('node:path');
const { mkdirSync, writeFileSync, appendFileSync } = require('node:fs');

const pageName = process.argv[2];

const src = path.resolve(__dirname, '..', 'src');
const pages = path.resolve(src, 'pages');

mkdirSync(`${pages}/${pageName}`);

const pageDir = path.resolve(pages, pageName);

writeFileSync(
  `${pageDir}/${pageName}.tsx`,
  (() => {
    const importStyles = `import \'./${pageName}.scss\';`;
    const exportComponent = `export const ${pageName} = () => {\n\treturn ();\n};`;

    return [importStyles, exportComponent].join('\n\n');
  })(),
);

writeFileSync(`${pageDir}/${pageName}.scss`, '');

writeFileSync(`${pageDir}/index.ts`, `export * from \'./${pageName}\'`);

appendFileSync(`${pages}/index.ts`, `export * from \'./${pageName}\';\n`);
