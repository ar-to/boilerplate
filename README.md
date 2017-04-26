# Boilerplate

##### NodeJS/NPM, Bower, SASS, RequireJS/r.js, PugJS, Gulp, Modernizr, Normalize.css

Boilerplate provides the files necessary to start a front-end web development project. JSON files to help install all dependancies quickly with npm and bower but also a basic directory to use that works with the gulpfile.js, making it easy to get up and running writing markup templates with PugJS, RequireJS and Sass. Boilerplate also comes with modernizr and normalize.css. Yeoman generators are also an option once yeoman in installed globally.

## Getting Started

Run the following command inside the CLI to begin using Boilerplate

``` bash
$ npm install
$ bower install
$ npm start
``````

The commmand `npm start` initiates the task `gulp serve` which runs all tasks that compile to the dist folder and also automatically runs browsersync in chrome, though other browsers can be chosen inside the gulpfile.js

## Global NPM packages

Below are packages installed globally with npm to use with the command line interface. Refer to each tool's website for installation instructions.

├── bower@1.8.0
├── generator-h5bp@1.4.0
├── grunt-cli@1.2.0
├── gulp-cli@1.2.2
├── less@2.7.2
├── modernizr@3.3.1
├── npm@4.4.0
├── npm-check@5.4.0
├── pug-cli@1.0.0-alpha6
├── requirejs@2.3.3
└── stylus@0.54.5
└── yo@1.8.5

## Directory Structure

This is the directory structure that can be used with npm modules and gulpfile.js.

```bash
.
├── dist
│   ├── css
│   ├── js
│   ├── minify
│   ├── sourcemaps
│   └── templates
│       ├── fixed_nav
│       ├── grid
│       ├── nfixed_nav
│       └── syntax
├── src
│   ├── css
│   ├── js
│   │   └── lib
│   │       └── modules
│   ├── pug
│   │   ├── base
│   │   ├── components
│   │   └── template_base
│   └── sass
│       ├── base
│       ├── components
│       ├── layout
│       ├── utils
│       └── vendors
└── tools
```

Use this guide for possible files used inside the guide from above. This example comes from Mangree Framework.

``` bash
.
├── README.md
├── bower.json
├── dist
│   ├── css
│   │   ├── index.css
│   │   ├── main.css
│   │   └── prism.css
│   ├── js
│   │   ├── bundle.js
│   │   ├── modernizr.js
│   │   ├── prism.js
│   │   └── rjs_bundle.js
│   ├── minify
│   ├── sourcemaps
│   │   ├── bundle.js.map
│   │   └── main.css.map
│   └── templates
│       ├── fixed_nav
│       │   └── fixed_nav.html
│       ├── grid
│       │   └── grid.html
│       ├── index.html
│       ├── nfixed_nav
│       │   └── nfixed_nav.html
│       └── syntax
│           └── syntax.html
├── gulpfile.js
├── package.json
├── src
│   ├── css
│   │   └── prism.css
│   ├── js
│   │   ├── lib
│   │   │   └── modules
│   │   │       ├── nav_color.js
│   │   │       ├── navmod.js
│   │   │       └── smoothscroll.js
│   │   └── require.config.js
│   ├── pug
│   │   ├── base
│   │   │   ├── _basic.pug
│   │   │   ├── _footer.pug
│   │   │   └── _head.pug
│   │   ├── components
│   │   │   ├── _fixed_nav.pug
│   │   │   ├── _grid.pug
│   │   │   ├── _nfixed_nav.pug
│   │   │   └── _syntax-highlighting.pug
│   │   ├── fixed_nav.pug
│   │   ├── grid.pug
│   │   ├── index.pug
│   │   ├── nfixed_nav.pug
│   │   ├── syntax.pug
│   │   └── template_base
│   │       ├── _temp_footer.pug
│   │       └── _temp_head.pug
│   └── sass
│       ├── base
│       │   ├── _colors.sass
│       │   ├── _reset.sass
│       │   ├── _special.sass
│       │   ├── _syntax_highlighting.sass
│       │   └── _typography.sass
│       ├── components
│       │   ├── _buttons.scss
│       │   └── _navigation.sass
│       ├── layout
│       │   ├── _grid.sass
│       │   └── _header.scss
│       ├── main.sass
│       ├── utils
│       │   └── _variables.sass
│       └── vendors
│           └── _vendor.scss
└── tools
    ├── almond.js
    ├── app.build.js
    ├── modernizr-config.json
    └── rjs.build.js
