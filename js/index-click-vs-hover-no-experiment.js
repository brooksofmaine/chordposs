$(document).ready(function(){
	var greetingOn = false; //flag for the state of the greeting display
	var dropdownOn = false;
	var clickedOn = false;
	$('.dropdown').click( function() {
		if (clickedOn === false) {
			$(this).find('.dropdown-menu').css({"display": "block"});
			clickedOn = true;
		}
		else if (clickedOn === true) {
			$(this).find('.dropdown-menu').css({"display": "none"});
			clickedOn = false;
		}
	});

//make the dropdowns open when hovered or clicked:
$('.dropdown').hover(function() {
	if (clickedOn === false) {	
 		$(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(500);
	}}, function() {
	if (clickedOn === false) {
 		$(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
	}
	}
);



	/*//make the dropdowns open when hovered or clicked:
	var mouseenterOrClick = function () {
		console.log("in mouseenterOrClick and dropdownOn is " + dropdownOn); 

		if (dropdownOn === false & clickedOn === false){
		console.log("in if dropdown is false and dropdownOn is " + dropdownOn);
	  	$(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(500);
		dropdownOn = true;
		}
	} //close mouseenterOrClick function
	var mouseleaveOrClick = function() {
		console.log("in mouseleaveOrClick and dropdownOn is " + dropdownOn); 
		if (dropdownOn === true){
		console.log("in if dropdown is true and dropdownOn is " + dropdownOn);
	  	$(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
		dropdownOn = false;		
		} //close if dropdown
	}//close mouseleaveOrClick function
	
	$('.dropdown').mouseenter(mouseenterOrClick).click(mouseenterOrClick);
	$('.dropdown').mouseleave(mouseleaveOrClick).click(mouseleaveOrClick);
*/
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
 	}); //close house click function
}); //close document ready function