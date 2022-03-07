debugger
//    Header 
var timerEl = document.querySelector("#timer");

// Question Elements
var questionEl = document.querySelector("#main-heading");
var textEl = document.querySelector("#q-text");
var listEl = document.querySelector("quiz-list");
var buttonEl = document.querySelector("#startbutton");

// High Score Elements
var scoreEl = document.querySelector("#score")
var nameInputEl = document.querySelector("#h-name")
var scoreListEl = document.querySelector("#h-list")
var scoreButtonEl = document.querySelector("#h-button")

//Answer Elements


// Highscore Functions

scoreButtonEl.addEventListener("click", insertScore);

function insertScore(event) {
    event.preventDefault();
    var highScoreEl = document.createElement("li");
    highScoreEl.textContent = nameInputEl.value;
    // highScoreEl.className = " "; add back after style
    scoreListEl.appendChild(highScoreEl);
};



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