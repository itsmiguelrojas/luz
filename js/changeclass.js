$(document).ready(function(){

  //Functions

  var changeClass = function(bgcolor,textcolor,acolor,boxshadow){

    $(document.body).css("background-color",bgcolor);
    $("p").css("color",textcolor);
    $("p a").css("color",acolor);
    $(".btn").css("box-shadow",boxshadow);
    Cookies.set("screen",bgcolor);
    Cookies.set("text",textcolor);
    Cookies.set("acolor",acolor);
    Cookies.set("shadow",boxshadow);

  };

  //Get cookies

  $(document.body).css("background-color", Cookies.get("screen"));
  $("p").css("color", Cookies.get("text"));
  $("p a").css("color", Cookies.get("acolor"));
  $(".btn").css("box-shadow", Cookies.get("shadow"));

  //Change class

  $(".dark-button").on("click", function(){
    var dark = $(this).data("bgcolor");
    var textWhite = $(this).data("color");
    var aWhite = $(this).data("acolor");
    var shadowlight = $(this).data("shadow");
    changeClass(dark,textWhite,aWhite,shadowlight);
  });

  $(".light-button").on("click", function(){
    var light = $(this).data("bgcolor");
    var textBlack = $(this).data("color");
    var aBlack = $(this).data("acolor");
    var shadowlight = $(this).data("shadow");
    changeClass(light,textBlack,aBlack,shadowlight);
  });

});
