// Game Values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for Guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check Win
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    setMessage(`${winningNum} is correct. You win!`, "green");
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      guessInput.disabled = true;
      guessInput.style.borderColor = "red";
      setMessage(
        `Game over, you lost. The correct number was ${winningNum}`,
        "red"
      );
    } else {
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(
        `${guess} is not correct. ${guessesLeft} guesses left.`,
        "red"
      );
    }
  }
});

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
