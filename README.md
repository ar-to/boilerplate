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
