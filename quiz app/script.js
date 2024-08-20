 const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers:[
            {text: "shark", correct:"false"},
            {text: "Blue whale", correct:"true"},
            {text: "Elephant", correct:"false"},
            {text: "Giraffe", correct:"false"},

        ]
    },
    {  question: "Which is the smallest country in the world?",
        answers:[
            {text: "Vatican City", correct:"true"},
            {text: "Bhutan", correct:"false"},
            {text: "Sudan", correct:"false"},
            {text: "Alaska", correct:"false"},

        ]

    },
    { question: "Which is the largest desert in the world?",
        answers:[
            {text: "Kalahari", correct:"false"},
            {text: "Sahar", correct:"false"},
            {text: "Gobi", correct:"false"},
            {text: "Antartic", correct:"true"},

        ]
    },

    {
        question: "Which is the smallest continent in the world?",
        answers:[
            {text: "Asia", correct:"false"},
            {text: "Australia", correct:"true"},
            {text: "South America", correct:"false"},
            {text: "Alaska", correct:"false"},

        ]
    },

    {
        question: "Which is the largest country in the world?",
        answers:[
            {text: "Russia", correct:"true"},
            {text: "China", correct:"false"},
            {text: "Sudan", correct:"false"},
            {text: "India", correct:"false"},

        ]
    },
    {
        question: "Which is the deepest ocean in the world?",
        answers:[
            {text: "Indian", correct:"false"},
            {text: "Atlantic", correct:"false"},
            {text: "Pacific", correct:"true"},
            {text: "Artic", correct:"false"},

        ]
    },

    {
        question: "Which is the smallest ocean in the world?",
        answers:[
            {text: "Indian", correct:"false"},
            {text: "Atlantic", correct:"false"},
            {text: "Pacific", correct:"false"},
            {text: "Artic", correct:"true"},

        ]
    },
 ];

 const questionElement = document.getElementById("question");
 const answerButtons  = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn"); 

 let currentQuestionIndex = 0;
 let score = 0;

  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }

  function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;   

    currentQuestion.answers.forEach( answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer); 
    });
  }
 
  function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
  }
  nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
  })
  startQuiz();