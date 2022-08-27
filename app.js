let fav = 8;
let guessed = false;

function guessedInfo(guess) {
    if (guess > fav) {
        alert("Too high!");
    } else if (guess < fav) {
        alert("too low");
    } else {
        alert("PERFECT!!!")
        guessed = true;
    }
}

function continueGuessing(){
    let guess = prompt("Guess a number between 1 and 10: ")
    guessedInfo(guess);
    if (!guessed) { continueGuessing()}
}

continueGuessing();
/* do {
    let guess = prompt("Guess a number between 1 and 10: ");
    guessedIt(guess);
}while(!guessed) */
