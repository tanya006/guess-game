let randomNumber = Math.floor(Math.random() * 100) + 1;

function handleGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  const result = document.getElementById('result');

  if (guess === randomNumber) {
    result.textContent = "🎉 Correct! You guessed the number.";
    result.style.color = "green";
  } else if (guess < randomNumber) {
    result.textContent = "Too low! Try again.";
    result.style.color = "orange";
  } else {
    result.textContent = "Too high! Try again.";
    result.style.color = "orange";
  }
}