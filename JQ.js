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

document.ready(function() 
{
 displayCurrentQuestion();
(this).find(".message").hide();
(this).find(".lastButton").attr('disabled', 'disabled');

timedCount();

(this).find(".lastButton").on("click", function () 
{		
    
    if (!final) 
    {
        if(now == 0) { return false; }

        if(now == 0) {
          (".preButton").attr('disabled', 'disabled');
        }
        
            now--;
            if (now < questions.length) 
            {
                displayCurrentQuestion();
                
            } 					
    } else {
        if(view == 3) { return false; }
        now = 0; view = 3;
        viewResults();		
    }
}) 
