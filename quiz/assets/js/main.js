	
	function game(url) {
		$.getJSON(
			"https://api-ssl.bitly.com/v3/expand?callback=?", 
			{ 
				"format": "json",
				"apiKey": "R_2850f6a5864e47d5804aa220f66f9819",
				"login": "origamiyoda729",
				"shortUrl": url
			},
			function(response) {
				var long_url = response.data.expand[0].long_url;
				if (long_url.split("#")[0] == "https://origamiyoda729.github.io/lightfoot/quiz/play/") {
					location.href = long_url;
				} else {
					alert("Please enter a valid game code.");
					location.href = "https://origamiyoda729.github.io/lightfoot/quiz/"
				}
			}
		)		
	}
	
	var json = {
		pages: [
			{
				name: "input",
				elements: [
					{
						type: "text",
						name: "quiz-id",
						isRequired: true,
						titleLocation: "hidden"
					}
				]
			}
		]
	};

	window.survey = new Survey.Model(json);

	survey
		.onComplete
		.add(function(result) {
			$("div.sv_completed_page[data-bind='html: processedCompletedHtml, css: completedCss']").html("<h2>One moment please...</h2>");
			game("http://bit.ly/" + JSON.stringify(result.data).split('"')[3]);
		});

	$("#surveyElement").Survey({
		model: survey
	});
	
	$("#surveyElement").ready(function() {
		var new_header = "<h2 style='margin-bottom: 20px;'><strong>Enter a game code:</strong></h2>";
		$("div#sq_100").prepend(new_header);
		$("input[data-bind='value: completeText, click: completeLastPage, visible: koIsLastPage() && isEditMode, css: cssNavigationComplete']").val("Join Game");
	});