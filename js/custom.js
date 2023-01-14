// tANIMATION
var typed = new Typed(".auto-type",
	{strings: ["Lucky", "Programer", "Designer"],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true
	})

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(300).fadeOut("fast"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/bg1.jpg"
	 			], 	{duration: 0, fade: 0});
		});
});

//POPUP
let popup = document.getElementById("popup");
function openPopup(){
	popup.classList.add("open-popup");
}
function closePopup(){
	popup.classList.remove("open-popup");
	
}
