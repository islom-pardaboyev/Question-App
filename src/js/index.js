// Sections
const startSection = document.getElementById("start-section");
const processSection = document.getElementById("process-section");

// Question container
const questionContainer = document.getElementById("question-container");

// Buttons
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const showResultBtn = document.getElementById("show-result");

// Time
const time = document.getElementById("time");

// The first question is starting
let currentQuestion = 1;

// questions
const data = [
  {
    id: 1,
    question: "Savol",
    options: [
      {
        id: 1,
        option: "A variant",
        current: false,
      },
      {
        id: 2,
        option: "B variant",
        current: true,
      },
      {
        id: 3,
        option: "C variant",
        current: false,
      },
    ],
  },
  {
    id: 2,
    question: "Savol 2",
    options: [
      {
        id: 1,
        option: "A variant",
        current: false,
      },
      {
        id: 2,
        option: "B variant",
        current: true,
      },
      {
        id: 3,
        option: "C variant",
        current: false,
      },
    ],
  },
];

// Function to make questions to the user
function displayQuestion(id) {
  const question = data.filter((item) => item.id === id);

  // If there is no question, it will be reported in Alert
  if (!question[0]) return alert("Savol topilmadi");

  // need to be free to the user before it is made to the user
  questionContainer.innerHTML = "";

  const title = document.createElement("h2");
  const optionContainer = document.createElement("div");

  // title
  title.className = "font-bold text-lg";
  title.innerText = question[0].question;

  // option container
  optionContainer.className = "mt-5 flex flex-col gap-2";

  question[0].options.forEach((item) => {
    const option = document.createElement("div");
    const optionText = document.createElement("p");
    const optionCheckCircle = document.createElement("span");
    const optionCheckedCircle = document.createElement("span");

    option.className =
      "bg-gray rounded-lg p-4 cursor-pointer flex items-center gap-[14px]";

    // option text
    optionText.innerText = item.option;
    optionText.className = "font-medium text-base opacity-50";

    // checkbox
    optionCheckCircle.className =
      "bg-white rounded-full w-[18px] h-[18px] grid place-items-center";
    optionCheckedCircle.className =
      "bg-primary-200 rounded-full w-[13px] h-[13px]";

    option.appendChild(optionCheckCircle);
    option.appendChild(optionText);
    optionContainer.appendChild(option);
  });

  questionContainer.appendChild(title);
  questionContainer.appendChild(optionContainer);
}

// Function to verify the options you select
function checkAnswers() {}

function start() {}

// Go to the next question
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  displayQuestion(currentQuestion);
});

// Start the questions
startBtn.addEventListener("click", () => {
  startSection.classList.add("hidden");
  processSection.classList.remove("hidden");
  displayQuestion(currentQuestion);
});
