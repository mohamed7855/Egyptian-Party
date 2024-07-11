// Loading Screen
$(function () {
  $(".loader").fadeOut(1000, function () {
    $(".loading").slideUp(1000, function () {
      $('body').css('overflow', 'auto');
      $('.loading').remove();
    });
  });
});

// Nav Animation
$("nav .btnClose").on("click", function () {
  console.log("object");
  $(".links").animate(
    { width: "0%", padding: "toggle", margin: "toggle", border: "toggle" },
    1000
  );
  $("header .open").animate({ left: "30px" }, 1000);
});
let widthA = $(".links").outerWidth(true);
$("header .open").on("click", function () {
  $("nav").animate(
    { width: "100%", padding: "toggle", margin: "toggle", border: "toggle" },
    1000
  );
  $(".links").css({ display: "block" }).animate({ width: widthA }, 1000);
  $("header .open").animate({ left: "300px" }, 1000);
});

$("nav li").on("click", function () {
  let liName = $(this).attr("href");;
  let sectionOffset = $(liName).offset();
  $("html, body").animate({ scrollTop: sectionOffset }, 2000);
  
});

// Party Time Difference Counts
const partyDay = new Date("2024-07-11T14:30") /*Y-M-D T 2pm*/
setInterval(function(){
  let timeDifference = partyDay - new Date();
  $('#Details .days').html(Math.floor(timeDifference/ (1000*60*60*24)))
  $('#Details .hours').html(Math.floor(timeDifference%(1000*60*60*24)/(1000*60*60)))
  $('#Details .minutes').html(Math.floor(timeDifference%(1000 * 60 * 60) / (1000 * 60)))
  $('#Details .seconds').html(Math.floor(timeDifference % (1000 * 60) / 1000))
},1000)

// Accordion Animation
$("#Accordion h3").on("click", function () {
  let currectElement = $(this).next("p");
  if (currectElement.is(":visible")) {
    currectElement.slideUp(1000);
  } else {
    currectElement.slideDown(1000).siblings("p").slideUp(1000);
  }
});

// contactUs Validation
$("#contactUs textarea").on("keyup", function () {
  var characterCount = $(this).val().length;
  if (characterCount >= 100) {
    $("#contactUs .charCounter").html("your available character finished");
  } else {
    $("#contactUs .charCounter").html(100 - characterCount);
  }
});
