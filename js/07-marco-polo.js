/*  Name: Sanchita Kanade
	Instructor Name: Zak Ruvalcaba
	Class: CS648.01 Modern Web Development Frameworks Fall 2019
	File: 07-marco-polo.js
    Assignment No.: 6 
*/

var number;

for (number = 1; number <= 100; number += 1) {
    if ((number % 3) == 0 && (number % 5) == 0) {
        window.document.write("Marco! Polo!" + "<br>");
    } else if ((number % 3) == 0) {
        window.document.write("Marco!" + "<br>");
    } else if ((number % 5) == 0) {
        window.document.write("Polo!" + "<br>");
    } else {
        window.document.write(number + "<br>");
    }
}