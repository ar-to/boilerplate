requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: './lib',//relative to require.config.js
    paths: {
        modernizr_script: 'modules/modernizr_scripts',
        two_module: 'modules/two_module',
        one_module: 'modules/one_module'
    }
    /*shim: {//using shim to load "browser globals" see: http://www.requirejs.org/docs/api.html#config-shim
      'prism': {
        exports: 'Prism'
      }
    }*/
});
// Require module nav
  require(['modernizr_script', 'two_module', 'one_module'],function(modernizr_script, two_module, one_module){
    two_module.two_module();
    one_module.one_module();
  });
