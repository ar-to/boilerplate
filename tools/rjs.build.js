//This files is used for running this file form CLI for manual optimization;
//changes here should match the gulpfile requireopt task
({
  baseUrl: "./src/js/lib",//relative to gulpfile
  //mainConfigFile is relative to gulpfile; used to tell optimizer to read the main.js file
  //used for requirejs module loading; needed for shim see:http://www.requirejs.org/docs/optimization.html#mainConfigFile
  mainConfigFile: './src/js/require.config.js',//relative to gulpfile
  paths: {
      modernizr_script: 'modules/modernizr_scripts',
      two_module: 'modules/two_module',
      one_module: 'modules/one_module'
  },
  include: ['../require.config'],//relative to baseUrl
  name: "../../../bower_components/almond/almond",//relative to baseURL
  out: "build.js"//relative to gulpfile.js or gulp.dest()
})
