let secretNumber;
let attempts;

// Initialize game
function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // Random number 1-100
    attempts = 0;
    document.getElementById("#message").textContent = "";
    document.getElementById("#guessInput").value = "";
}

// Check user's guess
function checkGuess() {
    const guess = parseInt(document.getElementById("#guessInput").value, 10);

    // Input validation
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById("#message").textContent = "❌ Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess === secretNumber) {
        document.getElementById("#message").textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    } else if (guess < secretNumber) {
        document.getElementById("#message").textContent = "📉 Too low! Try again.";
    } else {
        document.getElementById("#message").textContent = "📈 Too high! Try again.";
    }
}

// Restart game
function restartGame() {
    startGame();
}

// Start the game when page loads
startGame();