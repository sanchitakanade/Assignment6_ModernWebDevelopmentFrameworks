/*  Name: Sanchita Kanade
	Instructor Name: Zak Ruvalcaba
	Class: CS648.01 Modern Web Development Frameworks Fall 2019
	File: 02-coinflip.js
    Assignment No.: 6 
*/

var coinFlip = Math.random();
var choice = window.prompt("Heads or Tails?");
choice = choice.toLowerCase();
var result;

//input validation
while (!(choice == "heads" || choice == "tails")) {
    window.alert("Please enter a proper value, (either heads or tails)");
    choice = window.prompt("Heads or Tails?");
    choice = choice.toLowerCase();
}

if (coinFlip < 0.5) {
    result = "heads";
} else if(coinFlip > 0.5) {
    result = "tails";
}

if (result == "heads" && choice == result) {
    window.alert("The flip was heads and you chose heads...you win!");
} else if (result == "heads" && choice == "tails") {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (result =="tails" && choice == "heads") {
    window.alert("The flip was tails but you chose heads...you lose!");
} else if (result == "tails" && choice == result) {
    window.alert("The flip was tails and you chose tails...you win!");
}

coinFlip = Math.floor(Math.random() * 100); //returns random integer from 0 to 99
choice = window.prompt("Heads or Tails?");
choice = choice.toLowerCase();

//input validation
while (!(choice == "heads" || choice == "tails")) {
    window.alert("Please enter a proper value, (either heads or tails)");
    choice = window.prompt("Heads or Tails?");
    choice = choice.toLowerCase();
}

if (coinFlip < 50) {
    result = "heads";
} else if (coinFlip > 50) {
    result = "tails";
}

if (Boolean(result == "heads" && choice == result)) {
    window.alert("The flip was heads and you chose heads...you win!");
} else if (Boolean(result == "heads" && choice == "tails")) {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (Boolean(result =="tails" && choice == "heads")) {
    window.alert("The flip was tails but you chose heads...you lose!");
} else if (Boolean(result == "tails" && choice == result)) {
    window.alert("The flip was tails and you chose tails...you win!");
}
