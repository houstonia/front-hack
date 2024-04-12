const path = require('node:path');
const { writeFileSync, appendFileSync, existsSync, mkdirSync } = require('node:fs');

const sliceName = process.argv[2];

const src = path.resolve(__dirname, '..', 'src');
const redux = path.resolve(src, 'redux');
const slices = path.resolve(redux, 'slices');

if (!existsSync(slices)) mkdirSync(slices);

writeFileSync(
  `${slices}/${sliceName}Slice.ts`,
  (() => {
    const importStr = "import { createSlice } from '@reduxjs/toolkit';";

    const initialStateType = 'InitialState';
    const initialStateTypeDef = `interface ${initialStateType} {}`;

    const initialStateDef = `const initialState: ${initialStateType} = {};`;

    const slice = `const ${sliceName}Slice = createSlice({\n\tname: \'${sliceName}\',\n\tinitialState,\n\treducers: {},\n});`;

    const exports = [
      `export const ${sliceName}Actions = ${sliceName}Slice.actions;`,
      `export const ${sliceName}Reducer = ${sliceName}Slice.reducer;`,
    ].join('\n');

    return [importStr, initialStateTypeDef, initialStateDef, slice, exports].join('\n\n');
  })(),
);

appendFileSync(`${slices}/index.ts`, `export * from \'./${sliceName}Slice\';\n`);
