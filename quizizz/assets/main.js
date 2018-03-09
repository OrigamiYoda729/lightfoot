
	function proceed(modifier) {
		var mod = modifier.toLowerCase();
		if (mod == "next") {
				document.getElementById("proceed-btn").onclick = "";
			document.getElementById("loader").innerHTML = "<img src='assets/loader.svg' style='height: 50px;'>";
			document.getElementById("proceed-btn").className += " invis-button";
			setTimeout(function(){ 
				document.getElementById("loader").innerHTML = "Proceed";
				document.getElementById("proceed-btn").className = "check-room-btn btn-with-highlighter";
				document.getElementById("proceed-btn").onclick = "proceed('proceed')";
				
				var select = document.getElementsByClassName("nice-select")[0];
				var selected = select.getElementsByTagName("span")[0].innerHTML.toLowerCase().split(" ")[1];
				
				document.getElementsByClassName(selected)[1].classList.remove("invis");
			}, 1000);
		}
	}

	$(document).ready(function() {
	  $('#main-select').niceSelect();
	  $('#multimedia-select').niceSelect();
	});
	