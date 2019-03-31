$(document).ready(function () {

    //var gameMode = "not-started"
    //when start counts down 30 seconds to answer
    //need to record if corrent, incorrect, or not answered
    // display my current q&A
    // do a 10 second screen that shows the correct answer and a picture
    //then move to the next q&a set

    var guessRound = 1;
    var answerCorrect = 0;
    var answerWrong = 0;
    var noAnswer = 0;
    

    var qaChoice = [{
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

    loadcurrentQ();

    qaChoice.sort(function () {
        return 0.5 - Math.random();
    });
    console.log(qaChoice);

    function loadcurrentQ(currentQ) {
        
        var currentQIndex = 0;
        var currentQ = qaChoice[currentQIndex];
        var question = $("<div>");
        question.addClass("carousel-caption");
        var q = $("<p>").text(currentQ.question);
        question.append(q);
        $("#question").text(currentQ.question);
        $(".qaPlace").append(question);
        
        $.each(currentQ.answer, function(){
            var currentQIndex = 0;
            var currentQ = qaChoice[currentQIndex];
            var answer = $("<div>");
            answer.addClass("carousel-caption")
            var a = $("<button>").text(currentQ.answer[0]).addClass("btn0");
            var b = $("<button>").text(currentQ.answer[1]).addClass("btn1");
            var c = $("<button>").text(currentQ.answer[2]).addClass("btn2");
            var d = $("<button>").text(currentQ.answer[3]).addClass("btn3");
            answer.append(a).append(b).append(c).append(d);
            $("#answer").text(currentQ.answer);
            $(".qaPlace").append(answer);
        });


       
        };

       
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

// initGameMode()

//initGameMode();
// function initGameMode() {


//random sort of question
//var currentQ = qaChoice;  
//








// $(this).addClass("");
//     $("#answer").not(this).hide();
//     $("question").html("");


// $("#answer").click(function(){
//     if (gameMode = "started") {
//         if (guessRound === 2) {
//             $("qa")
//         } 
// }
