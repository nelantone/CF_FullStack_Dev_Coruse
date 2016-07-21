// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
// Facebook
window.fbAsyncInit = function() {
  FB.init({
    appId      : 'your-app-id',
    xfbml      : true,
    version    : 'v2.6'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

var bg_project_color = $(".project-content");
bg_project_color.css("background-color","#6B8E23");

// Gmaps
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.5064981, lng: 13.3874326},
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    heading: 90,
    tilt: 45
  });
}

function rotate90() {
  var heading = map.getHeading() || 0;
  map.setHeading(heading + 90);
}

function autoRotate() {
  // Determine if we're showing aerial imagery.
  if (map.getTilt() !== 0) {
    window.setInterval(rotate90, 3000);
  }
}

// Load in the end when DOM is ready
$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });

  // Stellar
  $.stellar();

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Grid
  $(function() {
    Grid.init();
  });

  // Button
  $("#button").on("click", function() {
    console.log("clicked");
    var comment = $(".message-box").val();
    var name = $("#name").val();
    var emailID = $("#email").val();
      atpos = emailID.indexOf("@");
      dotpos = emailID.lastIndexOf(".");

    if( name == "" || $("#name").val().length < 3) {
     alert( "Please provide your name and with more than 3 characters" );
     $("#name").focus() ;
     return false;
    } if (atpos < 1 || ( dotpos - atpos < 2 ) || $("#email").val().length <= 7) {
     alert( "Please provide a correct email" );
     $("#email").focus() ;
     return false;
    } if(comment == "") {
    $(".message-box").css("border-color", "red")
    } else {
      // show value
      $("#visible-comment").html(comment);
      // hide comments
      $(".message-box").hide("slow", function() {
        alert("I have recieved your message! Thanks " + name + " :)");
      });
    }
    return false;
  });
});


// 1. What is the relationship between the DOM, JavaScript (programming language) and jQuery (library for JavaScript)?
// Answer:
// JS is a Programming language
// Jquery is a library of JS*(javascript).
// DOM Document Object Model is a cross-platform and language-independent application that treats the document as a tree structure,  visible changes can be reflected in the document.

// 2. Describe basic data types, including integers, booleans, and strings.
// Answer:
// integers: numbers without decimals.
// booleans: true or false.
// strings: printing or  represent words and letters.

// 3.Why do we need $( document ).ready() ?
// Answer:
// Because we need to be sure will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute

// 4. Describe what happens when you pass an argument to a function.
// Answer:
// to call the argument when I will neeed it.

// 5. How do you create an event listener using the on() method?
// Answer:
// .on( events [, selector ] [, data ], handler )

// event="click"
// selector= string to filter the descendants of the selected elements that trigger the event*(null or ommited in this case)
// data= console.log("clicked");
// handler=A function to execute when the event is triggered. *The value false is also allowed as a shorthand for a function that simply does return false.

// Example.
// $("#button").on("click", function() {
//   console.log("clicked");
//   return false;
// });