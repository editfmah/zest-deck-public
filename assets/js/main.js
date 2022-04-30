jQuery(document).ready(function(jQuery) {

  
  jQuery( '.services-sec .services-box .box' ).matchHeight({
    byRow:true
  });
  

});


// mobile menu open close
function openNav() {
  document.getElementById("mySidenav").style.left = "0";
}

function closeNav() {
  document.getElementById("mySidenav").style.left = "-100%";
}

