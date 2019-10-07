/*  Name: Sanchita Kanade
	Instructor Name: Zak Ruvalcaba
	Class: CS648.01 Modern Web Development Frameworks Fall 2019
	File: 03-coinflip-redux.js
    Assignment No.: 6 
*/

var coinFlip, i;

for(i = 1; i <= 10; i += 1) {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        window.console.log("Heads");
    } else if(coinFlip == 1) {
        window.console.log("Tails");
    }
}