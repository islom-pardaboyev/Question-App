"use strict";
const startBtn = document.querySelector(".startBtn");
const quizSection = document.querySelector(".quizSection");
const checkBox = document.querySelectorAll("input");
const questionTitle = document.querySelectorAll(".questionTitle");

console.log(checkBox);

if (checkBox.checked) {
  quizSection.classList.add("top-[100%]");
}

startBtn.addEventListener("click", () => {
  quizSection.classList.remove("top-[100%]");
});

checkBox.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
        questionTitle.forEach((questionTitle) => {
            questionTitle.classList.add("text-purple");
        });
    } else {
        questionTitle.forEach((questionTitle) => {
            questionTitle.classList.remove("text-purple");
        })
    }
  });
});
