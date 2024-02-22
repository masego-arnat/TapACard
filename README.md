# Changes

You can view the exact changes I made in the PR, but here's a list of the changes made as well as the reason for them
and what they do:

1. Ran `npm init` which creates a package.json. This will manage our front-end dependencies. For now, that is just
   Tailwind. I have removed a bunch of unnecessary parts of this file.
2. Added `tailwindcss` as a dependency using `npm install -D tailwindcss`.
3. Initialised the tailwind config using `npx tailwind init`. Included the directories where my views are.
4. In wwwroot/css/site.css, add the required tailwind directives.
5. Added a build script to the
   package.json `npx tailwindcss -i ./wwwroot/css/globals.css -o ./wwwroot/css/globals.css --minify`. You can run this
   script in your terminal using `npm run css:build`.
6. Added another script to be used during dev. This will watch your files for any changes, and regenerate the output
   file. When you run your project, run `npm run css:dev` so it can change as you develop.
7. Added a link to the output file in the `_Layout.cshtml` file.
8. Optional: Added a section to the .csproj file that will run the build script every time the project is built, so it
   will be ready for production.