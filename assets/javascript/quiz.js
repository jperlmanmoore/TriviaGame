$(document).ready(function () {

    //const results = $("<div>");
    //const submit = $("<button>");

    $(function(){
        const qaChoice = [{
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
    //display questions

    qaChoice.sort(function () {
        return 0.5 - Math.random();
    });

    //display each question and answer set
     $.each(qaChoice, function (i, v) {
         console.log("i: " + i + " v: " + v);
         const quiz = $("<div>");
         const q = $("<p>").text("" + v.question + "").addClass("text-dark");
         var a = $("<button>").text(v.answer[0]).addClass("btn btn-lg btn0 mx-2 btn-dark");
         var b = $("<button>").text(v.answer[1]).addClass("btn btn-lg btn1 mx-2 btn-dark");
         var c = $("<button>").text(v.answer[2]).addClass("btn btn-lg btn2 mx-2 btn-dark");
         var d = $("<button>").text(v.answer[3]).addClass("btn btn-lg btn3 mx-2 btn-dark");
         quiz.append(q).append(a).append(b).append(c).append(d);
         console.log(quiz.html());
         console.log("#qaPlace: " + $("#qaPlace").length);

         $("#qaPlace").append(quiz);
    });

     $.each(qaChoice, function(_index, _val){
         console.log(this.question);
         console.log(this.answer); 
     })
    
        

    // $("button").on("click", function({

    // });
})

var number = 100;

    var intervalId;

    function run() {
    intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      number--;
      $("#timer").html("<h2>" + number + "</h2>");
      if (number === 0) {
        stop();
      }
    }

    function stop() {
      clearInterval(intervalId);
    }

    run();

  
    // $("#answer").on("click", "button", function(){
    //     if ($(this).text()===) {
    //         $(".qaPlace").html("<div class='qaPlace col-12'><img src='qaChoice[currentQIndex]image'></div>");
    //         answerCorrect++;
    //         //10 sec
    //     } else {
    //         $(".qaPlace").html("<div class='qaPlace col-12'><img src='qaChoice[currentQIndex]image'></div>");
    //         answerWrong++;
    //     };

});//end document ready3