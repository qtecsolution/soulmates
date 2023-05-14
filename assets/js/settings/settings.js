$("#setting-button").click(function(e){
  e.preventDefault();
  if ($("#setting-button i").hasClass("de-icon-cog")){
    $("#options-setting").addClass("move-right");
    $("#setting-button i").removeClass("de-icon-cog");
    $("#setting-button i").addClass("de-icon-cancel-3");
  }
  else
  {
    $("#options-setting").removeClass("move-right");
    $("#setting-button i").removeClass("de-icon-cancel-3");
    $("#setting-button i").addClass("de-icon-cog");
  }
});

let current_color = "default";
let current_navbar = "white";
  
//Coral	
$("#coral").click(function(e){
  e.preventDefault();
  $('link[rel*=skin]').remove();
  $('head').append('<link rel="stylesheet skin" href="css/skin/coral/coral.css">');
  if (current_navbar == "color"){
    $('link[rel*=navbar]').remove();
    $('head').append('<link rel="stylesheet navbar" href="css/skin/coral/coral-reverse-navbar.css">');
  }
  current_color = "coral";
});	

//Coral-Red	
$("#coral-red").click(function(e){
  e.preventDefault();
  $('link[rel*=skin]').remove();
  $('head').append('<link rel="stylesheet skin" href="css/skin/coral-red/coral-red.css">');
  if (current_navbar == "color"){
    $('link[rel*=navbar]').remove();
    $('head').append('<link rel="stylesheet navbar" href="css/skin/coral-red/coral-red-reverse-navbar.css">');
  }
  current_color = "coral-red";
});

//Lapis	
$("#lapis").click(function(e){
  e.preventDefault();
  $('link[rel*=skin]').remove();
  $('head').append('<link rel="stylesheet skin" href="css/skin/lapis/lapis.css">');
  if (current_navbar == "color"){
    $('link[rel*=navbar]').remove();
    $('head').append('<link rel="stylesheet navbar" href="css/skin/lapis/lapis-reverse-navbar.css">');
  }
  current_color = "lapis";
});

//Light Teal
$("#light-teal").click(function(e){
  e.preventDefault();
  $('link[rel*=skin]').remove();
  $('head').append('<link rel="stylesheet skin" href="css/skin/light-teal/light-teal.css">');
  if (current_navbar == "color"){
    $('link[rel*=navbar]').remove();
    $('head').append('<link rel="stylesheet navbar" href="css/skin/light-teal/light-teal-reverse-navbar.css">');
  }
  current_color = "light-teal";
});	

//Tan
$("#tan").click(function(e){
  e.preventDefault();
  $('link[rel*=skin]').remove();
  $('head').append('<link rel="stylesheet skin" href="css/skin/tan/tan.css">');
  if (current_navbar == "color"){
    $('link[rel*=navbar]').remove();
    $('head').append('<link rel="stylesheet navbar" href="css/skin/tan/tan-reverse-navbar.css">');
  }
  current_color = "tan";
});

//Reset Color
$("#reset-color").click(function(e){
  e.preventDefault();
  $('link[rel*=skin]').remove();
  if (current_navbar == "color"){
    $('link[rel*=navbar]').remove();
    $('head').append('<link rel="stylesheet navbar" href="css/skin/default/default-reverse-navbar.css">');
  }
  current_color = "default";
});

//White Navbar Background
$("#white-navbar").click(function(e){
  e.preventDefault();
  $("#white-navbar span").addClass("active");
  $("#color-navbar span").removeClass("active");
  
  current_navbar = "white";
  $('link[rel*=navbar]').remove();
});

//Color Navbar Background
$("#color-navbar").click(function(e){
  e.preventDefault();
  $("#color-navbar span").addClass("active");
  $("#white-navbar span").removeClass("active");
  
  current_navbar = "color";
  $('link[rel*=navbar]').remove();
  $('head').append('<link rel="stylesheet navbar" href="css/skin/' + current_color + "/" + current_color + '-reverse-navbar.css">');
});


// Pattern
//----------------------------------------------------------------------------------
$("#pattern-1").click(function(e){
  e.preventDefault();
  $("#pattern-1 span").addClass("active");
  $("#pattern-2 span").removeClass("active");
  $("#pattern-3 span").removeClass("active");
  $("#pattern-none span").removeClass("active");
  
  $('link[rel*=pattern]').remove();
  $('head').append('<link rel="stylesheet pattern" href="css/skin/pattern/pattern-1.css">');
});

$("#pattern-2").click(function(e){
  e.preventDefault();
  $("#pattern-1 span").removeClass("active");
  $("#pattern-2 span").addClass("active");
  $("#pattern-3 span").removeClass("active");
  $("#pattern-none span").removeClass("active");
  
  $('link[rel*=pattern]').remove();
  $('head').append('<link rel="stylesheet pattern" href="css/skin/pattern/pattern-2.css">');
});

$("#pattern-3").click(function(e){
  e.preventDefault();
  $("#pattern-1 span").removeClass("active");
  $("#pattern-2 span").removeClass("active");
  $("#pattern-3 span").addClass("active");
  $("#pattern-none span").removeClass("active");
  
  $('link[rel*=pattern]').remove();
  $('head').append('<link rel="stylesheet pattern" href="css/skin/pattern/pattern-3.css">');
});

$("#pattern-none").click(function(e){
  e.preventDefault();
  $("#pattern-1 span").removeClass("active");
  $("#pattern-2 span").removeClass("active");
  $("#pattern-3 span").removeClass("active");
  $("#pattern-none span").addClass("active");
  
  $('link[rel*=pattern]').remove();
});