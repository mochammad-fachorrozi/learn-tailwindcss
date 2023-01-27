# learn-tailwindcss
This is a repository learning tailwindCSS version 3.2.4

**if you use visual studio code, then install this extension :**
  - Tailwind CSS intellisense
  - Live Preview
  - PostCSS Language Support


**How to install tailwindcss use CLI(Command Line Interface):**
  1. install npm and node.js https://nodejs.org/en/download/
  2. create folder for learn, then open folder learn in cmd
  3. command input ```npm init -y``` make add file package.json
  4. command input ```npm install -D tailwindcss``` and ```npx tailwindcss init```
  5. Configure your template paths, open file 'tailwind.config.js' then edit
     ```js
     /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: ["./public/**/*.{html,js}"],
          theme: {
            extend: {},
          },
          plugins: [],
        }
        ```
  6. create file 'src/css/input.css', add code
      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```
  7. command input ```npx tailwindcss -i ./src/css/input.css -o ./public/css/style.css --watch```
  8. create file 'public/index.html', add code 
    ```<link href="css/style.css" rel="stylesheet">```
