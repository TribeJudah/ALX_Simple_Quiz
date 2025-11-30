const submitButton = document.getElementById("submit-answer");

function checkAnswer() {
  const feedback = document.querySelector("#feedback");
  const checkedRadio = document.querySelector('input[name = "quiz"]:checked');

  const correctAnswer = "4";

  if (checkedRadio) {
    const userAnswer = checkedRadio.value;

    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
      return;
    }

    feedback.textContent = "That's incorrect. Try again!";
  }
}

submitButton.addEventListener("click", checkAnswer);