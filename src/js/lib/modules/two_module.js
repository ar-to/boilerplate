define(function(){
  console.log('nav script module loaded');
  return {
    two_module: function() {
      $(document).ready(function() {
        console.log("two module")
      }); //end document ready
    }//end two_module method as function
  };//end return
});//end define()
