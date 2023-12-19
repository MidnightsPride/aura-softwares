var timeLeft = document.querySelector(".time-left");
var quizContainer = document.getElementById ("container-mid");
var nextBtn = document.getElementById("next-button");
var countOfQuestion = document.querySelector(".number-of-question");
var displayContainer = document.getElementById("display-container");
var scoreContainer = document.querySelector(".score-container");
var restart = document.getElementById("restart");
var userScore = document.getElementById("user-score");
var startScreen = document.querySelector(".start-screen");
var startButton = document.getElementById("start-button");
var timerDisplay;
var questionCount;
var scoreCount = 0;
var count = 10;


var quizArray = [
    {
    id: "1",
    question: "Javascript is an ---- language",
    options: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    correct: ["object-oriented"],
},
{   
    id: "2",
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    options: ["getElementbyID", "getElementsByClassName()", "Both a and b", "None of the above"],
    correct: ["both a and b"],
},
{   
    id: "3",
    question: "How can a datatype be declared to be a constant type?",
    options: ["const", "var", "let", "constant"],
    correct: ["const"],
},
{   id: "4",
    question: "What keyword is used to check whether a given property is valid or not?",
    options: [ "in", "is in", "exists", "lies"],
    correct: ['in'],
},
{   
    id: "5",
    question: 'What is the use of the <noscript> tag in Javascript',
    options: [ "the contents are displayed by non-JS based browsers", "clears all the cookies and cache", "both a and b", "none of the above"],
    correct: ['the contents are displayed by non-JS based browsers'],
},
{
    id: "6",
    question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
    options: ["object", "boolean", "undefined", "integer"],
    correct: ["object"],
},
{
    id: "7",
    question: "What does the Javascript 'debugger' statement do?",
    options: ["it acts as a breakout in a program", "it will debug all the errors in the program at runtime", "it will debug error in the current statement if any", "all of the above"],
    correct: ["it acts as a breakout in a program"],
},
{
    id: "8",
    question: "What does the 'toLocateString()' method do in JS?",
    options: ["returns a localised string represtation of an object", "returns a localised object representation", "returns a parsed string", "none of the above"],
    correct: ["returns a localised string representation of an object"],
},
{   
    id: "9",
    question: "Which function is used to serialize an object into a JSON string in Javascript?",
    options: ["stringify()", "parse()", "convert", "none of the above"],
    correct: ["stringify()"],
},
{
    id: "10",
    question: "Which of the following is not a Javascript framework?",
    options: ["Cassandra", "Node", "Vue", "React"],
    correct: ["cassandra"],
}
];

restart.addEventListener('click',() => {
    initial();
    displayContainer.classList.remove('hide');
    scoreContainer.classList.add('hide');
});

nextBtn.addEventListener('click', (displayNext = () => {
    questionCount += 1;
    if(questionCount == quizArray.length) {
        displayContainer.classList.add('hide');
        scoreContainer.classList.remove('hide');
        userScore.innerHTML = "Your Score is " + scoreCount + " out of " + questionCount;
    }
    else {
        countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";

        quizDisplay(questionCount);
        count = 10;
        clearInterval(countdown);
        timerDisplay();
    }
}));


const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.textContent = `$(count)s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000); 
}

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    })
    quizCards[questionCount].classList.remove("hide");
};

function quizCreator(){
    quizArray.sort(() => Math.random() - 0.5);


    for(let i of quizArray){
        i.options.sort(() => Math.random() - 0.5)
        let div = document.createElement('div');
        div.classList.add("container-mid", 'hide');
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";


        let question_DIV = document.createElement('p');
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);


        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}
        </button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}
        </button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}
        </button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}
        </button>
        `
        quizContainer.appendChild(div);
    }
}


function check(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName
    ('conatainer-mid')[questionCount];
    let options = question.querySelectorAll('.option-div');


    if(userSolution === quizArray[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    }
    else{
        userOption.classList.add("incorrect");


        options.forEach((element) =>{
            if (element.innerText = quizArray[questionCount].correct){
                element.classList.add("correct");
            }
        })
    }
    clearInterval(countdown);
    options.forEach((element)=>{
        element.disabled = true;
    });
}


function initial(){
    quizContainer.textContent = "";
    questionCount = 0;
    scoreCount = 0;
    scoreCount = 0;
    count= 10;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}


startButton.addEventListener('click', () =>{
    startScreen.classList.add('hide');
    displayContainer.classList.remove('hide');
    initial();
});


window.onload = () =>{
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");


}


