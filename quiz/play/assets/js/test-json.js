var json = {
        completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
        title: "American History",
        pages: [{
            elements: [{
                "type": "html",
                "html": "You are about to start quiz about American history.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
            }]
        }, {
            elements: [{
                type: "radiogroup",
                title: "When was the Civil War?",
                correctAnswer: "1850-1900",
                choices: ["1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950"]
            }]
        }, {
            elements: [{
                type: "radiogroup",
                title: "Who said 'Give me liberty or give me death?'",
                correctAnswer: "Patrick Henry",
                choicesOrder: "in-order",
                choices: ["John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"]
            }]
        }, {
            elements: [{
                type: "radiogroup",
                title: "What is the Magna Carta?",
                correctAnswer: "The foundation of the British parliamentary system",
                choicesOrder: "random",
                choices: ["The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"]
            }]
        }],
		startSurveyText: "Start Quiz",
		showProgressBar: "bottom",
		firstPageIsStarted: true
};