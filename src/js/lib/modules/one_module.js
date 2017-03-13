define(function() {
  console.log('nav_color script module loaded');
  return {
      one_module: function() {
          $(document).ready(function() {
            console.log("one module")
          }); //end document ready
      } //end one_module method as function
  }; //end return
}); //end define()
