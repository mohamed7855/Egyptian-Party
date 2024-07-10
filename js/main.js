$("#Accordion h3").on("click", function () {
  let currectElement = $(this).next("p");
  if (currectElement.is(":visible")) {
    currectElement.slideUp(1000);
  }
  else{
    currectElement.slideDown(1000).siblings("p").slideUp(1000);
  }
});

$("#contactUs textarea").on("keyup", function () {
  var characterCount = $(this).val().length;
  if (characterCount >= 100) {
    $("#contactUs .charCounter").html("your available character finished");
  } else {
    $("#contactUs .charCounter").html(100 - characterCount);
  }
});
