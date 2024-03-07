// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Number of attempts allowed
let attempts = 5;

// Function to start the game
function startGame() {
    // Reset attempts
    attempts = 5;
    
    // Get user input
    let guess = parseInt(prompt("Guess a number between 1 and 100:"));
    
    // Check if the guess is correct
    while (guess !== randomNumber && attempts > 1) {
        if (isNaN(guess)) {
            alert("Please enter a valid number.");
        } else if (guess < randomNumber) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }
        
        // Decrement attempts
        attempts--;
        
        // Get user input
        guess = parseInt(prompt(`You have ${attempts} attempts left. Guess again:`));
    }
    
    // Check if the player has won or lost
    if (guess === randomNumber) {
        alert(`Congratulations! You guessed the number ${randomNumber} correctly!`);
    } else {
        alert(`Sorry, you've run out of attempts. The number was ${randomNumber}.`);
    }
}

// Start the game
startGame();
