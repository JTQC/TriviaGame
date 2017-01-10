				//initialize some variables:

				var answerOne = 0;
				var answerTwo = 0;
				var answerThree = 0;
				var answerFour = 0;
				var timeLeft = 30;
				var timeUp = 0;
				var score = 0;

				$("div.timer").html("Your Remaining Time Is: " + timeLeft);

				var seconds = setInterval(countdown, 1000);
				function countdown() {
				timeLeft -=1;
				$("div.timer").html("Your Remaining Time Is: " + timeLeft);	
					if (timeLeft === 0) {
						$("div.timer").html("Your Time Is Now Up");
						clearInterval(seconds);
						timeUp = 1;
						
					finalCountdown();	
					}
				}

				var questions = [{
					number:  1,
					question: "What is the original name of the band that became Stryper?",
					choices: ["Roxx Regime", "Intersessor", "Triton", "Real Fake Doors"],
					correctAnswer: "Roxx Regime"
				}, { 
					number: 2,
					question: "What is the name of the bands first EP?",
					choices: ["All Things Stryper", "Choose Your Own Adventure", "The Yellow and Black Attack", "Real Fake Doors"],
					correctAnswer: "The Yellow and Black Attack"
				},
					{
					number: 3,
					question: "Who are brothers in the group?",
					choices: ["Smoochie and Wiggles Wallace", "Michael and Robert Sweet", "Brian and Brad McCringleberry", "Real Fake Doors"],
					correctAnswer: "Michael and Robert Sweet"
				},  {
					number: 4,
					question: "Who managed the group?",
					choices: ["Mike and Rob's Mom", "Terrence Mallick", "John Paul I", "Real Fake Doors"],
					correctAnswer: "Mike and Rob's Mom"
				}];




	$("div.questionOne").html(questions[0].question);
	
	
		function createRadios(index) {
			var radioList = $('<ul>');
			var item;
			var input = '';

			for (i = 0; i < questions[index].choices.length; i++) {
				item = $('<li>');
				input = '<input type="radio" name="answer" value=' + i + ' />';
				input += questions[index].choices[i];
				item.append(input);
				radioList.append(item);
				}	
			return radioList;
			}

	$("div.choicesOne").html(createRadios(0));
	$("div.questionTwo").html(questions[1].question);
	$("div.choicesTwo").html(createRadios(1));
	$("div.questionThree").html(questions[2].question);
	$("div.choicesThree").html(createRadios(2));
	$("div.questionFour").html(questions[3].question);
	$("div.choicesFour").html(createRadios(3));
	

	$('div.choicesOne input:radio').click(function() {
    	answerOne = ($(this).val());
    	console.log(answerOne);
    });

	$('div.choicesTwo input:radio').click(function() {
    	answerTwo = ($(this).val());
    	console.log(answerTwo);
    });

    $('div.choicesThree input:radio').click(function() {
    	answerThree = ($(this).val());
    	console.log(answerThree);
    });

    $('div.choicesFour input:radio').click(function() {
    	answerFour = ($(this).val());
    	console.log(answerFour);
    });

    function finalCountdown() {
    	if (answerOne === 0) {
    		score = +1;
    	}

    	if (answerTwo === 2) {
    		score = +1;
    	}

    	if (answerThree === 1) {
    		score = +1;
    	}

    	if (answerFour === 0) {
    		score = +1;
    	}
 	
 	$("div.results").html("You got" + score + "out of Four correct");
    
    }
    	
   
   
	    

