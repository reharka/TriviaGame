$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 15,
		reset: function() {
			this.time = 15;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;

var q1 = {
	question : "Who was the killer in the original 'Friday the 13th' movie?",
	possibleAnswers : ["A. Jason Voorhees",
				 "B. Michael Myers",
				 "C. Mrs. Vorhees",
				 "D. Alice"],
	flags : [false, false, true, false],
	answer : "C. Mrs. Voorhees"
};

var q2 = {
	question: "Who interviewed Louis in 'Interview with a Vampire'?",
	possibleAnswers: ["A. Brad Pitt",
				 "B. Christian Slater",
				 "C. Kirsten Dunst",
				 "D. Anne Rice"],
	flags : [false, true, false, false],
	answer : "B. Christian Slater"
};

var q3 = {
	question : "What was Leatherface's choice of weapon?",
	possibleAnswers : ["A. Knife",
				 "B. Chainsaw",
				 "C. Axe",
				 "D. Knife"],
	flags : [false, true, false, false],
	answer : "B. Chainsaw"
};

var q4 = {
	question : "What year was the first 'Nightmare on Elm Street' movie released?",
	possibleAnswers : ["A. 1984",
				 "B. 1982",
				 "C. 1985",
				 "D. 1980"],
	flags : [true, false, false, false],
	answer : "A. 1984"
};

var q5 = {
	question : "What was the first American Horror Film of the 20th century?",
	possibleAnswers : ["A. Dracula",
				 "B. Frankenstein",
				 "C. Wolfman",
				 "D. Nosferatu"],
	flags : [false, true, false, false],
	answer : "B. Frankenstein"
};

var q6 = {
	question : "What name did the demon from 'The Exorcist' use to contact Regan?",
	possibleAnswers : ["A. Captain Howdy",
				 "B. Captain Jack",
				 "C. Captain Spaulding",
				 "D. Captain Holy"],
	flags : [true, false, false, false],
	answer : "A. Captain Howdy"
};

var q7 = {
	question : "In which horror movie does the protagonist write a book that contains only the line, 'All work and no play makes Jack a dull boy'?",
	possibleAnswers : ["A. The Ninth Gate",
				 "B. The Devil's Rain",
				 "C. Writer's Block",
				 "D. The Shining"],
	flags : [false, false, false, true],
	answer : "D. The Shining"
};

var q8 = {
	question : "What is the SECOND highest grossing horror film of all time?",
	possibleAnswers : ["A. The Exorcist",
				 "B. Jaws",
				 "C. Halloween",
				 "D. A Nightmare on Elm Street"],
	flags : [false, true, false, false],
	answer : "B. Jaws"
};

var q9 = {
	question : "What is the name of Ripley's cat in 'Alien'?",
	possibleAnswers : ["A. Orion",
				 "B. Henry",
				 "C. Jack",
				 "D. Jonesy"],
	flags : [false, false, false, true],
	answer : "D. Jonesy"
};

var q10 = {
	question : "'The Ring' is originally based on a 1998 horror movie from which country?",
	possibleAnswers : ["A. Australia",
				  "B. Japan",
				  "C. Indonesia",
				  "D. Ireland"],
	flags : [false, true, false, false],
	answer : "B. Japan"
};

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {


	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Excellent! You may keep your life... for now.");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Yikes. Getting closer to lights out...");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();
}


setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


});