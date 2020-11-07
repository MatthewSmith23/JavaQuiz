var now = 0;
var view = 0;
var rightAnswer = 0;
var final = false; 
var selected = [];
var questions = [{
    
    question: "1. What is my Youtube name?",
    choices: ["itschunk", "Chunkyymonkey;", "Bubba", "DannyDuncan"],
    correctAnswer: 0
}, {
    question: "2. What is my favorite season?",
    choices: ["summer", "spring", "fall", "winter"],
    correctAnswer: 2
}, {
    question: "3. My favorite holiday is .. ? ",
    choices: ["Halloween", "Easter", "Thanksgiving", "Christmas"],
    correctAnswer: 3
}, {
    question: "4. Which truck did I just sell?",
    choices: ["Chevy", "Ford", "GMC", "Jeep"],
    correctAnswer: 1
}, {
    question: "5. Who is my favorite country singer?",
    choices: ["Gunna", "Jason Aldean", "Lil pump", "Luke Combs"],
    correctAnswer: 3
}]

function displayQuestion(index) {
    console.log(questions[index].question);
    document.getElementById('question').innerHTML = questions[index].question;
}

function displayChoices(index) {
    let id = 'choice';
    for (let i = 0; i < 4; i++) {
        let newID = id + String((i+1));
        document.getElementById(newID).innerHTML = questions[index].choices[i];
    }
}

displayQuestion(0);

// var count = 15;
// var interval = setInterval(function(){
//   document.getElementById('count').innerHTML=count;
//   count--;
//   if (count === 0){
//     clearInterval(interval);
//     document.getElementById('count').innerHTML='Done';
//     // or...
//     alert("You're out of time!");
//   }
// }, 1000);

// document.ready(function() 
// {
//  displayCurrentQuestion();
// (this).find(".message").hide();
// (this).find(".lastButton").attr('disabled', 'disabled');

// timedCount();

// (this).find(".lastButton").on("click", function () 
// {		
    
//     if (!final) 
//     {
//         if(now == 0) { return false; }

//         if(now == 0) {
//           (".preButton").attr('disabled', 'disabled');
//         }
        
//             now--;
//             if (now < questions.length) 
//             {
//                 displayCurrentQuestion();
                
//             } 					
//     } else {
//         if(view == 3) { return false; }
//         now = 0; view = 3;
//         viewResults();		
//     }
// }) 
