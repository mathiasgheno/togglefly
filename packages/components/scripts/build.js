import esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['./src/index.jsx'],
  bundle: true,
  external: ['react'],
  format: 'esm',
  outfile: 'dist/index.js',
}).catch(() => process.exit(1));

console.log('Worked!');
