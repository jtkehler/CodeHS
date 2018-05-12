/* This program will play a simple guessing game.
 * The user will guess, and the computer should print if
 * the guess was too high, too low, or correct.
 */
var MIN = 1;
var MAX = 100;

function start() {
   var randomNum = Randomizer.nextInt(1, 100);
   while(true){
       
       var guess = readInt("Guess: ");
       
       if(guess < MIN || guess > MAX){
           println("Not Valid");
       }
       
       else if(guess > randomNum){
           println("High");
       }
       
       else if(guess < randomNum){
           println("Low");
       }
       
       else if(guess == randomNum){
           println("Correct!");
           break;
       }
   }
   
}
