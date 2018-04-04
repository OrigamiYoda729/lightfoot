	
	var hash = window.location.hash.replace("#", "");
	if (hash == "") {
		alert("An error occured.");
		location.href = "../";
	} else {
		$("#quiz-json").html(hash);
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