	
	function play(url) {
		$.getJSON(
			"https://api-ssl.bitly.com/v3/expand?callback=?", 
			{ 
				"format": "json",
				"apiKey": "R_2850f6a5864e47d5804aa220f66f9819",
				"login": "origamiyoda729",
				"shortUrl": url
			},
			function(response) {
				var long_url = response.data.expand[0].long_url.replace("#", "").replace(/%20/g, " ").replace(/%22/g, '"').replace(/%3C/g, "<").replace(/%3E/g, ">");
				if (long_url.split("#")[0] == "https://origamiyoda729.github.io/lightfoot/quiz/play/") {
					$("#quiz-json").html(long_url.replace("https://origamiyoda729.github.io/lightfoot/quiz/play/#", "");
				} else {
					alert("An error occured.");
					location.href = "https://origamiyoda729.github.io/lightfoot/quiz/"
				}
			}
		)		
	}
	
	var hash = window.location.hash.replace("#", "");
	if (hash == "") {
		alert("An error occured.");
		location.href = "../";
	} else {
		play("http://bit.ly/" + hash);
	}

	Survey
		.StylesManager
		.applyTheme("default");

	window.survey = new Survey.Model(json);

	survey
		.onComplete
		.add(function (result) {
			document
				.querySelector('#surveyResult')
				.innerHTML = "result: " + JSON.stringify(result.data);
		});

	$("#surveyElement").Survey({model: survey});