const path = require('node:path');
const { writeFileSync, appendFileSync } = require('node:fs');

const hookName = process.argv[2];

const src = path.resolve(__dirname, '..', 'src');
const hooks = path.resolve(src, 'hooks');

writeFileSync(`${hooks}/${hookName}.ts`, `export const ${hookName} = () => {};`);

appendFileSync(`${hooks}/index.ts`, `export * from \'./${hookName}\';\n`);
