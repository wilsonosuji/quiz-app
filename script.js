const quizData = [
  {
    question: "Which language is best for front end web development ?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Central Simple Sheets",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Hypertext Machine Language",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Which term refers to a way of organizing classes that share properties?",
    a: "object-oriented",
    b: "encapsulation",
    c: "polymorphism",
    d: "inheritance",
    correct: "d",
  },
  {
    question: "Input to a compiler is called?",
    a: "a byte-code file",
    b: "source code",
    c: "an executable file",
    d: "object code",
    correct: "b",
  },
  {
    question: "Bytes in auxiliary memory are grouped into?",
    a: "bits",
    b: "files",
    c: "directories",
    d: "programs",
    correct: "a",
  },
  {
    question: "The kind of language that is easiest for people to use is called?",
    a: "assembly language",
    b: "machine language",
    c: "low-level language",
    d: "high-level language",
    correct: "d",
  },
  {
    question: "A program that supervises operation of the entire computer is called?",
    a: "operating system",
    b: "compiler",
    c: "interpreter",
    d: "virtual machine",
    correct: "a",
  },
  {
    question: "Which of these is not a high-level language?",
    a: "Java",
    b: "BASIC",
    c: "C++",
    d: "assembly language",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
