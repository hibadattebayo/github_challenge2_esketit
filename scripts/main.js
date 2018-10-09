/*When you click on "menu" the button changes into "terug" and the menu appears*/otherwise the menu does not appear.*/
document.getElementsByClassName('menutoggle')[0].onclick = function () {
	if(menu.className == "active"){
		document.getElementById("menuChange").innerHTML = "Menu";
		menu.className = "inactive";
	} else {
		document.getElementById("menuChange").innerHTML = "Terug";
		menu.className = "active";
	};
}

/*What i understood about this Jquery function is that is's actually quite easy :')
You add the class "changeColor" everytime the user scrolls more than 50 pixels down
When the user scrolls up the class "changeColor" dissapears which causes the color I gave to it in css
to dissapear as well. Works like magic. I put the source of where i found this code in my word document! */
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('ul').addClass('changeColor')
      }
      if ($(this).scrollTop() < 50) {
         $('ul').removeClass('changeColor')
      }
   });
});