``````

## Gulp

If you are not to familiar with using gulp, globs, and node but want to make sure the directory works with the files provided, try to use the directory structure list above as a guide. Gulp can be run from the shell as a global command or via [npm scripts](#node/npm).

``` bash
$ npm run gsass #watches only sass changes
$ npm run gpug #watches only pug changes
$ npm run gall #watches pug, sass, and requirejs changes
``````

## Yeoman

Boilerplate can use Yeoman to download the [html5 boilerplate](https://github.com/h5bp/generator-h5bp#readme) or any other as desired. Run the following command to install the yo generator.

```bash
$ yo h5bp
``````

## Bower

Boilerplate can also use Bower to install and manage front-end dependancies such as RequireJS, etc.
Boilerplate comes with a bower.json that will install all of the dependancies for you. Follow the commands below on your terminal to do this. 

```shell
$ npm install -g bower
$ bower install
```
Or you can install dependancies individually

```shell
$ bower install <package>
``````

### Bower Components/Dependancies

1. HTML5 Boilerplate

 - Use on its own to establish a starting point in your web dev workflow. Use other components as needed. By using bower to have a copy of the HTML5 boilerplate it can updated and then use only what is need in the project such as the directories and config files.
 - Visit these site for information on using this boilerplate
 - [creativeblog.com](http://www.creativebloq.com/web-design/how-use-html-boilerplate-11513798)

2. Normalize.css

 - A way to start styles fresh without using browser defaults and to help them be cross-browser compatible.

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

``` javascript
  "devDependencies": {
    "modernizr": "^3.3.1"
  },
```

Make sure the dependacy and the command desired is added to script object.

``` javascript
"scripts": {
    "modernizr": "modernizr -c modernizr-config.json -u"
  },
```

There are two ways to run this dependancy through the command line with npm. One is by including the path and second is to use the scripts:

returns: Modernizr build saved to /Users/rootuser/boilerplate/modernizr.js`
``` bash
$ ./node_modules/.bin/modernizr -c modernizr-config.json -u
```

OR retunrs same as above but is less crowded

``` bash
$ npm run modernizr
```

#### NPM Scripts

Here are the available commands using npm scripts.

runs the requirejs optimizer r.js and creates a single file rjs_bundle.js inside dist/js/

``` bash
$ npm run rjs
```
watches only sass changes
``` bash
$ npm run gsass
```
watches only pug changes
``` bash
$ npm run gpug
```
watches pug, sass, and requirejs changes
``` bash
$ npm run gall
```````

#### BASH (UNIX shell)

Bash is the command line interface (CLI) for mac but you may be using another depending on your operating system. The reason this is added here is because Boilerplate serves the developer a starting point for setting his dev workflow if there not one currently. Here a few useful tools to use on your terminal.

Assuming you have [Homebrew](http://docs.brew.sh/) installed:

tree - program that shows a directory list as a tree format
```bash
$ brew install tree
```

``` bash
then run a command to show only directories but not one
$ tree -I 'node_modules'
```````

## RequireJS

(RequireJS)[http://www.requirejs.org/] is an AMD javascript loader that enables the use of multiple scripts as files called modules and helps make writing logic easier. In Boilerplate, requirejs can be used to load modules as decribed in their documentation but also global files such as modernizr, prism, jquery, underscorejs, etc.

#### Global files

Include global files inside the following folder

├── src
│   ├── css
│   ├── js
│   │   └── lib
│   │        └── require.config.js

Then add the following code to the require.config.js file

```
requirejs.config({
//other options ,
shim: {//using shim to load "browser globals" see: http://www.requirejs.org/docs/api.html#config-shim
      'prism': {
        exports: 'Prism'
      }
    }
});
````
