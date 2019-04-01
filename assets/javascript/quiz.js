$(document).ready(function () {
    
    $(function () {
        //object array
        const qaChoice = [{
                question: "What is Picasso's last name at birth?",
                answer: ["Gonzalez", "Ruiz", "Mendoza", "Valdez"],
                images: "#",
                correctAnswer: "Ruiz"
            },

            {
                question: "What famous painting was Picasso accured of stealing in 1911?",
                answer: ["Mona Lisa", "Water Lillies", "Venus de Milo", "Last Supper"],
                images: "#",
                correctAnswer: "Mona Lisa"
            },

            {
                question: "How old was Picasso when he died?",
                answer: ["23", "42", "70", "91"],
                images: "#",
                correctAnswer: "91"
            },

            {
                question: "How long did Picasso take to paint Guernica?",
                answer: ["3 months", "3 years", "3 weeks", "3 days"],
                images: "#",
                correctAnswer: "3 weeks"
            },

            {
                question: "Which painting led to the breakup of Picasso's marriage?",
                answer: ["La Lecture", "Olga in the Armchair", "Les Demoiselles", "The Old Guitarist"],
                images: "#",
                correctAnswer: "La Lecture"
            },

            {
                question: "In what country did Picasso die?",
                answer: ["USA", "France", "China", "Spain"],
                images: "#",
                correctAnswer: "France"
            },

            {
                question: "Which painter did Picasso admire as a master?",
                answer: ["Munch", "Matisse", "Cezanne", "O'Keefe"],
                images: "#",
                correctAnswer: "Cezanne"
            },

        ];

        //random sort questions each time
        qaChoice.sort(function () {
            return 0.5 - Math.random();
        });

        //display each question and answer set
        $.each(qaChoice, function (i, v) {
            const quiz = $("<br><div><br>");
            const q = $("<p>").text("" + v.question + "").addClass("text-dark h4");
            var a = $("<button>").text(v.answer[0]).addClass("btn btn-lg btn0 mx-2 btn-dark").addClass(v.correctAnswer === v.answer[0] ? "correct" : "not-correct");
            var b = $("<button>").text(v.answer[1]).addClass("btn btn-lg btn1 mx-2 btn-dark").addClass(v.correctAnswer === v.answer[1] ? "correct" : "not-correct");
            var c = $("<button>").text(v.answer[2]).addClass("btn btn-lg btn2 mx-2 btn-dark").addClass(v.correctAnswer === v.answer[2] ? "correct" : "not-correct");
            var d = $("<button>").text(v.answer[3]).addClass("btn btn-lg btn3 mx-2 btn-dark").addClass(v.correctAnswer === v.answer[3] ? "correct" : "not-correct");
            quiz.append(q).append(a).append(b).append(c).append(d);
            //need to correct so that when click the restart button it does not show a count of one wrong answer

            $("#qaPlace").append(quiz);
        });

       
        //correct & incorrect counter
        let answerCorrect = 0;
        let answerWrong = 0;

        $("button").on("click", function (event) {
            event.preventDefault();

            console.log('clicked', $(this).text());

            
            if ($(this).hasClass("correct") === true) {
                answerCorrect++;
                $(this).parent().find(".not-correct").hide();

            } else {
                answerWrong++;

                $(this).parent().find(".not-correct").prop("disabled", true);
                $(this).parent().find(".correct").prop("disabled", true);
            };

            $("#results").text("Correct: " + answerCorrect + " Wrong: " + answerWrong);
        });

        //timer
        //if you click restart before the time has run out it does not rest the buttons, and the time will count negative
        var number = 30;
        var intervalId;

        function run() {
            number = 30;
            $("#qaPlace button").show().css('backgroun-color', '').prop("disabled", false);
            intervalId = setInterval(decrement, 1000);
            // correctAnswer = 0;
            // answerWrong = 0;

        }

        function decrement() {
            number--;
            $("#timer").html("<h2> You have " + number + " seconds!</h2>");
            if (number === 0) {
                stop();
                
            }

        };

        function stop() {
            clearInterval(intervalId);
        }
    
       
        //restart -- does not work correctly if you click reset bfore the time has not run out - will count negative
        //also counts click to restart as a wrong answer, but seems to correct as the round starts and you click the first wrong answer
        $("#restart").click(function(e) {
            run();
            answerCorrect = 0;
            answerWrong = 0;
        });

        run();
    });// document on ready 2 -- shorthand way of doing this
});// document on ready 1
