# dev-connector

[Vist Website](https://stark-oasis-88917.herokuapp.com/)

```markdown
1. Install the latest version of node.js from nodejs.org website.
```

### User Settings
```json
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
```bash
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

### Getting along nodemon
make changes in _package.json_
```json
"scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
now run using this command
```bash
npm run server
```

### Connecting to the database
```markdown
1. Create separate config/keys.js file and declare URI
2. Connect using mongoose
```

### Diving Deeper
```markdown
1. Create routes
2. Create models
3. Create logics and validations
```

### Getting started with GUI
```bash
# install create-react-app
npm i -g create-react-app

# Create react client in project folder
create-react-app client
```

### Getting along create-react-app
Add to _/client/package.json_
```json
"proxy": "http://localhost:5000"
```

### Running multiple scripts
```bash
npm i concurrently
```

### Direct client installation (when deploying)
make changes in _package.json_
```json
"scripts": {
    "client-install": "npm install --prefix client",
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### New way to run the server
```bash
npm run dev
```

### In client directory install
```bash
# react router
npm i react-router-dom``bash

#axios - for testing without redux (may use fetch api as well)
npm i axios

#classnames (to add conditional classnames)
npm i classnames
```

### Getting along redux with react
```bash
# Install the required modules (in client folder)
npm i redux react-redux redux-thunk
npm i jwt-decode
```

### Deploying to Heroku
```bash
# After installing heroku CLI in your system and to path
heroku login
heroku create
```