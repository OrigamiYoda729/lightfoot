
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
			survey_complete(JSON.stringify(result.data));
		});

	$("#surveyElement").Survey({
		model: survey
	});
	
	$("#surveyElement").ready(function() {
		var new_header = "<h2 style='margin-bottom: 20px;'><strong>Enter a game code:</strong></h2>";
		$("div#sq_100").prepend(new_header);
		$("input[data-bind='value: completeText, click: completeLastPage, visible: koIsLastPage() && isEditMode, css: cssNavigationComplete']").val("Join Game");
	});
	
	$("input[data-bind='value: completeText, click: completeLastPage, visible: koIsLastPage() && isEditMode, css: cssNavigationComplete']").click(function() {
		location.href = "https://bit.ly/" + $("input#sq_100i").val();
	});