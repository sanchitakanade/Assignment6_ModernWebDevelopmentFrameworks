/*  Name: Sanchita Kanade
	Instructor Name: Zak Ruvalcaba
	Class: CS648.01 Modern Web Development Frameworks Fall 2019
	File: 01-larger-or-smaller.js
    Assignment No.: 6 
*/

var integer1, integer2;
do {
    integer1 = window.prompt("Enter a first integer value", 1);
    integer1 = parseInt(integer1, 10);
    if (isNaN(integer1)) {
        window.alert("Please enter a valid integer value");
    }
} while (isNaN(integer1));

do {
    integer2 = window.prompt("Enter a second integer value", 2);
    integer2 = parseInt(integer2, 10);
    if (isNaN(integer2)) {
        window.alert("Please enter a valid integer value");
    }
} while (isNaN(integer2));

if (integer1 > integer2) {
    window.document.write("Larger integer is: " + integer1);
} else if (integer1 === integer2) {
    window.document.write("Both values are equal");
} else {
    window.document.write("Larger integer is: " + integer2);
}