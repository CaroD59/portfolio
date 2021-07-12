# 1 - Install ESLint

1. In Visual Studio Code go to View -> Extensions
2. Search for `eslint`: [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3. Click Install
4. Open your terminal and install the following packages:

`npm install eslint --save-dev`

5. Initialize ESLint coriguration:

`npx eslint --init`

6. During initialization you will be asked a few questions to setup eslint configuration file:

```
- How would you like to use ESLint?
To check syntax, find problems, and enforce code style

- What type of modules does your project use?
JavaScript modules (import/export)

- Which framework does your project use?
React

Does your project use TypeScript?
No

- Where does your code run?
Browser

How would you like to define a style for your project?
Use a popular style guide

Which style guide do you want to follow?
Airbnb (https://github.com/airbnb/javascript)

What format do you want your config file to be in?
JSON

Would you like to install them now with npm?
Yes
``` 

7. Override Airbnb `.eslintrc.json` with this content:

``` json
{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["airbnb", "plugin:prettier/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off"
  }
}
```

# 2 - Install Prettier

1. In Visual Studio Code go to View -> Extensions
2. Search for `prettier code formatter`: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3. Click Install
4. Open your terminal and install the following packages:

`npm i prettier eslint-config-prettier eslint-plugin-prettier -D`

5. Create a `.prettierrc.json` file in “eslint-app” directory with this content:

```
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

# 3 - Configure VSCode

1. Go to File -> Preferences -> Settings.
2. Scroll down to `Edit in settings.json`. It will open your IDE settings in json format.
3. Add this after the first opening curly brace (or before the last ending one):

```
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.eol": "\n",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true,
```

4. ESLint needs an approval the first time it's used in the project.

The execution of the ESLint library can be approved using one of the following :

* clicking on the status bar icon
* using the quick fix for the corresponding ESLint problem
* executing the command ESLint: Manage Library Execution from the command palette

All of the will open the following dialog box you need to **Allow**.

# 4 - Configure Git (only for Windows)

Force Git to use LF everywhere:

```bash
git config --global core.eol lf
git config --global core.autocrlf input
```

![Farm](https://user-images.githubusercontent.com/76882345/125263889-af46ec80-e303-11eb-87c4-86d70b7baab2.png)

![Compass](https://user-images.githubusercontent.com/76882345/125263892-afdf8300-e303-11eb-94c4-03e656346196.png)

![Portfolio](https://user-images.githubusercontent.com/76882345/125263895-b0781980-e303-11eb-9bd6-b4c0c449f584.png)

![Adopte](https://user-images.githubusercontent.com/76882345/125263896-b0781980-e303-11eb-909f-d722ee6f919c.png)

![USG](https://user-images.githubusercontent.com/76882345/125263897-b110b000-e303-11eb-9a9b-4af64f342482.png)

![EMars](https://user-images.githubusercontent.com/76882345/125264436-27adad80-e304-11eb-9c36-f8174498ea5e.png)

![Fiver](https://user-images.githubusercontent.com/76882345/125263901-b110b000-e303-11eb-8602-1c66b959ec90.png)


