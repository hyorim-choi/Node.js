/*
Formatting (Aesthetic parts such as semicolons), Linting (Where errors may occur)

01. Formatting : Prettier
> npm install --saver-dev prettier
> Add prettier version in package.json
However, if there is a "^", it can be installed even if the correct version is not = package-lock.json (Check the exact version)
> node_modules (The files below are the modules the project depends on)
>.vscode (The files under the folder are settings used only for the project)

02. Linting : ESLint

03. Type Checking : TypeScript
(Javascript can not catch type errors)
*/

// @ts-check

const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello')
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}.`)
})
