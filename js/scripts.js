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

// Project color Style in JS
var bg_project_color = $(".project-content");
bg_project_color.css("background-color","black");
$(".project-content h1").css("color", "white");
$(".project-content h5").css("color", "white");

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

  //Hide when click and colapse .nav
  $('.nav a').on('click', function(){
    $('.navbar-toggle').click()
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

  // Counter
  $(".message-box").on("keyup", function() {
    console.log("keyup happened");
    var charCount = $(".message-box").val().length;
    $("#char-count").html(charCount);

    if(charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "black");
    };
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
