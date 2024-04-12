const path = require('node:path');
const { mkdirSync, writeFileSync, appendFileSync, existsSync } = require('node:fs');

const directory = process.argv[2];
const componentName = process.argv[3];

const src = path.resolve(__dirname, '..', 'src');
const dirPath = path.resolve(src, directory);

if (!existsSync(dirPath)) mkdirSync(dirPath);

mkdirSync(`${dirPath}/${componentName}`);

const componentDir = path.resolve(dirPath, componentName);

writeFileSync(
  `${componentDir}/${componentName}.tsx`,
  (() => {
    const importStyles = `import \'./${componentName}.scss\';`;
    const exportComponent = `export const ${componentName} = () => {\n\treturn ();\n};`;

    return [importStyles, exportComponent].join('\n\n');
  })(),
);

writeFileSync(`${componentDir}/${componentName}.scss`, '');

writeFileSync(`${componentDir}/index.ts`, `export * from \'./${componentName}\'`);

appendFileSync(`${dirPath}/index.ts`, `export * from \'./${componentName}\';\n`);
