console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  console.log('in hello');
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());// tested function to see if it will log the function hello, which it did.


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName( Ashitaka ) {
  console.log('in helloName');
  return 'Hello Ashitaka';
}
// Remember to call the function to test
console.log('test - should say "Hello Ashitaka"', helloName());

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('in addNumbers', firstNumber, secondNumber );// return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  return answer;
}
console.log('running addNumbers with 5 & 10', addNumbers(5,10));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber){
  console.log('in multiplyThree', firstNumber, secondNumber, thirdNumber);
  let answer = firstNumber * secondNumber * thirdNumber;
  return answer;
}
 console.log('running multiplyThree with 5 & 10 & 15', multiplyThree(5, 10, 15));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log('in isPositive');
  if ( number > 0 ){//I'm using the If statment syntax to check if the number is positive
    return true;
  }
  else{
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log( 'isPositive - should say true', isPositive(4));// testing if the function will log correctly
console.log( 'isPositive - should say false', isPositive(-5));//testing if the function will log correctly

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  let last = array[array.length-1];// used array.legth-1 to get the last array
  if (array.length === 0){
    return undefined;
  } else {
    return last;
  }
}
let testArray = ['Popcorn', 'chicken wings', 'chocolate hearts', 'Ring pop'];
let secondTestArray = [];
console.log('in getLast should say Ring pop', getLast(testArray));// tested if the code will log Ring pop.
console.log('in getLast should say undefined', getLast(secondTestArray));//tested to see if the function will log undefined if no is in the array.
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (let v = 0; v < array.length; v++){
    if (array[v] === value){
    return true;
  }
}
    return false;
  }
console.log('value is found', find(3, [1, 6, 7, 9]));
console.log('value is found', find(5, [4, 5, 7, 8, 9]));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
if ( string [0] === letter){
  return true;
} else {
 return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let array = [1, 2, 3];//created an array with 3 numbers
let sum = 0;// set the variable sum to zero
function sumAll(array) {//created the funtction sumAll

  // TODO: loop to add items
  for ( let i=0; i<array.length; i++){// used a for loop
  sum += array[i];// set sum to eaqul sum plus array's index
  }
  return sum;// then return the sum
}

console.log('sumAll should log 6', sumAll(array));//logging the array

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function checkPositiveNumber(number){
let newArray = [];// created an empty array
  if(number > 0){//decided to go with an if else condition, so if number is greater than 0
    newArray.push(number);//then push the number into array
    return newArray;// then return it into the new array with positive numbers
  } else {
    return newArray;// otherwise just just return the newarray empty
  }
}
checkPositiveNumber();
console.log(checkPositiveNumber(1));//tested with a positive number
console.log(checkPositiveNumber(-1));//tested with a negative number
// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// picked a problem from Edabit. The problem is to return the first element in an array.
function getFirstValue(arr) {// first i creted a function called getFirstValue
	return arr[0];// then i return array using 0 to get the first element of that array because the first element is counted as 0.
}
console.log('getFirstValue should be 1', getFirstValue([1, 3, 5, 6]));// testing if the function works
console.log('getFirstValue should be 5', getFirstValue([5, 6, 7, 8]));//testing if the function works
