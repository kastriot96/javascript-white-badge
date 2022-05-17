const questions = [
  {
    number: 1,
    question: 'Lexical scope in JavaScript means ',
    answers: 'All of the Above',
    options: [
      'Inner level can access its outer levels',
      'Deduced at compile-time',
      'Function scope accesses variables from the parent scope',
      'All of the Above',
    ],
  },
  {
    number: 2,
    question: 'How can lexical scope referred in other words',
    answers: 'Static Scope',
    options: [
      'Dynamic Scope',
      'Run time depended Scope',
      'Static Scope',
      'All of the Above',
    ],
  },
  {
    number: 3,
    question: 'What is hoisting in JavaScript?',
    answers:
      'Hoisting is a default behavior of moving declarations to the top.',
    options: [
      'Hoisting is a default behavior of moving declarations to the top.',
      'Hoisting is a default behavior of moving declarations to the bottom.',
      'There is no such term in JavaScript',
      'Both are true , moving declarations to the top and bottom',
    ],
  },
  {
    number: 4,
    question: 'Which of the following affirmations is true',
    answers:
      'Variables defined with let and const are hoisted to the top of the block, but not initialized.',
    options: [
      'Variables defined with let and const are hoisted to the top of the block, but not initialized.',
      'Variables defined with let and const are hoisted to the top of the block, and initialized.',
      'Variables defined with let and const are old style and not supported in ES6',
      'Variables are recommended to be defined with var',
    ],
  },
  {
    number: 5,
    question: 'How do you do Javascript Debugging in the browser.',
    answers: 'Yes, all above but those are Mac commands 😎',
    options: [
      'In Mozilla i use ⌥-⌘-I',
      'In Chrome i use ⌥-⌘-J',
      'In Safari i use ⌥-⌘-C ',
      'Yes, all above but those are Mac commands 😎',
    ],
  },
  {
    number: 6,
    question: 'What is DOM in JS?',
    answers: 'It is a programming interface for web documents',
    options: [
      'It is a framework',
      'It is API only for XML documents',
      'It is a programming interface for web documents',
      'It is an extension which can be installed in your IDE',
    ],
  },
  {
    number: 7,
    question: 'DOM manipulation in JS',
    answers: 'To manipulate we have to access the document object first.',
    options: [
      'To manipulate we have to access the document object first.',
      'DOM can not be manipulated',
      'We can manipulate only using querySelector',
      'DOM is not accessable',
    ],
  },
  {
    number: 8,
    question: 'Events in JS',
    answers: 'All below',
    options: [
      'All below',
      'Form events exist',
      'There are 8 types of events',
      'Event model relies on listeners to listen for events and emitters to emit events periodically',
    ],
  },
  {
    number: 9,
    question: 'Function Callbacks',
    answers: 'There are neither synchronous or async callbacks',
    options: [
      'Callbacks are passed into another function as argument',
      'Arguments passed inside the outer function are not invokable',
      'There are neither synchronous or async callbacks',
      'Callbacks can not be executed immediately',
    ],
  },

  {
    number: 10,
    question: 'Loop Syntax',
    answers: 'All above',
    options: [
      'for loops through a block of code a number of times',
      'for/in loops through the properties of an object',
      'for/of loops through the values of an iterable object',
      'All above',
    ],
  },
];
window.questionsCount = 0;
window.questionNumber = 1;
window.userScore = 0;

window.answersList = document.querySelector('.answers__list');
window.continueQuestionBtn = document.querySelector('.next__btn');
const quizBox = document.querySelector('.quiz__box');
const result_box = document.querySelector('.profile__score');

const questionCounter = function (index) {
  const bottomQuestionCounter = document.querySelector('.total_questions');
  let totalQuestionCounterTag =
    '<span><p>' +
    index +
    '</p>of<p>' +
    questions.length +
    '</p>Questions</span>';

  bottomQuestionCounter.innerHTML = totalQuestionCounterTag;
};

// renderQuestions();

continueQuestionBtn.addEventListener('click', renderQuestions);

function renderQuestions() {
  if (questionsCount < questions.length) {
    showQuestion(questionsCount);
    questionCounter(questionNumber);
    window.questionCounter++;
    window.questionNumber++;

    //next__btn.style.display = 'block';
  } else {
    console.log('You have finished the quiz');

    window.location.href = 'profile.html';
    showResultsBox();
  }
  /*
  questionCounter++;
  questionNumber++;
  */
}

function showResultsBox() {
  if (userScore > 7) {
    let scoreTag =
      '<span>and congrats! , You got <p>' +
      userScore +
      '</p> out of <p>' +
      questions.length +
      '</p></span>';
    result_box.innerHTML = scoreTag;
  } else if (userScore > 5) {
    let scoreTag =
      '<span>and nice , You got <p>' +
      userScore +
      '</p> out of <p>' +
      questions.length +
      '</p></span>';
    result_box.innerHTML = scoreTag;
  } else {
    let scoreTag =
      '<span>and sorry , You got only <p>' +
      userScore +
      '</p> out of <p>' +
      questions.length +
      '</p></span>';
    result_box.innerHTML = scoreTag;
  }
}

//increase index by one after each click

function showQuestion(index) {
  console.log(questions[index], 'show next question');
  const questionText = document.querySelector('.question');
  let questionTag = '<span>' + questions[index].question + '</span>';

  if (questions[index].options[2] === undefined) {
    let optionTag =
      '<div class="option">' +
      questions[index].options[0] +
      '<span></span></div>' +
      '<div class="option">' +
      questions[index].options[1] +
      '<span></span></div>';

    answersList.innerHTML = optionTag;
  } else {
    let optionTag =
      '<div class="option">' +
      questions[index].options[0] +
      '<span></span></div>' +
      '<div class="option">' +
      questions[index].options[1] +
      '<span></span></div>' +
      '<div class="option">' +
      questions[index].options[2] +
      '<span></span></div>' +
      '<div class="option">' +
      questions[index].options[3] +
      '<span></span></div>';

    answersList.innerHTML = optionTag;
    questionText.innerHTML = questionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
      option[i].setAttribute('onclick', 'optionSelected(this)');
    }
  }
  questionsCount++;
}

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionsCount - 1].answers;

  let allOptions = answersList.children.length;

  if (userAnswer === correctAnswer) {
    userScore += 1;
    console.log(userScore);

    answer.style.backgroundColor = 'green';
  } else {
    console.log('wrong');
    answer.style.backgroundColor = 'red';

    for (let i = 0; i < allOptions; i++) {
      if (answersList.children[i].textContent === correctAnswer) {
        answersList.children[i].style.backgroundColor = 'green';
      }
    }
  }
  for (let i = 0; i < allOptions; i++) {
    answersList.children[i].classList.add('disabled');
  }
  //next__btn.style.display = 'block';
}

/*Just for fun :), playing aroung with async await

const loadQuestions = async function () {
  try {
    const response = await fetch('../data/questions.json');
    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    console.log(data[1].question);
  } catch (error) {
    console.log(error);
  }
};

loadQuestions();
*/

/*
setTimeout(() => {
  loadQuestions();
}, 2000);
*/

/*
async function loadQuestions() {
  setTimeout(() => {
    const response = fetch('../data/questions.json')
      .then((questions) => questions.json())
      .then((data) => console.log(data));
  }, 2000);
}

document.addEventListener('DOMContentLoaded', async () => {
  let questions = [];
  try {
    questions = await loadQuestions();
  } catch (error) {
    console.log(error);
  }
});
*/
