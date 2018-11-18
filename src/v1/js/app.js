$(document).ready(function() {
	
	$(".profileHeaderViolationModal").on("click", function(e) {
		e.preventDefault();
		$(this).simplePopup({ 
			type: "html", 
			htmlSelector: "#popupReport",
			width: "620px",
			beforeOpen: function(html) {
				document.body.style.overflowY = "hidden";
			},
			beforeClose: function(html) {
				document.body.style.overflowY = "auto";
			}
		});
	});
});