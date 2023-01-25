var timerEl = document.querySelector(".sec-remain");
var startButton = document.querySelector(".start-btn");
var startScreen = document.querySelector(".start-screen");
var quizQs = document.querySelector("#questions")
var questionElement = document.getElementById("question-here")
var answerButEl = document.getElementById("answer-btn")
var nextBtn = document.getElementById("next-btn btn")
//var highScore = document.querySelector("")
var playerScore = 0;
let questionCount;
var time 
var timer
var userScore = document.getElementById("user-score")

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++
    if (currentQuestionIndex == questions.length) {
        

        }
        userScore.classList.remove("hide")
        userScore.innerHTML = "your score is " + playerScore.length + " out of 3"
    setNextQuestion()
})
startButton.addEventListener("click", startGame);

let shuffledQuestions, currentQuestionIndex


var questions = [
    {
        question: "What does DOM stand for?",
        answers: [
         { text: "this", correct: false },
         { text: "Document Object Model", correct: true },
         { text: "this_one", correct: false },
         { text: "this_too", correct: false },
        ]
    },
    {
        question: "TESTING 2?",
        answers: [
            { text: "test1", correct: false },
            { text: "test2", correct: false },
            { text: "test3", correct: true },
            { text: "test4", correct: false },
        ]
    },
    {
        question: "testing 3?",
        answers: [
            { text: "test11", correct: true },
            { text: "test12", correct: false },
            { text: "test13", correct: false },
            { text: "test14", correct: false },
        ]
    }
];
 
 function startTimer() {
    timer = setInterval(function() {
    time--; timerEl.textContent = time;
   
   if (time === 0) {
    clearInterval(timer)
    
}}, 1000)
 }


 
function setNextQuestion() {
    resetAnswer()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
            playerScore++
        }
        
        button.addEventListener("click", selectAnswer) 
        answerButEl.appendChild(button)
        
    })

}
function endQuestions () {
    if (shuffledQuestions.length = currentQuestionIndex) {
        console.log("hello")
    }
    quizQs.classList.add("hide")
    
}

function resetAnswer() {
    clearStatusClass(document.body)
    nextBtn.classList.add("hide")
    while (answerButEl.firstChild) {
        answerButEl.removeChild(answerButEl.firstChild)
    }
}


currentQuestionIndex++
if (!shuffledQuestions.length === currentQuestionIndex) {
    endQuestions()
} else {
    showQuestion()
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    // Array.from(answerButEl.children).forEach(child => {
    //     setStatusClass(child, child.dataset.correct)
    Array.from(answerButEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 0) {
    nextBtn.classList.remove("hide")
    showQuestion()
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
        endQuestions()
    }
    
    console.log(shuffledQuestions.length)
    console.log(currentQuestionIndex)
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("incorrect")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("incorrect")
}


function startGame() {
    startTimer();
    time = 10;
    startScreen.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() -.5);
    currentQuestionIndex = 0;
    quizQs.classList.remove("hide");
    setNextQuestion(shuffledQuestions, currentQuestionIndex);
}

