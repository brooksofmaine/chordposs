
$(document).ready(function() {
  var greetingOn = false; //flag for the state of the greeting display
  //if a button is clicked and greeting is on, fadeout the greeting
  $('.dropdown').click(function() {
    console.log("button clicked");
    if (greetingOn === true) {
      $('.greeting').fadeOut(360);
      greetingOn = false;
      console.log("greetingOn is " + greetingOn);
    }
  });

  //make the house image display a greeting if clicked:
  $('.house').click(function() {
    if (greetingOn === false) {
      $('.greeting').css({
        "display": "block"
      });
      greetingOn = true;
    }
    //if the greeting is on, fade it out if house image is clicked
    else {
      $('.greeting').fadeOut(360);
      greetingOn = false;
    }
  });
});