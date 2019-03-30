$(document).ready(function () {

    // var answerChoices = questionChoice[0].answer;
   
    var userAnswers = {
        correct: 0,
        incorrect: 0, 
        didNotAnswer: 0
    };

    var gameMode = "not-started";    

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

    

//assign dom elements to variables

var $question = $('#question');
var $answer = $('#answer');
var $score = $('#score');
var $options = $('#options');
var $container = $('#game-area')


    
var gameMode = "not-started"
var counter = 0;
var score = 0;


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




//if the page loads or the restart button is clicked
if (gameMode === "not-started") {
    gameMode = "started";
    var $container = ("#question");
    $container.html("");


    function addQ($container, question, answer) {
        $container.append("<div id='question'>" + question + "</div>");
        $container.append("<div id='answer'>" + answer[0] + answer[1] + answer[2] + answer [3] + "</div>");
    
    }
}


quizRound = 1;

if (gameMode === "started") {
    if (quizRound === 1) {
        clearInterval(timer);

        if (answerChoice === correctAnswer) {
            
        } else if (answerChoice != correctAnswer) {
           
        }

    };
}



    
    
    

    var currentQ = qaChoice;  
    qaChoice.sort (function() {
    return 0.5 - Math.random()});       //*if I wanted to sort ascending or descending I would need to pass arguement - (function(a, b) {return a-b)})                            
    console.log(currentQ);
    console.log(qaChoice)
    //$("#qa").append('<p class="text">' + currentQ[1].question + "<br>" + currentQ[1].answer + '</p>');
    
    // $.each(qaChoice, function(index, val) {
    //     console.log(val.category)
    // })





    
    // var $container = $("#qa");
    // $container.html(""); 



// $("#restart").click(function() {
//     initGameMode();
// })
    
    
//** for each item in arry - I need to display one at a time
//

    //

    
    // *** need to put each answer in a button
    // *** what I really want to do is make each random q&a set show up one at a time


 //timer
var number = 31;
    var intervalId; //just starts running on the page load, but only stops or resumes on click
    $("#stop").on("click", stop);
    //I want to stop the counter on a guess and go to correct answer/image
    $("#resume").on("click", run)
    //I want it to run when a new q&a set is ready;
    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      number--;
      $("#timer").html("<div>" + number + "<div>");
      if (number === 0) {
        stop();
        // alert("Time Up!");
        //if no guesses, then I want to display answer for 10 seconds
        //
      }
    function stop() {
      clearInterval(intervalId);
    }
    run();
};

//gameMode = ended - when at the end of the list of questions, (1) show end page that has total score & (2) reset button
// $("#restart").html()

// //hide reset button
// $("#restart").click(function () {
//     $(this).hide();
//     counter = setInterval(timer, 30000);
//     //show questions and answers
// });





//start by displaying a question and possible answers

 //needs to show current question and then next question   

//get random question

//click and determine if answer is correct


//when answers wrong, display a picture & correct answer for 10 seconds


//when answer is right, display a picture


//if right answer, wrong answer, or no answer, when count <= 0 seconds answer move to next question


// function displayQAs() {
//     $("#qa").append("<p class='text'>Question: " + qaChoice[0].question + "<br>Answers: " + qaChoice[0].answer, "</p>)");
//     question++;

//     var qaChoices = qaChoice[0].choices;
//     var buttonsArr = [];

//     $.each(qaChoices, function(key, value ){
        
        
//     }

// $.each(qaChoice, function () {   ***This pick the q&A sets more than once -do not use for this
//     $("#qa").html("<p class='text' id='question'>Question: " + qaChoice[0] + "</p>");
// });

//also does not work just right
// var currentQ = qaChoice.slice();
// while(currentQ.length > 0) {
    
//     qaChoice = currentQ.splice(Math.floor(Math.random()*currentQ.length), 1)[0];
//     console.log(qaChoice.question.answer);
// }
//
});
