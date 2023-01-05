import path from "path";
//import glob from "glob";
import {normalizePath} from 'vite'
import {viteStaticCopy} from 'vite-plugin-static-copy';

//import compress from 'vite-plugin-compress';


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
   
  ]
}