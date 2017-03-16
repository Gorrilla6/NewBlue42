//*Side Navigation Menu*//
/* Open Side Nav - Set the width of the side navigation to 250px when burger menu icon is clicked. This perhaps needs rehashing a whole bunch more to make it more my own*/
function openNav(){
  document.getElementById("mySidenav").style.width = "300px";
}

/*Close Side Nav - Set the width of the side navigation to 0 when close button is clicked*/
function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
}


$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});




























































//*Email Popup Form - Currently resets user's view to the top of the screen. This needs to be fixed.*//
$ = function(id) {
  return document.getElementById("popup");
  }
var show = function(id) {
	$(id).style.display ='block';
  }
var hide = function(id) {
	$(id).style.display ='none';
  }






//*On hover over images on homescreen, display a black opacity box - Needs transferring to a seperate 'homepage' specific JavaScript file*//
$(function() {
   $('#img0').hover(function() {
       $('#fadeBox0').stop().fadeIn(500);
     }, function() {
   $('#fadeBox0').fadeOut();
    });
});

$(function() {
    $('#img1').hover(function() {
        $('#fadeBox1').fadeIn(500);
      }, function() {
    $('#fadeBox1').fadeOut();
      });
});

$(function() {
   $('#img2').hover(function() {
       $('#fadeBox2').fadeIn(500);
     }, function() {
   $('#fadeBox2').fadeOut();
      });
});

$(function() {
    $('#img3').hover(function() {
        $('#fadeBox3').fadeIn(500);
      }, function() {
    $('#fadeBox3').fadeOut();
       });
});
