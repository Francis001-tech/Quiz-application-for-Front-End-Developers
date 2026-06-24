const questions = [
   
    {
        question: "What is the purpose of Semantic HTML tags ",
        answers:[
            {text: "To Style Elements", correct: true},
            {text: "To improve accessibility and SEO", correct: false},
            {text: "To add animations", correct: false},
            {text: "To reduce file size", correct: false},
        ]
    },

    {
        question: "What is CSS?",
        answers:[
            {text: "Styling of a Webpage", correct: true},
            {text: "Functionality of a WebPage", correct: false},
            {text: "Structure of a WebPage", correct: false},
            {text: "Enables an Element to be Hidden", correct: false},
        ]
    },

    {
        question: "What Programming Languages do we Have in Front-End?",
        answers:[
            {text: "Python,Django and C++", correct: false},
            {text: "HTML,CSS and JAVASCRIPT", correct: true},
            {text: "PHP,Go(Golang) and Ruby", correct: false},
            {text: "C, JAVA and C#", correct: false},
        ]
    },

    {
        question: "Which unit is relative to the root element of font-size",
        answers:[
            {text: "px", correct: false},
            {text: "em", correct: false},
            {text: "rem", correct: true},
            {text: "%", correct: false},
        ]
    },

    {
        question: "Which Programming Language is the most used in the world",
        answers:[
            {text: "HTML", correct: false},
            {text: "Python", correct: false},
            {text: "JAVASCRIPT", correct: true},
            {text: "C#", correct: false},
        ]
    },

    {
        question: "What makes Javascript so Important",
        answers:[
            {text: "It can be used for both Front-end and Back-end programming", correct: true},
            {text: "It is very rigid in its functionality", correct: false},
            {text: "We can manipulate HTML properties on it", correct: false},
            {text: "It can be never be Destroyed", correct: false},
        ]
    },

    {
        question: "What programming language is responsible for the responsiveness of a website",
        answers:[
            {text: "Django", correct: false},
            {text: "HTML", correct: false},
            {text: "JavaScript", correct: false},
            {text: "CSS", correct: true},
        ]
    },

    {
        question: "Which HTTP method is commonly used to send data from a form",
        answers:[
            {text: "GET", correct: false},
            {text: "POST", correct: true},
            {text: "FETCH", correct: false},
            {text: "SEND", correct: false},
        ]
    },

    {
        question: "What does SEO means",
        answers:[
            {text: "Server Engine Optimization", correct: false},
            {text: "Search Engine Optimization", correct: true},
            {text: "Server Engine Operations", correct: false},
            {text: "SET, ENGINE, OPERATIONS", correct: false},
        ]
    },

    {
        question: "Why is accessbility important in frontend development",
        answers:[
            {text: "To reduce server cost", correct: false},
            {text: "To support only mobile users", correct: false},
            {text: "To make websites usable by everyone", correct: true},
            {text: "To improve Javascript speed", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");
const remarkText = document.getElementById("remark")
const remarkText2 = document.getElementById("remark_1")

let currentQuestionIndex = 0;
let score = 0;

//starting quiz

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.InnerHTML = "Next";
    showQuestion();
}

function showQuestion (){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);
    })

}
function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
        }

        function selectAnswer(e){
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if(isCorrect){
                selectedBtn.classList.add("correct");
                score ++;
            } else{
                selectedBtn.classList.add("incorrect");
            }

            Array.from(answerButtons.children). forEach(button =>{
                if (button.dataset.correct === "true"){
                    button.classList.add("correct")
                }
                button.disabled = true;
            });
            nextButton.style.display = "block"
            backButton.style.display = "block";
        }

        function showScore(){
            questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
            questionElement.style.textAlign ="center"
            remarkText2.style.textAlign ="center"
            remarkText2.style.color ="green"
            remarkText.style.textAlign = "center"
            remarkText.style.color = "red"
            if(`${score}` < 5){
               remarkText.style.display = "block"
            }
            else{
                remarkText2.style.display = "block"
            }
            nextButton.innerHTML = "Play Again";
            nextButton.style.display ="block";
            answerButtons.style.display ="none";
            backButton.style.display = "none";

        }

        function handleBackButton(){
            currentQuestionIndex--;
            if(currentQuestionIndex > questions.length){
                showQuestion();
            }
            else{
                showScore();
            }
        }
        backButton.addEventListener("click",() => {
            if(currentQuestionIndex > questions.length){
                handleBackButton()
            }
            else{
                startQuiz();
            }
        })
        startQuiz();

        function handleNextButton(){
            currentQuestionIndex++;
            if(currentQuestionIndex < questions.length){
                showQuestion();
            }
            else {
                showScore();
            }
             }
            nextButton.addEventListener("click",() => {
                if(currentQuestionIndex < questions.length){
                    handleNextButton()
                }
                else{
                    startQuiz();
                }
            })
            startQuiz();
       
