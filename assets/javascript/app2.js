$(document).ready(function () {

    //var gameMode = "not-started"
    //when start counts down 30 seconds to answer
    //need to record if corrent, incorrect, or not answered
    // display my current q&A
    // do a 10 second screen that shows the correct answer and a picture
    //then move to the next q&a set

    


    var qaChoice = [{
            question: "What is the biggest fish in the ocean?",
            answer: ["basking shark", "whale shark", "blue whale", "jaws"],
            images: "assets/baskingshark.jpg",
            correctAnswer: "basking shark"
        },

        {
            question: "What was the original color of Oscar the Grouch?",
            answer: ["orange", "purple", "green", "pink"],
            images: "assets/orangeoscar.jpg",
            correctAnswer: "orange"
        },

        {
            question: "what does 'M & M's' actually stand for?",
            answer: ["Mmmmm & Mmmmmmm", "marvelous & ", "Mork & Mindy", "Mars & Murie's"],
            images: "assets/mork&mindy.jpg",
            correctAnswer: "Mork & Mindy"
        },

        {
            question: "The skin of which fruit can cause poison ivy symptoms?",
            answer: ["kiwi", "mango", "pomegranate", "papaya"],
            images: "assets/kiwi.jpg",
            correctAnswer: "kiwi"
        },

        {
            question: "Which president owned a bar before taking office?",
            answer: ["Millard Fillmore", "Lyndon B. Johnson", "Jimmy Carter", "Abraham Lincoln"],
            images: "assets/abrahamlincoln.jpg",
            correctAnswer: "Abraham Lincoln"
        },

        {
            question: "Play-doh was originally made to be...",
            answer: ["stress reliever", "wall-paper remover", "glue", "salt-lick"],
            images: "assets/play-doh.jpg",
            correctAnswer: "wall-paper remover"
        },

        {
            question: "A baby puffin is called a ...",
            answer: ["puff puff", "little puffer", "puffling", "puffy"],
            images: "assets/puffling.jpg",
            correctAnswer: "puffling"
        },

        {
            question: "A group of bunnies is called a ...",
            answer: ["kerfluffle", "fluffle", "hoppy", "fluffy hoppy"],
            images: "assets/bunnies.jpg",
            correctAnswer: "fluffle"
        },

        {
            question: "How many ridges are on a dime?",
            answer: ["58", "202", "118", "30"],
            images: "assets/dime.jpg",
            correctAnswer: "118"
        },
    ];

    loadcurrentQ();

    function loadcurrentQ(currentQ) {

        qaChoice.sort(function () {
            return 0.5 - Math.random();
        });
        //console.log(qaChoice);

        var currentQIndex = 0;
        var currentQ = qaChoice[currentQIndex];
        var question = $("<div><br>");
        var q = $("<p>").text(currentQ.question).addClass("carousel-caption mb-5 px-5");
        question.append(q);
        $("#question").text(currentQ.question);
        $(".qaPlace").prepend(question);


        var currentQIndex = 0;
        var currentQ = qaChoice[currentQIndex];
        var answer = $("<br><div>");
        answer.addClass("carousel-caption")
        var a = $("<button>").text(currentQ.answer[0]).addClass("btn btn-lg btn0 mx-2 mt-5 btn-dark");
        var b = $("<button>").text(currentQ.answer[1]).addClass("btn btn-lg btn1 mx-2 mt-5 btn-dark");
        var c = $("<button>").text(currentQ.answer[2]).addClass("btn btn-lg btn2 mx-2 mt-5 btn-dark");
        var d = $("<button>").text(currentQ.answer[3]).addClass("btn btn-lg btn3 mx-2 mt-5 btn-dark");
        answer.append(a).append(b).append(c).append(d);
        $("#answer").text(currentQ.answer);
        $(".qaPlace").append(answer);


        var timer30 = 31;
        var intervalId;
        function run() {
            intervalId = setInterval(decrement, 1000);
        }

        function decrement() {
            $("#timer").append("<div>" + timer30 + "<div>");
            timer30--;

        if (timer30 === 0) {
            stop();
                
            }

            function stop() {
                clearInterval(intervalId);
            }
            run();
        };

        $("#timer").append("<div>" + timer30 + "<div>");

    var guessRound = 1;

    
    $("#answer").on("click", "button", function(){
        if ($(this).text()===qaChoice[currentQIndex].correctAnswer) {
            //hide everything, show the right answer and show a picture
            $(".qaPlace").hide();
            var scoreCounter = $("<div id='score'>")
            $("#score").click(function() {
                $("score").html(function(i, val){
                    return val*1+1});
            });
        };
    });
    
    
    
    
    
    var scoreCounter = {
    answerCorrect: 0,
    answerWrong: 0,
    noAnswer: 0,
    }
    
    scoreCounter = $("<div id='score'>")
    //$("#score").(scoreCounter);
    };
});





//30 second timer function - used on page for showing q&a

// timer10();
// function timer10(){
//     count--;
//     if (count <= 0) {
//      clearInterval(counter);
//      return;
//     }

//      $("#timer").html("Time remaining: " + "00:" + count + " secs");
//     }