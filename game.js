const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score =0;
let questionCounter =0;
let availableQuestions = [];

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
      },
      {
        question:
          "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4
      }
    ];

    //CONSTANTS
    const CORRECT_BONUS = 10;
    const MAX_QUESTIONS = 3;

    startGame = () => {
        questionCounter = 0;
        score =0;
        availableQuestions = [...questions];
        getNewQuestion();
    };

    
    // GET THE QUESTION TO H2
    getNewQuestion = () => {
        questionCounter++; //increment counter by 1
        //randomise questions listing
        const questionIndex=Math.floor(Math.random() * availableQuestions.length);

        currentQuestion = availableQuestions[questionIndex];
        //Question update to question text h2
        question.innerText = currentQuestion.question;

        //Get choices using forEach
        choices.forEach (choice => {
            //get access to custom attribute data-number
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        });

    };

    startGame();

