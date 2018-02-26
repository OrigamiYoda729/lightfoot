
	function loggedin(input) {
		var profile = [input[0], input[1], input[2], input[3], input[4], input[5]];
		var profileValues = ["userId", "displayName", "firstName", "lastName", "profileImage", "userEmail"];
		var userId = input[0];
		var displayName = input[1];
		var firstName = input[2];
		var lastName = input[3];
		var profileImage = input[4];
		var userEmail = input[5];
		
		for (i = 0; i < document.getElementsByClassName("auth").length; i++) {
			for (j = 0; j < profileValues.length; j++) {
				if (document.getElementsByClassName("auth")[i].innerHTML == "{" + profileValues[j] + "}") {
					document.getElementsByClassName("auth")[i].innerHTML = profile[j];
				}
			}
		}
		
		for (i = 0; i < document.getElementsByClassName("img-auth").length; i++) {
			document.getElementsByClassName("img-auth")[i].src = profileImage;
		}
	}
	
	function search() {
		var input, filter, ul, li, a, i;
		input = document.getElementById("searchBox");
		filter = input.value.toUpperCase();
		ul = document.getElementById("searchResults");
		li = ul.getElementsByClassName("result");
		
		if (input.value != "") {
			document.getElementById("no-show").style.display = "";
		} else {
			document.getElementById("no-show").style.display = "none";
		}
		
		if (input.value != "") {
			document.getElementById("result-overflow").style.display = "";
		} else {
			document.getElementById("result-overflow").style.display = "none";
		}
		
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
				li[i].style = "display: ";
			} else {
				li[i].style = "display: none";
			}
		}
	}
	
	function googleSearch() {
		var input = document.getElementById("searchBox");
		href('https://www.google.com/search?q=' + input.value.replace(" ", "+"));
	}

	function DropDown(el) {
		this.dd = el;
		this.initEvents();
	}
	DropDown.prototype = {
		initEvents : function() {
			var obj = this;

			obj.dd.on('click', function(event){
				$(this).toggleClass('active');
				event.stopPropagation();
			});	
			
		}
	}

	$(function() {

		var dd = new DropDown( $('.dd') );

		$(document).click(function() {
			$('.wrapper-dropdown-5').removeClass('active')
		});

		$('#subject').click(function() {
			$('#quiz').removeClass('active')
		});
		
		$('#quiz').click(function() {
			$('#subject').removeClass('active')
		});

	});
	
	function getSubject(subject, action) {
		if (action == "hide") {
			if (subject == "multimedia") {
				document.getElementById("multimedia-1").style = "display: none";
				document.getElementById("multimedia-2").style = "display: none";
				document.getElementById("multimedia-3").style = "display: none";
				document.getElementById("multimedia-r1").style = "display: none";
				document.getElementById("multimedia-r2").style = "display: none";
			} else
			if (subject == "programming") {
				document.getElementById("programming-1").style = "display: none";
				document.getElementById("programming-2").style = "display: none";
				document.getElementById("programming-3").style = "display: none";
				document.getElementById("programming-4").style = "display: none";
				document.getElementById("programming-5").style = "display: none";
				document.getElementById("programming-6").style = "display: none";
				document.getElementById("programming-r1").style = "display: none";
				document.getElementById("programming-r2").style = "display: none";
			} else {
				console.log("Error: Invalid function syntax.");
			}			
		} else
		if (action == "show") {
			if (subject == "simple") {
				document.getElementById("origin-select").style = "display: none";
				document.getElementsByClassName("dd-header")[0].innerHTML = "Simple";
				document.getElementById("simple-1").style = "display: auto";
				document.getElementById("simple-2").style = "display: auto";
				document.getElementById("simple-3").style = "display: auto";
				document.getElementById("simple-4").style = "display: auto";
				document.getElementById("simple-5").style = "display: auto";
				document.getElementById("simple-6").style = "display: auto";
				document.getElementById("simple-7").style = "display: auto";
				document.getElementById("simple-8").style = "display: auto";
				document.getElementById("simple-9").style = "display: auto";
				document.getElementById("simple-10").style = "display: auto";
				document.getElementById("simple-r1").style = "display: auto";
				getSubject("extreme", "hide");
			} else
			if (subject == "extreme") {
				document.getElementById("origin-select").style = "display: none";
				document.getElementsByClassName("dd-header")[0].innerHTML = "Extreme";
				document.getElementById("extreme-o1").style = "display: auto";
				document.getElementById("extreme-o2").style = "display: auto";
				document.getElementById("extreme-o3").style = "display: auto";
				document.getElementById("extreme-o4").style = "display: auto";
				document.getElementById("extreme-o5").style = "display: auto";
				document.getElementById("extreme-o6").style = "display: auto";
				document.getElementById("extreme-o7").style = "display: auto";
				document.getElementById("extreme-o8").style = "display: auto";
				document.getElementById("extreme-c1").style = "display: auto";
				getSubject("simple", "hide");
			} else {
				console.log("Error: Invalid function syntax.");
			}
		} else {
			console.log("Error: Invalid function syntax.");
		}
		
		
	}
	
	function selectOk() {
		document.getElementById("modal-display1").style.display = "";
		document.getElementById("modal-display2").style.display = "none";
	}
	
	var modal = document.getElementById('modal');
	var btn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[0];
	var body = document.getElementById("content");

	function openModal() {
		var x1 = document.getElementsByClassName("dd-header")[0].innerHTML.toLowerCase();
		var x2 = document.getElementsByClassName("dd-header")[1].innerHTML.split(" ")[1];
		if (x2 == "(from") { x2 = "r" + (document.getElementsByClassName("dd-header")[1].innerHTML.split(" ")[3].split(".")[0] - 1).toString(); };
		var x = x1 + "-" + x2;
		var gcode = getCode(x);
		
		if (gcode != 0 && gcode != "000000" && gcode != "XXXXXX" && gcode != "undefined" && gcode != undefined && x2 != "a") { 
			selectOk();
			document.getElementById("message2").style.display = "none";
			document.getElementById("controls2").style.display = "none";
			document.getElementById("message3").style.display = "none";
			document.getElementById("controls3").style.display = "none";
			document.getElementById("modal-header1").innerHTML = document.getElementById("modal-header1").innerHTML.replace("{quizSubject}", document.getElementsByClassName("dd-header")[0].innerHTML).replace("{quizLesson}", document.getElementsByClassName("dd-header")[1].innerHTML);
			document.getElementById("gamecode").innerHTML = document.getElementsByClassName("q")[1].innerHTML;
			document.getElementById("joinGameBtn").href = "https://origamiyoda729.github.io/Private3/quizizz/default.html?gc=" + gcode;
			document.getElementById("printQuizBtn").href = "http://bit.ly/print-quizizz#" + x;
			document.getElementById("message1").style.display = "";
			document.getElementById("controls1").style.display = "";
		} else 
		if (gcode == "XXXXXX" || gcode == "undefined" || gcode == undefined && x2 != "a") {
			selectOk();
			document.getElementById("modal-header1").innerHTML = document.getElementById("modal-header1").innerHTML.replace("{quizSubject}", document.getElementsByClassName("dd-header")[0].innerHTML).replace("{quizLesson}", document.getElementsByClassName("dd-header")[1].innerHTML);
			document.getElementById("message1").style.display = "none";
			document.getElementById("controls1").style.display = "none";
			document.getElementById("message2").style.display = "none";
			document.getElementById("controls2").style.display = "none";
			document.getElementById("message3").style.display = "";
			document.getElementById("controls3").style.display = "";
		} else 
		if (gcode == "000000" || gcode == 0 && x2 != "a") {
			selectOk();
			document.getElementById("modal-header1").innerHTML = document.getElementById("modal-header1").innerHTML.replace("{quizSubject}", document.getElementsByClassName("dd-header")[0].innerHTML).replace("{quizLesson}", document.getElementsByClassName("dd-header")[1].innerHTML);
			document.getElementById("message1").style.display = "none";
			document.getElementById("controls1").style.display = "none";
			document.getElementById("message3").style.display = "none";
			document.getElementById("controls3").style.display = "none";
			document.getElementById("printQuizBtn2").href = "http://bit.ly/print-quizizz#" + x;
			document.getElementById("message2").style.display = "";
			document.getElementById("controls2").style.display = "";
		}
		
		document.getElementsByClassName("q")[1].innerHTML
		
		modal.style.display = "block";
		body.className = "blur";
	}
	
	function closeModal() {
		modal.style.display = "none";
		body.className = "";
	}
	
	span.onclick = function() {
		modal.style.display = "none";
		body.className = "";
	}
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			body.className = "";
		}
	}
	
	function getQuiz(id) {
		var gc = getCode(id);		
		if (gc != 000000 && gc != "000000" && gc != "XXXXXX") { 
			document.getElementsByClassName("dd-header")[1].innerHTML = document.getElementById(id).getElementsByTagName("a")[0].innerHTML;
			document.getElementsByClassName("q")[1].innerHTML = gc;
		} else 
		if (gc == "XXXXXX") {
			document.getElementsByClassName("dd-header")[1].innerHTML = document.getElementById(id).getElementsByTagName("a")[0].innerHTML;
			document.getElementsByClassName("q")[1].innerHTML = "------";
		} else {
			document.getElementsByClassName("dd-header")[1].innerHTML = document.getElementById(id).getElementsByTagName("a")[0].innerHTML;
			document.getElementsByClassName("q")[1].innerHTML = "------";
		}
	}
	
	function copyToClipboard(text) {
		if (window.clipboardData && window.clipboardData.setData) {
			return clipboardData.setData("Text", text); 

		} else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
			var textarea = document.createElement("textarea");
			textarea.textContent = text;
			textarea.style.position = "fixed";
			document.body.appendChild(textarea);
			textarea.select();
			try {
				return document.execCommand("copy");
			} catch (ex) {
				console.warn("Copy to clipboard failed.", ex);
				return false;
			} finally {
				document.body.removeChild(textarea);
			}
		}
	}

	function copy(type, string) {
		if (type == "custom" || type == "string") {
			copyToClipboard(string.innerHTML.toString());			
		} else {
			copyToClipboard(type.innerHTML.toString());
		}
	}
	
	function href(url) {
		window.open(
			url,
			'_blank'
		);
	}