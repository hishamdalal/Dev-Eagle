![Logo](https://github.com/hishamdalal/Dev-Eagle/blob/master/src/logo-stroke.png?raw=true)
# Dev-Eagle

Web Development Starter via Vite

### How to use:
1. download or clone repository
2. Install dependencies
  ```
  npm i
  ```
3. Change current directory in 'vite.config.js'
   ```
    server: {
      proxy: {
        '/path-to-directory/Dev-Eagle': 'http://127.0.0.1:80',
      },
   }
   ```
4. Run for development or production 
  ```
  npm run dev
  npm run build
  ```



