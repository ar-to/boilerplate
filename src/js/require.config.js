requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: './lib',//relative to require.config.js
    paths: {
        two_module: 'modules/two_module',
        one_module: 'modules/one_module'
    }
});
// Require module nav
  require(['two_module', 'one_module'],function(two_module, one_module){
    two_module.two_module();
    one_module.one_module();
  });
