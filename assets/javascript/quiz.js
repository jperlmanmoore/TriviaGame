$(document).ready(function () {
    var answerCorrect = 0;
    //const results = $("<div>");
    //const submit = $("<button>");

    $(function () {
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
                answer: ["Munch", "lMatisse", "Cezanne", "O'Keefe"],
                images: "#",
                correctAnswer: "Cezanne"
            },

        ];

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
            //console.log(quiz.html());
            //console.log("#qaPlace: " + $("#qaPlace").length);

            $("#qaPlace").append(quiz);
        });

        //  $.each(qaChoice, function(_index, _val){
        //      console.log(this.question);
        //      console.log(this.answer); 
        //  })

        //score

        let answerCorrect = 0;
        let answerWrong = 0;

        $("button").on("click", function (event) {
            event.preventDefault();

            console.log('clicked', $(this).text());

            //if ($(this).text() === correctAnswer) {
            if ($(this).hasClass("correct") === true) {
                answerCorrect++;
                $(this).parent().find(".not-correct").hide();

            } else {
                answerWrong++;

                $(this).parent().find(".not-correct").css("background-color", "red").prop("disabled", true);
                $(this).parent().find(".correct").css("background-color", "green").prop("disabled", true);
            };

            $("#results").text("Correct: " + answerCorrect + " Wrong: " + answerWrong);
        });

        //timer
        var number = 30;
        var intervalId;

        function run() {
            number = 30;
            $("#qaPlace button").show().css('backgroun-color', '').prop("disabled", false);
            intervalId = setInterval(decrement, 1000);

        }

        function decrement() {
            number--;
            $("#timer").html("<h2> You have " + number + " seconds!</h2>");
            if (number === 0) {
                stop();
                $("#restart").addClass("btn btn-lg btn-dark mx-auto").show();
            }

        };

        function stop() {
            clearInterval(intervalId);
        }
        //restart button click event


        //document ready run
        run();

    
        $("#restart").click(function(e) {
            run();
        });
    });// document on ready 2
});// document on ready 1
