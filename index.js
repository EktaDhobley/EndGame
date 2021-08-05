var readlineSync = require("readline-sync")
var score = 0;
var userName = readlineSync.question("What is your name?")
console.log("Welcome " + userName + " How well do you know Ekta?")

//play function
function play(question, answer){
var userAnswer = readlineSync.question(question);

if(userAnswer === answer){
  console.log("right!");
  score++;
}
else {
  console.log("wrong!")
  score--;
}

console.log("current score " + score)
console.log("-------------")
}

//array of objects
var questions = [{question: "What is my favourite color? ",
answer: "Purple"
},
{question: "When is my birthday? ",
answer: "15th August"},

{question: "Where do I work? ",
answer: "TCS"},

{question: "What course am I going to study in the US? ",
answer: "CS"}];

//loop
for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)

}

if( score > 3){
  console.log("YAY! You know Ekta very well, your score is " + score)
}
else {
  console.log("Get to know Ekta more, your score is " + score)
}
