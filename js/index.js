$(document).ready(function(){
	var greetingOn = false; //flag for the state of the greeting display

	//make the dropdowns open when hovered or clicked:
	$('.dropdown').hover(function() {
 		$(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(500);
	}, function() {
 		$(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
	});

	//make the house image display if hovered over

	$('.house').hover (function() {
		$('.greeting').stop(true, true).delay(50).fadeIn(500);
	}, function(){
		$('.greeting').stop(true, true).delay(50).fadeOut(300);

	});

/*
	
	//make the house image display a greeting if clicked:
	 $('.house').click(function(){
 			if (greetingOn === false) {
 			$('.greeting').css({"display": "block"});
 			greetingOn = true;
 		}
 		//if the greeting is on, fade it out if house image is clicked
 		else {
 			$('.greeting').fadeOut(480);
 			greetingOn = false;
 		}			
 	});
 */
});