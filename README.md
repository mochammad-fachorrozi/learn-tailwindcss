# learn-tailwindcss
This is a repository learning tailwindCSS version 3.2.4

**if you use visual studio code, then install this extension :**
  - Tailwind CSS intellisense
  - Live Preview
  - PostCSS Language Support


**How to install tailwindcss use CLI(Command Line Interface):**
  1. install npm and node.js https://nodejs.org/en/download/
  2. create folder for learn
  3. open folder learn in cmd
  4. command input ```npm install -D tailwindcss``` and ```npx tailwindcss init```
  5. Configure your template paths, open file 'tailwind.config.js' then edit
     ```js
     /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: ["./src/**/*.{html,js}"],
          theme: {
            extend: {},
          },
          plugins: [],
        }
        ```
  6. create file 'src/input.css', add code
      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```
  7. command input ```npx tailwindcss -i ./src/input.css -o ./public/style.css --watch```
  8. create file 'src/index.html', add code 
    ```<link href="/public/style.css" rel="stylesheet">```
