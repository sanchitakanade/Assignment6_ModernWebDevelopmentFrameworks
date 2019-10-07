/*  Name: Sanchita Kanade
	Instructor Name: Zak Ruvalcaba
	Class: CS648.01 Modern Web Development Frameworks Fall 2019
	File: 04-coinflip-streak.js
    Assignment No.: 6 
*/

var coinFlip;

do {
    coinFlip = Math.round(Math.random());
    if(coinFlip == 0) {
        window.console.log("Heads");
    } else if (coinFlip == 1) {
        window.console.log("Tails");
    }
} while(coinFlip == 0);