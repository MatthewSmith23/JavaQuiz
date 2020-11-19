var start = document.getElementById("begin");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreFinal = document.getElementById("Final");

let questions = [
    {
        question: "1. What is my Youtube name?",
        choiceA: "Danny Duncan",
        choiceB: "Chunkyymonkey",
        choiceC: "Bubba",
        choiceD: "itschunk",
        correct: "D"
    }, {
        question: "2. What is my favorite season?",
        choiceA: "Summer",
        choiceB: "Spring",
        choiceC: "Fall",
        choiceD: "Winter",
        correct: "C"
    }, {
        question: "3. My favorite holiday is .. ? ",
        choiceA: "Christmas",
        choiceB: "Thanksgiving",
        choiceC: "Halloween",
        choiceD: "Easter",
        correct: "A"
    }, {
        question: "4. Which truck did I just sell?",
        choiceA: "Chevy",
        choiceB: "Ford",
        choiceC: "Jeep",
        choiceD: "GMC",
        correct: "B"
    }, {
        question: "5. Who is my favorite country singer?",
        choiceA: "Gunna",
        choiceB: "Luke Combs",
        choiceC: "Jason Aldean",
        choiceD: "Lil Pump",
        correct: "B"
    }
];

const lastQuestion = questions.length - 1;
let runningquestion = 0;
let count = 0;
let score = 0;
start.addEventListener("click", startQuiz);
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}

function renderQuestion() {
    let quest = questions[runningquestion];
    question.innerHTML = "<p>" + quest.question + "</p>";
    choiceA.innerHTML = quest.choiceA
    choiceB.innerHTML = quest.choiceB
    choiceC.innerHTML = quest.choiceC
    choiceD.innerHTML = quest.choiceD
}

function checkAnswer(answer) {
    if (answer == questions[runningquestion].correct) {
        score++;
    }
    count = 0;
    if(runningquestion < lastQuestion) {
        runningquestion++;
        renderQuestion();
    }
    else {
        scoreRender();
    }
}

function scoreRender(){
    scoreFinal.style.display = "block";
 
    const scorePerCent = Math.round(100 * score/questions.length);

    let img = (scorePerCent >= 80) ? "BACK.jpg" :
              (scorePerCent >= 60) ? "BACK.jpg" :
              (scorePerCent >= 40) ? "BACK.jpg" :
              (scorePerCent >= 20) ? "BACK.jpg" :
              "img/1.png";
    scoreFinal.innerHTML = "<img src="+ img +">";
    scoreFinal.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

document.getElementById('timer').innerHTML =
  005 + ":" + 01;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}

  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if (sec < 0) {sec = "59"};
  return sec;
}
