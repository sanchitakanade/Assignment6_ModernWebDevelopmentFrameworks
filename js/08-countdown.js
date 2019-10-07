/*  Name: Sanchita Kanade
	Instructor Name: Zak Ruvalcaba
	Class: CS648.01 Modern Web Development Frameworks Fall 2019
	File: 08-countdown.js
    Assignment No.: 6 
*/

var number = window.prompt("Enter an integer value", 1);
number = parseInt(number, 10);
window.document.write("Count down :<br>");

while(number >= 0) {
    window.document.write(number + "<br>");
    number -= 1;
}
