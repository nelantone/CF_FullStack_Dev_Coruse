// For the Task 2.8
// var works = [
//   "img/1.jpg",
//   "img/3.jpg",
//   "img/a5.jpg",
//   "img/a6.jpg"
// ];

var works = [
  {
    title: "Formentera, Spain",
    pic: "img/1.jpg",
    url: "https://c2.staticflickr.com/6/5061/5898445045_e94e0c4338_b.jpg"
  },
  {
    title: "Wienerwald, Austria",
    pic: "img/3.jpg",
    url: "https://c2.staticflickr.com/4/3340/4631011939_d6f27e0136_b.jpg"
  },
  {
    title: "Puebla, Mexico",
    pic: "img/a5.jpg",
    url: "https://c2.staticflickr.com/4/3416/4631613538_aaf3be6751_b.jpg"
  },
  {
    title: "Berlin, Germany",
    pic: "img/a6.jpg",
    url: "https://c2.staticflickr.com/8/7334/8723324116_a8b0df5abc_b.jpg"
  }
];

for(var i = 0; i < works.length; ++i ) {
  $("#photos").append("\
    <div class='col-sm-3 col-md-3'>\
      <a href="+ works[i].url + " class='work-img'>\
        <img class='img-responsive' src='" + works[i].pic + "'>\
        <span class='info'><p class='proj-title'>Title:</p> " + works[i].title + " </span>\
      </a>\
    </div>\
  ");
  var images = $("#photos .img-responsive");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};

$(".work-img").mouseenter(function(){
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});

// Task 2.8 *(Task 2.9 below)
// 1. What is the difference between comparison (=== and ==) and assignment (=)?
// R=
// '===' Is this true? Example1: 2 + 2 === 4; true Example2: "4" === 4; false
// '==' . It gives us a form of comparison that ignores type. Example “4” == 4 ; true
// 2. What does the bang operator (!) do?
// R=
// ! = not *(gives the opposite boolean)
//  Example: !true = not true
// 3. What does the modulus operator (%) do?
// R=
// gives us the remainder when two integers are divided.


//  ************
// Task 2.9
// 1. What is an object literal, and how do you access its properties, including methods?
// R=
// Is one of the ways to create new objects in Javascript.
// The way to access is the next.
// Example:
// var object = {
//   color: "green",
//   favFoods: ["cuccumber", "lemon", "watermelon"],
//   speak: function() { console.log("I can't speak I'm an object"); },
//   numberPaws: 4
// };

// For attribute values: With a dot "."  object.color; R= "green"
// For a function:
// // with a dot and the function parenthesis onf the en of function name "()"
// object.speack(); R= I can't speak I'm an object
// Arrays:
// with the number between parenthesis later calling the array name-attribute with a dot.
// object.favFoods[1]; R= "lemon"

// 2. How does the this keyword in JavaScript work?
// R=
// "this" keyword work as slef object calling. So instead writing
// object.sayHi = function() {
//   console.log("Hi! you are not so" + object.color + " like me!")
// }

// We can substitute object for this. with the same result. R= "Hi! you are not so green like me!"