//    Header 
var timerEl = document.querySelector("#timer");

// Question Elements
var questionEl = document.querySelector("#main-heading");
var textEl = document.querySelector("#q-text");
var listEl = document.querySelector("quiz-list");
var startButtonEl = document.querySelector("#startbutton");

// High Score Elements
var scoreEl = document.querySelector("#score")
var nameInputEl = document.querySelector("#h-name")
var scoreListEl = document.querySelector("#h-list")
var scoreButtonEl = document.querySelector("#h-button")

//Answer Elements
var answerListEl = document.querySelector("#q-alist");
var cAnswerEl = document.createElement("li");
var wrongAnswerEl1 = document.createElement("li");
var wrongAnswerEl2 = document.createElement("li");
var wrongAnswerEl3 = document.createElement("li");

// Timer Elements
var questionCount = 0;
var quizTimer = 120;
var timeLimit;
var score = 0;


// Timer
var timerStart = function() {
    var timeLimit = setInterval(function() {
        if (quizTimer <= 0) {
            clearInterval(timeLimit);
            quizTimer = 0;
        } else {
            timerEl.textContent = "Time: " + quizTimer;
        }
        quizTimer -= 1;
    }, 1000);
}

// Highscore Functions

scoreButtonEl.addEventListener("click", insertScore);

function insertScore(event) {
    event.preventDefault();
    var highScoreEl = document.createElement("li");
    highScoreEl.textContent = nameInputEl.value;
    // highScoreEl.className = " "; add back after style
    scoreListEl.appendChild(highScoreEl);
};


// Start Quiz
var startQuiz = function(event) {
    timerStart();
    startButtonEl.remove();
    getquestions(questionsCount);
}

// Button Handlers
startButtonEl.addEventListener("click", startQuiz); // Quiz Start



// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score