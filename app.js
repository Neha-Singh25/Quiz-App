const quiz = [
    {
        question: "Which of the following are closures in Javascript?",
        ans1text: "Variables",
        ans2text: "Functions",
        ans3text: "Objects",
        ans4text: "All of the above",
        answer: "All of the above",
    },
    {
        question: " Which object in Javascript doesn’t have a prototype?",
        ans1text: "Base Object",
        ans2text: "All objects have a prototype",
        ans3text: "None of the objects have a prototype",
        ans4text: "None of the above",
        answer: "Base Object",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]
const question = document.getElementById("question");

const option_a = document.getElementById("txt_opta");
const option_b = document.getElementById("txt_optb");
const option_c = document.getElementById("txt_optc");
const option_d = document.getElementById("txt_optd");
const answerElement = document.querySelectorAll(".ans");

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    
    if (checkedAns === null) {
        alert("Please select an answer");
    } else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quiz.length) {
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        } else {
            document.querySelector(".container").innerHTML = `
                <h2 class="score-text">Your score is ${score} out of ${quiz.length}</h2>
                <button id="restart">Restart Quiz</button>
            `;
            document.getElementById("restart").addEventListener("click", () => {
                location.reload();
            });
        }
    }
});
