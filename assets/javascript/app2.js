$(document).ready(function () {

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


//30 second timer function - used on page for showing q&a
var timer30 = 31;
var intervalId; 
       
    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      timer30--;
      $("#timer").html("<div>" + timer30 + "<div>");
      if (timer30 === 0) {
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

//10 second timer function - used on page for showing correct answer and picture
var timer10 = 11;
    var intervalId; //just starts running on the page load
    
    //I want to stop the counter on a guess and go to correct answer/image
   
    //I want it to run when a new q&a set is ready;
    function run10() {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      timer10--;
      $("#timerCorrectAnswer").html("<div>" + timer10 + "<div>");
      if (timer10 === 0) {
        stop();
        // alert("Time Up!");
        //if no guesses, then I want to display answer for 10 seconds
        //
      }
    function stop() {
      clearInterval(intervalId);
    }
    run10();
};

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
    qaChoice.sort (function() {
    return 0.5 - Math.random()});       //*if I wanted to sort ascending or descending I would need to pass arguement - (function(a, b) {return a-b)})                            
    //console.log(currentQ);
    console.log(qaChoice)
    
    guessRound = 1;
    answerCorrect = 0;
    answerWrong = 0;
    var $question = $("#question");
    var $answer = $("#answer");
    $question.html("");
    $answer.html("");
    $("#question").html("").append("<div class='question'>" + qaChoice[0].question + "</div><br>");
    $("#answer").html("").append("<button class='btn1 question'>" + qaChoice[0].answer[0] + "</button>").append("<button class='btn2 question'>" + qaChoice[0].answer[1] + "</button>").append("<button class='btn3 question'>" + qaChoice[0].answer[2] + "</button>").append("<button class='btn4 question'>" + qaChoice[0].answer[3] + "</button><br>");
    $()
}

$("#answer").on("click", function(){
    if (gameMode === "not-started") {
        gameMode = "started";
        $(this).addClass("")
        $("#answer").not(this).hide();
        $("question").html(" ");


    }
})




//game restart
});
