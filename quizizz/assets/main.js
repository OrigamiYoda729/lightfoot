
	function proceed(modifier) {
		var mod = modifier.toLowerCase();
		if (mod == "next") {
			document.getElementById("loader").innerHTML = "<img src='assets/loader.svg' style='height: 50px;'>";
			document.getElementById("proceed-btn").className += " invis-button";
			setTimeout(function(){ 
				document.getElementById("loader").innerHTML = "Proceed";
				document.getElementById("proceed-btn").className = "check-room-btn btn-with-highlighter";
				document.getElementById("proceed-btn").onclick = "proceed('proceed')";
			}, 1500);
		}
	}

	$(document).ready(function() {
	  $('select').niceSelect();
	});
	