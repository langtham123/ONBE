$(document).ready(function() {
	
	if (window.screen.availWidth == 320) {
     	$('body').addClass('smallScreenMode');
  	}
  	


	$(".profileHeaderViolationModal").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupReport",
			width: "343px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});
});