jQuery(document).ready(function(){
  jQuery("form#appointment").submit(function(event){
    event.preventDefault();
    window.open("done.html", "_self");
  });
});