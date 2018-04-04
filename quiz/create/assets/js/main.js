
	function get_short_url(long_url, login, api_key) {
		$.getJSON(
			"http://api.bitly.com/v3/shorten?callback=?", 
			{ 
				"format": "json",
				"apiKey": api_key,
				"login": login,
				"longUrl": long_url
			},
			function(response) {
				$("div[data-bind='html: processedCompletedHtml, css: completedCss']").html("<h2>To access your quiz, go to <strong><a href='https:/bit.ly/lightfoot-quiz' target='_blank'>https://bit.ly/lightfoot-quiz</a></strong> and use the code <strong>" + response.data.hash + "</strong>.</h2>")
			}
		);
	}

	function survey_complete(ins_json_data) {
		console.log(ins_json_data);
		var json_data = {
			
			
		}
		$("div[data-bind='html: processedCompletedHtml, css: completedCss']").html("<h2>Creating your quiz...</h2>");
		get_short_url("https://origamiyoda729.github.io/lightfoot/quiz/play/#" + ins_json_data, "origamiyoda729-asdf", "R_2850f6a5864e47d5804aa220f66f9819");
	}

	var json = {
    pages: [{
            name: "desc",
            elements: [{
                type: "text",
                name: "quiz-title",
                title: "Please enter a title for your quiz (e.g. \"American History\")",
                isRequired: true
            }]
        },
        {
            name: "quiz",
            elements: [{
                    type: "matrixdynamic",
                    name: "question2",
                    title: "Quiz Creator",
                    columns: [{
                            name: "question",
                            title: "Question",
                            cellType: "text",
                            isRequired: true
                        },
                        {
                            name: "answer-choice-1",
                            title: "Answer Choice 1",
                            cellType: "text",
                            isRequired: true
                        },
                        {
                            name: "answer-choice-2",
                            title: "Answer Choice 2",
                            cellType: "text",
                            isRequired: true
                        },
                        {
                            name: "answer-choice-3",
                            title: "Answer Choice 3",
                            cellType: "text",
                            isRequired: true
                        },
                        {
                            name: "answer-choice-4",
                            title: "Answer Choice 4",
                            cellType: "text",
                            isRequired: true
                        },
                        {
                            name: "answer-select",
                            title: "Correct Answer",
                            cellType: "dropdown",
                            isRequired: true,
                            choices: [
                                "1",
                                "2",
                                "3",
                                "4"
                            ]
                        }
                    ],
                    choices: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    rowCount: 1
                },
                {
                    type: "dropdown",
                    name: "startSurveyText",
                    visible: false,
                    defaultValue: "item1",
                    titleLocation: "hidden",
                    choices: [{
                        value: "item1",
                        text: "Start Quiz"
                    }]
                },
                {
                    type: "dropdown",
                    name: "showProgressBar",
                    visible: false,
                    defaultValue: "item2",
                    titleLocation: "hidden",
                    choices: [{
                        value: "item2",
                        text: "bottom"
                    }]
                },
                {
                    type: "boolean",
                    name: "firstPageIsStarted",
                    visible: false,
                    defaultValue: "true",
                    label: "true"
                }
            ]
        }]
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
