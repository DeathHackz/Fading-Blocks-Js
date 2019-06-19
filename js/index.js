// Red Box Js
$(".red-box").hover(function(){
  $(this).fadeOut(100);
  $(".blue-box").fadeIn(100);
  console.log("User hovered over red box");
  console.log("Blue Box is now visible");
  console.log("-------------------------------");
});
//Blue Box Js
$(".blue-box").hover(function(){
  $(".red-box").fadeIn(100);
  $(this).fadeOut(100);
  console.log("User hovered over blue box");
  console.log("Red Box is now visible");
  console.log("-------------------------------");
});
//Reset Button Js
$(".button-one").click(function(){
  $(".red-box").fadeOut(1000);
  $(".blue-box").fadeIn(1000);
  alert("Boxes & console log have been reset");
  console.clear()
  console.log("User has reset the project and console");
  console.log("-------------------------------");
});
//Start Button Js
$(".button-two").click(function(){
  $(".blue-box").fadeIn(1000);
  $(".reset").fadeIn(1000);
  $(".stop").fadeIn(1000);
  $(this).hide();
  $(".button-three").fadeIn(1000);
  console.log("User has started the project");
  console.log("-------------------------------");
});
//Stop Button Js
$(".button-three").click(function(){
  $(".red-box").fadeOut(1000);
  $(".blue-box").fadeOut(1000);
  $(".reset").hide();
  $(".button-two").fadeIn(1000);
  $(this).hide();
  console.log("User has stopped the project");
  console.log("-------------------------------");
});

var tooltip = document.querySelectorAll('.tooltip-one,.tooltip-two,.tooltip-three');

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}
