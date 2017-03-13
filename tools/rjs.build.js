({
  baseUrl: "../src/js",//relative to gulpfile
  mainConfigFile: '../src/js/require.config.js',//relative to gulpfile
  paths: {
    two_module: 'lib/modules/two_module',//relative to baseUrl
    one_module: 'lib/modules/one_module'
  },
  include: ['require.config'],//relative to baseUrl
  //name: "../../tools/almond",//relative to baseURL
  name: "../../bower_components/almond/almond",//relative to baseURL
  out: "../dist/js/rjs_bundle.js"//relative to rjs.build.js
})
