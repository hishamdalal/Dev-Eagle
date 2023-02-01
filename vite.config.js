import path from "path";
//import glob from "glob";
import {normalizePath} from 'vite'
import {viteStaticCopy} from 'vite-plugin-static-copy';
//import compress from 'vite-plugin-compress';
/* 
import watch from 'watch';
import {exec} from 'node:child_process';

const ignoredFiles = ['dist', 'vite.config.js'];

watch.watchTree('./', {
  filter: (path) =>  !ignoredFiles.includes(path)
}, () => {
  exec('npm run options', (_, output, err) => {
    if (output) console.log(output);
    if (err) console.log(err);
  });
});
 */
module.exports = {
  base: '',
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      //input: glob.sync(path.resolve(__dirname, "src", "*.html")),
      index: path.resolve(__dirname, 'src/index.html'),

      output: {
        format: 'cjs', // ( es | cjs )
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          console.log('assetFileNames', assetInfo.name, extType);

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name][extname]`;
        },
        entryFileNames: (assetInfo) => {
          //"assets/[name].js",
          let extType = assetInfo.name;
          console.log('entryFileNames', assetInfo.name, extType);

          return `assets/js/[name].js`;

        },
        //chunkFileNames:  "assets/[name].js",
        //assetsFileNames: "[name].[ext]",
      }
    },
    assetsDir: 'assets',
    publicDir: 'public',
  },
  plugins: [
    viteStaticCopy({
      targets: [{
        src: normalizePath(path.resolve(__dirname, './src/img')),
        dest: './assets/',
      }, ],
    }),
   
  ],
  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      //'/MyApp/Dev-Eagle': 'http://127.0.0.1:5173',
      '/MyApp/Dev-Eagle': 'http://127.0.0.1:80',
    },
    //origin: 'http://127.0.0.1:8080',
    port: 80,
    hot: true,
    host: true
  }
  
}