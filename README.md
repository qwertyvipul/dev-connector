# dev-connector

```markdown
1. Install the latest version of node.js from nodejs.org website.
```

### User Settings
```markdown
{
  "workbench.colorTheme": "Tomorrow Night Blue",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "terminal.integrated.shell.windows": "C:\\<path_to>\\bash.exe",
  "editor.formatOnSave": false,
}
```

### Plugins
```markdown
1. ES7 React/Redux/GraphQL/React-Native snippets - by dsznajder
2. Prettier - Code formatter - by Esben Petersen
3. Node.js Modules Intellisense - by Zongmin Lei
```

### Database Setup
[mLab](https://mlab.com)

### Getting Started
```markdown
# 1. Open the integrated terminal and initialize the project
npm init

# 2. Install the dependencies
# express - for backend (main framework)
# mongoose - to connect and interact with mongodb
# passport - for authentication
# passport-jwt - json web tokens
# jsonwebtokens - to generate the tokens
# body-parser - take in data through requests and then manipulate
# bcryptjs - for password encryption
# validator - for form validation
npm i express mongoose passport passport-jwt jsonwebtoken body-parser bcryptjs validator

# 3. Install the dev dependency (to avoid restarting the server back and again)
npm i nodemon --save-dev
# OR
npm i -D nodemon

# 4. Create the server.js file and there you GO!
```