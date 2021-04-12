# NodeJS Server - ES6 Code

## Running:

| script  | command                |
| ------- | ---------------------- |
| install | `npm install`          |
| lint    | `npm run script lint`  |
| start   | `npm run script start` |
| watch   | `npm run script watch` |


## Description and Review

Running Nodejs Server ES6 code without any bundle operation (like webpack, rollup, ...etc) <br>

Support in the new feature of nodejs from nodejs v14+ <br>
To support ES6 code you need to add to your `package.json` file the attribute: `"type": "module",` <br>
The ES6 is build in, but have to make some changes for it. <br>

## import .js feature
In ES6 import are async/promise! <br>
so for importing your local files (not node_modules) - you must mention the suffix file name, like .js <br>
example: <br>
```js
import app from './app.js';
```

## import .json feature
Import JSON files are ugly, but the example how to import json file <br>
you need to synchronize your imports with await. (in general import is async/promise) <br>
example: <br>

`./src/test.json`
```json
{
	"hello": "world"
}
```
```js
const { default: jsonObj } = await import('./test.json');
console.log('imported json file\n', JSON.stringify(jsonObj, null, 4));
```
```text
OUTPUT:
imported json file
 {
    "hello": "world"
}
```

AND you need to expilicy run node with the following flag <br>
example: <br>
`node --experimental-json-modules ./src/server.js`


## await import feature
In general, you not need anymore the @babel dependencies, unless if you want to use features that not in node version right now, for example <br>
To support top-level-await feature that mean use await on the global scope, <br>
It's a new feature currently in stage3/4 so, <br>
1. we installed the following dependencies: <br>
`npm install --save-dev @babel/core @babel/eslint-parser @babel/plugin-syntax-top-level-await`

<br>

2. add .babelrc file <br>
```json
{
	"plugins": [
        "@babel/plugin-syntax-top-level-await"
    ]
}
```

<br>

3. in the .eslintrc file add the following `parser": "@babel/eslint-parser"` flag: <br>
example: <br>
```json
{
	"extends": [
		"eslint:recommended",
		"prettier"
	],
	"parserOptions": {
		"ecmaVersion": 2021,
		"sourceType": "module"
	},
	"parser": "@babel/eslint-parser",
	"env": {
		"node": true,
		"es6": true
	},
	"rules": {
		"enforceInMethodNames": 0,
		"no-underscore-dangle": "off",
		"no-tabs": "off",
		"no-console": "off",
		"max-classes-per-file": "off",
		"no-unused-vars": "off",
		"class-methods-use-this": "off",
		"no-throw-literal": "off",
		"arrow-parens": "off",
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "single", { "avoidEscape": true }],
		"semi": ["error", "always"],
		"no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],
		"prefer-rest-params": "warn",
		"prefer-const": "warn"
	}
}
```

<br>

Enjoy
