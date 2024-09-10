## Zadatak 📝

1. Instalirati paket lite-server i spremiti ga kao developer dependency u projekt - lite-server dokumentacija https://github.com/johnpapa/lite-server
   > npm install lite-server --save-dev
2. Provjeriti package.json da li je lite-server upisan unutra (mora biti označen kao 'devDependecies')
3. Unutar package.json dodati server scriptu za lite-server (unutar 'scripts', dodati redak 'server': 'lite-server')
4. Pokrenuti lite server (npm run server)
5. U index.html dodati još jedan paragraf i spremiti datoteku

> In the package.json file of your package manager, i.e., npm, there is an element known as devDependencies. It contains all the packages with specific version numbers that you require in the development phase of your project and not in the production or testing environments. Whenever you add a library or module that is required only in the development of your project, you can find it under devDependencies.

Saznajte više na https://www.knowledgehut.com/blog/web-development/npm-install-dev-dependencies

> The package-lock.json file ensures that your project uses the exact same versions of dependencies every time it’s installed. Unlike package.json, which specifies version ranges, package-lock.json locks down the precise versions of all dependencies and their sub-dependencies. This guarantees consistency across different environments and prevents unexpected issues caused by updates to external packages. When you run npm install, npm checks the package-lock.json file to install the exact versions listed, ensuring the project behaves the same way for all developers and in production. It’s recommended to commit this file to version control to maintain stability and speed up future installations.

Saznajte više o package-lock.json datoteci na https://docs.npmjs.com/cli/v10/configuring-npm/package-lock-json
