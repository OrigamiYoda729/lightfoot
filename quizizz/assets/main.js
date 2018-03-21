	
	function getQueryVariable(variable) {
	  var query = window.location.search.substring(1);
	  var vars = query.split("&");
	  for (var i=0;i<vars.length;i++) {
	    var pair = vars[i].split("=");
	    if (pair[0] == variable) {
	      return pair[1];
	    }
	  } 
	  return "invalid";
	}

	function proceed(modifier) {
		var mod = modifier.toLowerCase();
		if (mod == "next") {
			document.getElementById("proceed-btn").onclick = "";
			document.getElementById("loader").innerHTML = "<img src='assets/loader.svg' style='height: 50px;'>";
			document.getElementById("proceed-btn").className += " invis-button";
			setTimeout(function(){ 
				document.getElementById("loader").innerHTML = "Next";
				document.getElementById("proceed-btn").className = "check-room-btn btn-with-highlighter";
				document.getElementById("proceed-btn").setAttribute("onclick", "proceed('proceed')");
				
				var select = document.getElementsByClassName("nice-select")[0];
				var selected = select.getElementsByTagName("span")[0].innerHTML.toLowerCase().split(" ")[1].replace("web", "webdesign");
				if (selected == "iba") {
					var new_selected = select.getElementsByTagName("span")[0].innerHTML.toLowerCase().split(" ")[2].replace("web", "webdesign");
					if (new_selected == "lessons" || new_selected == "lesson") {
						document.getElementsByClassName("learn")[1].classList.remove("invis");
					} else {
						document.getElementsByClassName("extreme")[1].classList.remove("invis");
					}
				} else {
					document.getElementsByClassName(selected)[1].classList.remove("invis");
				}
				document.getElementById("widget-title").innerHTML = "Select a Game";
				document.getElementsByClassName("wide")[1].className += " invis";
			}, 600);
		} else 
		if (mod == "proceed") {
			document.getElementById("proceed-btn").onclick = "";
			document.getElementById("loader").innerHTML = "<img src='assets/loader.svg' style='height: 50px;'>";
			document.getElementById("proceed-btn").className += " invis-button";
			setTimeout(function(){ 				
				var select = document.getElementsByClassName("nice-select")[0];
				var selected = select.getElementsByTagName("span")[0].innerHTML.toLowerCase().split(" ")[1].replace("web", "webdesign");
				if (selected == "iba") {
					var new_selected = select.getElementsByTagName("span")[0].innerHTML.toLowerCase().split(" ")[2].replace("web", "webdesign");
					if (new_selected == "lessons" || new_selected == "lesson") {
						var gameId = "learn" + document.getElementsByClassName("learn")[1].getElementsByClassName("selected")[0].getAttribute("data-value");
					} else {
						var gameId = "extreme" + document.getElementsByClassName("extreme")[1].getElementsByClassName("selected")[0].getAttribute("data-value");
					}
				} else {
					var gameId = selected + document.getElementsByClassName(selected)[1].getElementsByClassName("selected")[0].getAttribute("data-value");
				}
				document.getElementsByClassName("wide")[1].className += " invis";
				var gc = getCode(gameId);
				location.href = "index.html#none";
				location.href = "https://quizizz.com/join?gc=" + gc + "&theme=classic";
				
			}, 600);
		} else {
			console.log("Error: The function proceed('" + modifier + "') is an invalid function");
		}
	}

	$(document).ready(function() {
		$('select').niceSelect();
		var hash = getQueryVariable("game");
		if (hash != "invalid") {
			var gc = getCode(hash);
			if (gc != "undefined" || gc != "invalid" || gc != undefined) {
				location.href = "index.html";
				location.href = "https://quizizz.com/join?gc=" + gc + "&theme=classic";
			}
		}
		
	});	