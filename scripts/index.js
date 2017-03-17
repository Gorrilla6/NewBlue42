//Utilising jQuery
//Smooth Scrolling Effect
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



//When 'mailInvoker' is clicked, display element with ID 'popup'
$('#mailInvoker').click(function(){
  $("#popup").show();
});


//On hover over images on homescreen, display a black opacity box - Needs transferring to a seperate 'homepage' specific JavaScript file
$(function() {
$('#img0').hover(function() {
  $('#fadeBox0').fadeIn(500);
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







/* This is an attempt at a jQuery version of the below sidenav opener, but doesn't seem to work for some reason. Suspecting it may be something to do with the css
$('openNavMenu').click(function(){
  $('sidenav').css("width": "300px");
});

$('closebtn').click(function(){
  $('sidenav').css("width": "0px");
}); */


 //Open Side Nav - Set the width of the side navigation to 300px when burger menu icon is clicked - Translate to JQuery - Needs more customisation
 function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
 }

 //Close Side Nav - Set the width of the side navigation to 0 when close button is clicked
 function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
 }
