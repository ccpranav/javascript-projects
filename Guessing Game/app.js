let max = parseInt(prompt("Enter the maximum number!"))
while (!max) {
    max = parseInt(prompt("Enter a valid number!"))
}

let target = Math.floor(Math.random() * max) + 1 
let attempts = 1;

let guess = prompt("Guess a number..")
while (parseInt(guess) !== target) {
    if (guess === 'q') break;
    guess = parseInt(guess)
    if (guess < target) {
        guess = prompt("Too low! Guess again") 
        attempts++;
    } else if (guess > target) {
        guess = prompt("Too high! Guess again")
        attempts++;
    } else {
        guess = prompt("INVALID")
    }
}
if (guess === 'q') {
    console.log("YOU QUIT")
} else {
    console.log(`You got it in ${attempts} attempts`)
}