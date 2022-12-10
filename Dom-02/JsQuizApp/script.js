const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

// const quiz;
const answerEls = document.querySelectorAll(".answer") ;
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const showScore =document.querySelector('#show-score');

let currentQuiz = 0;
let score = 0

loadQuiz()

function loadQuiz() {
    const list = quizData[currentQuiz];
    questionEl.innerText = list.question;
    a_text.textContent = list.a;
    b_text.textContent = list.b;
    c_text.textContent = list.c;
    d_text.textContent = list.d;

}


function getSelected() {
    let answer;
    answerEls.forEach((e)=>{
        if (e.checked) {
            answer = e.id;
        }
    })
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((e)=>{
        e.checked =false;
    })
}

submitBtn.addEventListener('click', () => {
    const checkedAnswer = getSelected();
    if (checkedAnswer == quizData[currentQuiz].correct) {
        score++;
    }
    currentQuiz++;
    
    deselectAnswers();
    
    if (currentQuiz < quizData.length) {
        loadQuiz();
    }else{
        showScore.innerHTML =  `
        <h3> You scored :  ${score} / ${quizData.length} ✌️ </h3>
        `
        document.querySelector('.quiz-header').style.display = 'none';
    }
})
