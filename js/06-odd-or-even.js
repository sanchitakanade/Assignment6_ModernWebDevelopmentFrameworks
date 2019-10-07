/*  Name: Sanchita Kanade
	Instructor Name: Zak Ruvalcaba
	Class: CS648.01 Modern Web Development Frameworks Fall 2019
	File: 06-odd-or-even.js
    Assignment No.: 6 
*/

var number;
for (number = 0; number <= 15; number += 1) {
    result = number % 2;

    if(result == 0) {
        window.console.log(number + " is even.\n");
    } else {
        window.console.log(number + " is odd.\n");
    }
}