//practice Q2
let gameNum= 87;
 let userNum = prompt("Guess the number between 1 and 100:");
 while (userNum != gameNum) {
    userNum = prompt("Wrong number. Guess again:");
 }
 alert("Congratulations! You guessed the number correctly!");