Exercise Number Guessing Game
Objective
Your goal is to create a playable number guessing game with some of the JavaScript features we’ve covered in class so far. The user should be prompted to input a number as their guess, and receive feedback if they are too high, too low, or correct. The user should be able to finish the game, replay the game, or quit if they so desired.

Steps

Initialize an integer to represent a favorite number and assign a value with a number of your choosing or you can assign a random number to this variable:


OR

Use `prompt()` to ask the user to input a number, and store the result in a variable
Create an if-statement that if the guessed number is below the initial value, print out “too low”.
Create an else-if statement that if the number is higher than the initial value, print out “too high”.
Create an else statement that prints out “Congratulations!!!”.

Wait.. We already did this. Yes! But this isn’t as good as it could be. We need to make this number guessing game playable until the user guesses the correct number.

You are required to use at least one selection statement, loop, and function. It is likely that you will use more than that.
After you reach the required functionality, think of ways you could improve the game.

Refactor Ideas
Refactor your program to be more Object-Oriented, using mostly classes and instances with properties and methods
Refactor your game to include difficulties. Example with guessing a number within a range: Easy (1-10), Medium (1-100), and Hard (1-1000)
Refactor your guessing game to be playable until a correct answer, without using a loop. HINT: Recursion.

