import fs from 'fs';
import path from 'path';
import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import packageJson from './package.json';

const compPaths = path.resolve(__dirname, './src/components');
const compFiles = fs.readdirSync(compPaths, 'utf-8');

const globalName = 'dodo';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
const external = ['react', 'react-dom'];

const copyStyleFiles = compFiles.map((fileName) => ({
  src: 'src/index.style.js',
  dest: `lib/${fileName}/style`,
  rename: 'index.js',
}));

const compConfigs = compFiles.map((fileName) => ({
  input: `src/components/${fileName}/index.tsx`,
  output: [
    {
      file: `lib/${fileName}/index.js`,
      name: fileName,
      format: 'esm',
      globals,
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
      },
    }),
    postcss({
      extract: path.resolve(__dirname, `lib/${fileName}/style/index.css`),
      extensions: ['.css', '.less'],
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            '>0.2%',
            'Android >= 3.2',
            'iOS 7',
            'not dead',
            'not op_mini all',
          ],
        }),
      ],
    }),
    copy({
      targets: [...copyStyleFiles],
    }),
  ],
  external,
}));

export default [
  {
    input: packageJson.source,
    output: [
      {
        file: packageJson.cjs,
        format: 'cjs',
        globals,
      },
      {
        file: packageJson.module,
        format: 'esm',
        globals,
      },
      {
        file: packageJson.main,
        name: globalName,
        format: 'umd',
        globals,
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
          },
        },
      }),
      postcss({
        extract: path.resolve(__dirname, 'dist/index.css'),
        extensions: ['.css', '.less'],
        plugins: [
          autoprefixer({
            overrideBrowserslist: [
              '>0.2%',
              'Android >= 3.2',
              'iOS 7',
              'not dead',
              'not op_mini all',
            ],
          }),
        ],
      }),
    ],
    external,
  },
  ...compConfigs,
];
