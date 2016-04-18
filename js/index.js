$(document).ready(function(){
	var greetingOn = false; //flag for the state of the greeting display
	
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
});