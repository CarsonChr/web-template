import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['./src/app.ts'],
  bundle: true,
  outfile: 'app.js',
  loader: { '.ts': 'ts' },
  minify: false,
  tsconfig: './tsconfig.json',
})