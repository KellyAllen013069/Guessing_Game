class GuessingGame {

    toGuess = 0;
    guessed = false;
    difficulty = 10;
    userDifficultySelection = 10;
    timesPlayed = 0;

    setDifficulty(level) {
        switch (Number(level)) {
           case 2: 
                return 100;
                break;
            case 3: 
                return 1000;
                break;
            default:
                return 10;
        }

    }
    getUserDifficulty (){
        this.userDifficultySelection = prompt("What difficulty? (Enter 1 for easy(1-10), 2 for medium(1-100), 3 for Hard(1-1000)");
        this.difficulty = this.setDifficulty(this.userDifficultySelection);
    
    }

    guessedInfo(guess) {
        if (guess > this.toGuess) {
            alert("Too high!");
        } else if (guess < this.toGuess) {
            alert("Too low!");
        } else {
            alert("PERFECT!!!")
            this.guessed = true;
        }
    }

    continueGuessing(){
        let guess = prompt(`Guess a number between 1 and ${this.difficulty}: `)
        this.guessedInfo(guess);

        if (!this.guessed) {
            this.continueGuessing();
        }

    }

    generateRandom(min = 1, max = this.difficulty) {
        alert(`max is ${max}`);
        return Math.round(Math.random() * (max - min) + min);
      }


    playGame() {
        this.getUserDifficulty();
        this.toGuess = this.generateRandom();
        alert(`to guess is ${this.toGuess} `);
        this.continueGuessing();
    }

}

let g = new GuessingGame();
g.playGame();
/* do {
    let guess = prompt("Guess a number between 1 and 10: ");
    guessedIt(guess);
}while(!guessed) */
