const  questions = [
    {
        question: "Which is the largest animal in world?",
        answer:[
            {text:"Shark",
            correct:false},

            {text:"Blue Whale",
            correct:true},

            {text:"Elephant",
            correct:false},

            {text:"Giraffe"
            ,correct:false},
        ]
    },
    {
        question: "Which is the Smallest country in world?",
        answer:[
            {text:"India",correct:false},
            {text:"Sri Lanka",correct:false},
            {text:"Bermuda",correct:false},
            {text:"Poland",correct:true},
        ]
    },
    {
        question: "Which is the largest desert in world?",
        answer:[
            {text:"Kalhari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antartica",correct:true},
        ]
    },
    {
        question: "Which is the smallest contienent in the  world?",
        answer:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Artic",correct:false},
            {text:"Africa",correct:false},
        ]
    }
];



const questionElement = document.getElementById('question');
const AnswerElement = document.querySelector('.answer-buttons');
const NextButtonElement = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    NextButtonElement.innerHTML="Next";
    showQuestion();
}

function showQuestion() {
    restState();
    let cuurentQuestion = questions[currentQuestionIndex];
    // console.log(`current question  = ${cuurentQuestion.answer.forEach(element=>{
    //     console.log(`element = `,element);
    // })}`)
    let currentQuestionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = currentQuestionNumber + ".  " + cuurentQuestion.question;

    

    cuurentQuestion.answer.forEach(element=>{
        
        const button = document.createElement("button")
        button.innerHTML = element.text
        button.classList.add("btn");
        AnswerElement.appendChild(button)
        if (element.correct) {
            button.dataset.correct = element.correct;
        }
        button.addEventListener("click",selectAnswer=>{
            const selectedBtn = selectAnswer.target;
            console.log(`selected btn is ${selectedBtn}`)
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(AnswerElement.children).forEach(button=>{
        if (button.dataset.correct === "true") {
            button.classList.add('correct')
        }
        button.disabled = true; 
    })
    NextButtonElement.style.display = "block";
        })
       
       
    })


}

function restState(){
    NextButtonElement.style.display = "none";
    while (AnswerElement.firstChild) {
        AnswerElement.removeChild(AnswerElement.firstChild)
    }
}

// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === 'true';
//     if (isCorrect) {
//         selectedBtn.classList.add("correct");
//     } else {
//         selectedBtn.classList.add("incorrect");
//     }
// }

function showScore() {
    restState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    NextButtonElement.innerHTML= `Play Again`;
    NextButtonElement.style.display = "block"
}

function hadleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}

NextButtonElement.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length) {
        hadleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();



