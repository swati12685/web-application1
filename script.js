const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which language runs in the browser?",
    options: ["Java", "Python", "C++", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "HyperText Marketing Language",
      "HighText Machine Language"
    ],
    answer: "HyperText Markup Language"
  }
];

let userAnswers = {};

const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score");
const startScreen = document.getElementById("start-screen");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  loadQuestions();
});

function loadQuestions() {
  questionContainer.innerHTML = "";
  questions.forEach((q, index) => {
    const box = document.createElement("div");
    box.classList.add("question-box");

    const question = document.createElement("h3");
    question.textContent = `${index + 1}. ${q.question}`;
    box.appendChild(question);

    const options = document.createElement("div");
    options.classList.add("options");

    q.options.forEach(option => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${index}`;
      input.value = option;
      input.addEventListener("change", () => {
        userAnswers[index] = option;
      });

      label.appendChild(input);
      label.append(option);
      options.appendChild(label);
    });

    box.appendChild(options);
    questionContainer.appendChild(box);
  });
}

submitBtn.addEventListener("click", () => {
  let score = 0;

  questions.forEach((q, index) => {
    if (userAnswers[index] === q.answer) {
      score++;
    }
  });

  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreDisplay.textContent = `You scored ${score} out of ${questions.length}`;
});
