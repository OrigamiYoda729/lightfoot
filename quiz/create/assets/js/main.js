
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
		$("div[data-bind='html: processedCompletedHtml, css: completedCss']").html("<h2>Creating your quiz...</h2>");
		console.log(ins_json_data);
		
		
		var json_data = {}
		json_data.completedHtml = "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>";
		json_data.title = ins_json_data.split('"')[3];
		json_data.startSurveyText = "Start Quiz";
		json_data.showProgressBar = "bottom";
		json_data.firstPageIsStarted = true;
		json_data.pages = [{
            elements: [{
                "type": "html",
                "html": "You are about to start the quiz: " + ins_json_data.split('"')[3] + ".<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
            }]
        }];
		
		var ins_json_questions = ins_json_data.split("[")[1].split("]")[0].split("{");
		var ins_json_get;
		var ins_json_push = [];
		for (i = 0; i < ins_json_questions.length; i++) {
			if (i != 0) {
				ins_json_push = [];
				ins_json_get = ins_json_questions[i].split('"');
				if (ins_json_get[23] == 1) {
					ins_json_push = {
						elements: [{
							type: "radiogroup",
							title: ins_json_get[3],
							correctAnswer: ins_json_get[7],
							choices: [ins_json_get[7], ins_json_get[11], ins_json_get[15], ins_json_get[19]]
						}]
					};
					json_data.pages.push(ins_json_push);
				} else
				if (ins_json_get[23] == 2) {
					ins_json_push = {
						elements: [{
							type: "radiogroup",
							title: ins_json_get[3],
							correctAnswer: ins_json_get[11],
							choices: [ins_json_get[7], ins_json_get[11], ins_json_get[15], ins_json_get[19]]
						}]
					};
					json_data.pages.push(ins_json_push);
				} else
				if (ins_json_get[23] == 3) {
					ins_json_push = {
						elements: [{
							type: "radiogroup",
							title: ins_json_get[3],
							correctAnswer: ins_json_get[15],
							choices: [ins_json_get[7], ins_json_get[11], ins_json_get[15], ins_json_get[19]]
						}]
					};
					json_data.pages.push(ins_json_push);
				} else
				if (ins_json_get[23] == 4) {
					ins_json_push = {
						elements: [{
							type: "radiogroup",
							title: ins_json_get[3],
							correctAnswer: ins_json_get[19],
							choices: [ins_json_get[7], ins_json_get[11], ins_json_get[15], ins_json_get[19]]
						}]
					};
					json_data.pages.push(ins_json_push);
				}
			}
		}
		
		var final_json = "var json = " + JSON.stringify(json_data);
		get_short_url("https://origamiyoda729.github.io/lightfoot/quiz/play/#" + final_json, "origamiyoda729", "R_2850f6a5864e47d5804aa220f66f9819");
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
