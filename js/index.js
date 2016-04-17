$(document).ready(function(){
	
	$('.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
	});

	 $('.house').click(function(){
 	// $('.greeting').html("May there always be harmony in your house.");
 		//$('.greeting').toggle(function(){
 			console.log("clicked");
 			$('.greeting').css({"display": "block"}).delay (2000).fadeOut(600);
 			//$('.greeting').fadeOut(600);

 		//$('greeting').slideUp(600).delay(1200).fadeOut(600);
 		//$( ".greeting" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
 	});

});