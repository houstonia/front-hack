const path = require('node:path');
const { mkdirSync, writeFileSync, appendFileSync } = require('node:fs');

const componentName = process.argv[2];

const src = path.resolve(__dirname, '..', 'src');
const components = path.resolve(src, 'components');

mkdirSync(`${components}/${componentName}`);

const componentDir = path.resolve(components, componentName);

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

appendFileSync(`${components}/index.ts`, `export * from \'./${componentName}\';\n`);
