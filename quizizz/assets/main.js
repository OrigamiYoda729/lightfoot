
	function proceed(modifier) {
		var mod = modifier.toLowerCase();
		if (mod == "next") {
			document.getElementById("proceed-btn").onclick = "";
			document.getElementById("loader").innerHTML = "<img src='assets/loader.svg' style='height: 50px;'>";
			document.getElementById("proceed-btn").className += " invis-button";
			setTimeout(function(){ 
				document.getElementById("loader").innerHTML = "Proceed";
				document.getElementById("proceed-btn").className = "check-room-btn btn-with-highlighter";
				document.getElementById("proceed-btn").setAttribute("onclick", "proceed('proceed')");
				
				var select = document.getElementsByClassName("nice-select")[0];
				var selected = select.getElementsByTagName("span")[0].innerHTML.toLowerCase().split(" ")[1];
				document.getElementsByClassName(selected)[1].classList.remove("invis");
				document.getElementsByClassName("wide")[1].className += " invis";
			}, 750);
		} else 
		if (mod == "proceed") {
			document.getElementById("proceed-btn").onclick = "";
			document.getElementById("loader").innerHTML = "<img src='assets/loader.svg' style='height: 50px;'>";
			document.getElementById("proceed-btn").className += " invis-button";
			setTimeout(function(){ 
				var select = document.getElementsByClassName("nice-select")[0];
				var selected = select.getElementsByTagName("span")[0].innerHTML.toLowerCase().split(" ")[1];
				var gameId = selected + document.getElementsByClassName(selected)[1].getElementsByClassName("selected")[0].getAttribute("data-value");
				var gc = getCode(gameId);
				location.href = "https://quizizz.com/join?gc=" + gc;
			}, 750);
		} else {
			console.log("Error: The function proceed('" + modifier + "') is an invalid function");
		}
	}

	$(document).ready(function() {
	  $('select').niceSelect();
	});
	