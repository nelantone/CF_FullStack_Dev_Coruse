var works = [
  {
    title: "Valencia Spain",
    pic: "https://c2.staticflickr.com/4/3405/4631610238_e018e99ef2_q.jpg",
    url: "https://c2.staticflickr.com/4/3405/4631610238_e018e99ef2_b.jpg"
  },
  {
    title: "Vienna Austria",
    pic: "https://c2.staticflickr.com/4/3597/3389971408_7699930613_q.jpg",
    url: "https://c2.staticflickr.com/4/3597/3389971408_7699930613.jpg"
  },
  {
    title: "Puebla Mexico",
    pic: "https://c2.staticflickr.com/4/3416/4631613538_aaf3be6751_q.jpg",
    url: "https://c2.staticflickr.com/4/3416/4631613538_aaf3be6751_b.jpg"
  },
  {
    title: "Berlin Germany",
    pic: "https://c2.staticflickr.com/8/7342/8722206503_021ff55966_q.jpg",
    url: "https://c2.staticflickr.com/8/7342/8722206503_021ff55966.jpg"
  }
];

for(var i = 0; i < works.length; ++i ) {
  $("#photos").append("\
    <div class='col-sm-3 col-md-3 og-grid'>\
      <a href="+ works[i].url + " class='work-img'>\
        <img class='img-responsive' src='" + works[i].pic + "'>\
        <span class='info'><p class='proj-title'></p> " + works[i].title + " </span>\
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