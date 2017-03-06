# Boilerplate

Boilerplate provides JSON files to help install all dependancies quickly with npm and bower. 

## Bower

This boilerplate uses Bower to install and manage dependancies such as RequireJS, etc.
Boilerplate comes with a bower.json that will install all of the dependancies for you. Follow the commands below on your terminal to do this. 

```shell
$ npm install -g bower
$ bower install
```
Or you can install dependancies individually

```shell
$ bower install <package>
```

### Bower Components/Dependancies

1. HTML5 Boilerplate

 - Use on its own to stablish a starting point in your web dev workflow. Use other components as needed.
 - Visit these site for information on using this boilerplate
  - [creativeblog.com](http://www.creativebloq.com/web-design/how-use-html-boilerplate-11513798)

2. Normalize.css

 - A way to start styles fresh without using brower defaults and to help them be cross-brower

3. RequireJS

 - Work on your Javascript with modules and load a single file inside your index.html while using the require.js file to help pull all your modules at once. You can then optimize (minify/concatenante) your files into a single one with r.js, a optimization tool for RequireJS.

## Node/NPM

To use node modules you need to install it first. NPM comes as part of your nodeJS install. You can install NodeJS either by downloading it from the wabsite or with a package manager. In mac follow these steps:

Install [Homebrew](https://brew.sh)

Then install a formula

```shell
$ brew install node
```

This installs node and npm. You can also go the nvm route, which is the node version manager if you plan to work on node more. In this case you can have a global node installed and then install nvm to manage more versions but a few things change like where your npm global modules are installed and where your node versions are installed. But see nvm documentation for information.

#### Using npm as a build tool to replace Gulp/Grunt

This is a debatable subject but it is an alternative to installing gulp/grunt as global packages to use in the CLI (command line interface). The package.json in Boilerplate contains [npm scripts](https://docs.npmjs.com/misc/scripts) that runs commands by looking at the currently installed dependancies. Here is an example with modernizr as a development dependancy.

Install modernizr as a devDependacy
```bash
$ npm install modernizr --save-dev
```
```javascript
  "devDependencies": {
    "modernizr": "^3.3.1"
  },
```
Make sure the dependacy and the command desired is added to script object.
```javascript
"scripts": {
    "modernizr": "modernizr -c modernizr-config.json -u"
  },
```
There are two ways to run this dependancy through the command line with npm. One is by including the path and second is to use the scripts:
```bash
$ ./node_modules/.bin/modernizr -c modernizr-config.json -u
#returns: Modernizr build saved to /Users/rootuser/boilerplate/modernizr.js
#OR
$ npm run modernizr
#retunrs same as above but is less crowded
```

#### BASH (UNIX shell)

Bash is the command line interface (CLI) for mac but you may be using another depending on your operating system. The reason this is added here is because Boilerplate serves the developer a starting point for setting his dev workflow if there not one currently. Here a few useful tools to use on your terminal.

Assuming you have [Homebrew](http://docs.brew.sh/) installed:

tree - program that shows a directory list as a tree format
```bash
$ brew install tree
#then run a command to show only directories but not one
$ tree -I 'node_modules'
```