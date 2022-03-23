// Timer 
var timerEl = document.querySelector("#timer");

// Question Elements
var questionHeadEl = document.querySelector("#main-heading");
var bodyEl = document.querySelector("#q-text");
var listEl = document.querySelector("#q-list");
var startButtonEl = document.querySelector("#startbutton");

// High Score Elements
var scoreEl = document.querySelector("#score")
var nameInputEl = document.querySelector("#h-name")
var scoreListEl = document.querySelector("#h-list")
var scoreButtonEl = document.querySelector("#h-button")

//Answer Elements
var answerListEl = document.querySelector("#q-alist");
var correctAnsEl = document.createElement("li");
var incorrectAnswerEl1 = document.createElement("li");
var incorrectAnswerEl2 = document.createElement("li");
var incorrectAnswerEl3 = document.createElement("li");

// Answer Choices Class
correctAnsEl.className = "answer-item";
incorrectAnswerEl1.className = "answer-item";
incorrectAnswerEl2.className = "answer-item";
incorrectAnswerEl3.className = "answer-item";


// Footer element
var rightWrongEl = document.querySelector("#cw-box");
var rwHeadlineEl = document.createElement("h3");

// Timer Elements
var questionCount = 0;
var timer = 120;
var score = 0;


// Timer
var timerStart = function() {
    var timeLimit = setInterval(function() {
        if (timer <= 0) {
            clearInterval(timeLimit);
            timer = 0;
        } else {
            timerEl.textContent = "Time: " + timer;
        }
        timer -= 1;
    }, 1000);
}

// Questions Container
var questionList = {
    // Question Arrays
    questionArrays: [
        "What does HTML Stand For?",
        "Second",
        "Third",
        "Fourth",
        "Fifth",
        "Sixth",
        "Seventh"
    ],
    // Correct Answer Array
    correctAnswers: [
        "HyperText Markup Language",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G"
    ],
    // Wrong answers nested arrray
    incorrectAnswers: [
        ["HighlyToxic Marketing Lobby","Holy Titled Money Layer","Nothing"],
        ["wrong","wrong","wrong"],
        ["wrong","wrong","wrong"],
        ["wrong","wrong","wrong"],
        ["wrong","wrong","wrong"],
        ["wrong","wrong","wrong"],
        ["wrong","wrong","wrong"],
        ["wrong","wrong","wrong"],
    ]
};

// Evaluate answer to see if correct or wrong
var evaluateAnswer = function(isCorrect) {
    if (isCorrect === "correct") {
        // Add 10 points to score
        score += 10;
        // Update footer text
        rightWrongEl.appendChild(rwHeadlineEl);
        rwHeadlineEl.textContent = "Correct!";
    } else {   
        // Deduct 10 from time
        timerEl -= 10;
        // Update footer text
        rightWrongEl.appendChild(rwHeadlineEl);
        rwHeadlineEl.textContent = "Wrong!";
    }
    // Update question count and show next question
    getQuestion(questionCount+=1);
};

// Get questions
var getQuestion = function(questionCount) {
    
    // Get number of questions from bank
    var questionsNumber = questionList.questionArrays.length;

    if (questionCount<questionsNumber) {
        
        // get incorrect answer
        incorrectBank = questionList.incorrectAnswers[questionCount];

        //Update questions texts
        questionHeadEl.textContent = questionList.questionArrays[questionCount];
        bodyEl.textContent = "CHOOSE!!!!";

        //add choices
        listEl.appendChild(correctAnsEl);
        listEl.appendChild(incorrectAnswerEl1);
        listEl.appendChild(incorrectAnswerEl2);
        listEl.appendChild(incorrectAnswerEl3);

        // Update Choice Text
        correctAnsEl.textContent = questionList.correctAnswers[questionCount];
        incorrectAnswerEl1.textContent = incorrectBank[0];
        incorrectAnswerEl2.textContent = incorrectBank[1];
        incorrectAnswerEl3.textContent = incorrectBank[2];
    } else {
        timerEl = 0;
        bodyEl.appendChild(startButtonEl);
        tryAgain();
    };
} 



// Start Quiz
var startQuiz = function(event) {
    timerStart();
    startButtonEl.remove();
    getQuestion(questionCount);
}
// Retry quiz
var tryAgain = function() {
    questionHeadEl.textContent = "Your Score: " + score;
    bodyEl.textContent = "Enter your name and click submit below.";
    console.log("Try again?");
    timerEl.textContent = "Time";
}
// Highscore Functions

function insertScore(event) {
    event.preventDefault();
    var highScoreEl = document.createElement("li");
    highScoreEl.textContent = nameInputEl.value + " " + score;
    // highScoreEl.className = " "; add back after style
    scoreListEl.appendChild(highScoreEl);
};


// Button Handlers
startButtonEl.addEventListener("click", startQuiz); // Quiz Start
scoreButtonEl.addEventListener("click", insertScore); // Highscore Submit Button

// Wrong answers
incorrectAnswerEl1.addEventListener("click", evaluateAnswer);
incorrectAnswerEl2.addEventListener("click", evaluateAnswer);
incorrectAnswerEl3.addEventListener("click", evaluateAnswer);

//Correct Answer
correctAnsEl.addEventListener("click", function(){
    evaluateAnswer("correct");
});

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