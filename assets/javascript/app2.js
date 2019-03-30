$(document).ready(function () {

    var gameMode = "not-started"

    
});

//30 second timer function - used on page for showing q&a
// var timer30 = 31;
// var intervalId; 
       
//     function run() {
//       intervalId = setInterval(decrement, 1000);
//     }
//     function decrement() {
//       timer30--;
//       $("#timer").html("<div>" + timer30 + "<div>");
//       if (timer30 === 0) {
//         stop();
//         // alert("Time Up!");
//         //if no guesses, then I want to display answer for 10 seconds
//         //
//       }
//     function stop() {
//       clearInterval(intervalId);
//     }
//     run();
// };

// timer10();
// function timer10(){
//     count--;
//     if (count <= 0) {
//      clearInterval(counter);
//      return;
//     }
    
//      $("#timer").html("Time remaining: " + "00:" + count + " secs");
//     }

initGameMode()

//initGameMode();
function initGameMode() {
    var qaChoice = [        
        {
            question: "What is the biggest fish in the ocean?",
            answer: ["basking shark", "whale shark", "blue whale", "jaws"],
            images: [],
            correctAnswer: "whale shark"
        },
    
        {
            question: "What was the original color of Oscar the Grouch?",
            answer: ["orange", "purple", "green", "pink"],
            images: [],
            correctAnswer: "orange"
        },
    
        {
            question: "what does 'M & M's' actually stand for?",
            answer: ["Mmmmm & Mmmmmmm", "marvelous & ", "Mork & Mindy", "Mars & Murie's"],
            images: [],
            correctAnswer: "Mork & Mindy"
        },
    
        {
            question: "The skin of which fruit can cause poison ivy symptoms?",
            answer: ["kiwi", "mango", "pomegranate", "papaya"],
            images: [],
            correctAnswer: "kiwi"
        },
    
        {
            question: "Which president owned a bar before taking office?",
            answer: ["Millard Fillmore", "Lyndon B. Johnson", "Jimmy Carter", "Abraham Lincoln"],
            images: [],
            correctAnswer: "Abraham Lincoln"
        },
    
        {
            question: "Play-doh was originally made to be...",
            answer: ["stress reliever", "wall-paper remover", "glue", "salt-lick"],
            images: [],
            correctAnswer: "wall-paper remover"
        },
    
        {
            question: "A baby puffin is called a ...",
            answer: ["puff puff", "little puffer", "puffling", "puffy"],
            images: [],
            correctAnswer: "puffling"
        },
    
        {
            question: "A group of bunnies is called a ...",
            answer: ["kerfluffle", "fluffle", "hoppy", "fluffy hoppy"],
            images: [],
            correctAnswer: "fluffle"
        },
    
        {
            question: "How many ridges are on a dime?",
            answer: ["58", "202", "118", "30"],
            images: [],
            correctAnswer: "118"
        },
    ];

    //random sort of question
//var currentQ = qaChoice;  
//

if (gameMode = "not-started") {
    gameMode = "started";

    qaChoice.sort (function() {
    0.5 - Math.random()
    return qaChoice;
    });       //*if I wanted to sort ascending or descending I would need to pass arguement - (function(a, b) {return a-b)})                            
    //console.log(currentQ);
    console.log(qaChoice)

    guessRound = 1;
    answerCorrect = 0;
    answerWrong = 0;
    noAnswer = 0;
    
    
    var questionChoice = qaChoice;
    $.each(questionChoice, function(index, val) {    
    $("#question").append("<div class='question'>" + questionChoice[0] + "</div><br>");
    question++;
});
    
    var answerChoices = qaChoice[0].answer;
    answer++;
    var buttonArr = [];


    
    $.each(answerChoices, function(index, val) {
        answer++
        $("#answer").append("<button class='btn1 question'>" + qaChoice[0].answer[0] + "</button>").append("<button class='btn2 question'>" + qaChoice[0].answer[1] + "</button>").append("<button class='btn3 question'>" + qaChoice[0].answer[2] + "</button>").append("<button class='btn4 question'>" + qaChoice[0].answer[3] + "</button><br>");
    });
   

    // $(this).addClass("");
    //     $("#answer").not(this).hide();
    //     $("question").html("");


// $("#answer").click(function(){
//     if (gameMode = "started") {
//         if (guessRound === 2) {
//             $("qa")
//         } 
// }
// });


}}