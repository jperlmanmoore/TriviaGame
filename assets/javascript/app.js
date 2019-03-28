$(document).ready(function () {

    // var answerChoices = questionChoice[0].answer;
   
    var userPick; //click

    var userAnswers = {
        correct: 0,
        incorrect: 0, 
        didNotAnswer: 0
    };

    var images;

    var restartButton; 

    var questions;

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

    //make a copy of the array & then put it back in random order each time it loads
//var currentQ = qaChoice.slice();
//while(currentQ.length > 0) {
    
    //qaChoice = currentQ.splice(Math.floor(Math.random()*currentQ.length), 1)[0];
    //console.log(qaChoice);
//}

//other random sort
var currentQ = qaChoice;  
    
    qaChoice.sort (function(a, b) {
    
    return 0.5 - Math.random()});

    console.log(qaChoice);

    console.log(currentQ)

    $("#qa").append("<p class='text'>Question: " + qaChoice[0].question + "<br>Answers: " + qaChoice[0].answer + "</p>)");
        qaChoice++;
    });
    //*** I have a weird extra ) stuck in there, and I don't know where it is coming from... :( )

 //timer
var number = 31;

    var intervalId; //just starts running on the page load, but only stops or resumes on click

    $("#stop").on("click", stop);
    //I want to stop the counter on a guess and go to correct answer/image

    $("#resume").on("click", run);

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#timer").html("<h2>" + number + "</h2>");

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



// $.each(qaChoice, function () {   ***This repeats the q&A sets -do not use for this
//     $("#qa").html("<p class='text' id='question'>Question: " + qaChoice[0] + "</p>");
// });

//start by displaying a question and possible answers

 //needs to show current question and then next question   

//get random question

//click and determine if answer is correct


//when answers wrong, display a picture & correct answer for 10 seconds


//when answer is right, display a picture


//if right answer, wrong answer, or no answer, when count <= 0 seconds answer move to next question


//gameMode = ended - when at the end of the list of questions, (1) show end page that has total score & (2) reset button
// $("#restart").html()

// //hide reset button
// $("#restart").click(function () {
//     $(this).hide();
//     counter = setInterval(timer, 30000);
//     //show questions and answers
// });

 //arry of objects -- need questions & need answers w/ choices

    // function shuffle(qaChoice) {
    //     var m = qaChoice.length, t, i;
    //     while (m > 0)
    //     {
    //         i = Math.floor(Math.random() * m--);
    //         t = qaChoice[m];
    //         qaChoice[m] = qaChoice[i];
    //         qaChoice[i] = t;
    //     }
    //     return qaChoice;
    