import esbuild from 'esbuild';

esbuild.buildSync({
  entryPoints: ['src/index.js'],
  format: 'esm',
  outfile: 'dist/index.js',
  bundle: true,
});

console.log('Worked');
