$(document).ready(function(){
	
	$('.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
	});
//handle click on house image
console.log("above house click");
  $('.house').click(function() {
  	console.log("clicked");
    $('.greeting').html("May there always be harmony in your house.");
  });
});