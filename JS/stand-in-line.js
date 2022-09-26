//57JavaScript Algorithms and Data Structures -> Basic JavaScript
// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
//Add the number to the end of the array, then remove the first element of the array.
//The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
  // Your code here

  var queue = arr.push(item);

  var removeItem = arr.shift();

  return removeItem;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

//Thinking
// So I use .push() to add number at the end of the array. 
// I use .shift() to remove the first element. 
// Return the element was removed. return removeItem After I setup the var with the .shift() method.
