import esbuild from 'esbuild';

await esbuild.serve({
  servedir: 'src',
}, {
  entryPoints: ['./src/index.jsx'],
  outdir: 'src/js',
  bundle: true,
  sourcemap: true,
}).then(server => {
  console.log(server);
});

console.log('serving...')
