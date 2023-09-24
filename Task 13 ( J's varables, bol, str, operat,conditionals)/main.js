//////////////////////////////////////////////////! Task 1: variable

//? Assign a new value to the variable num. The code will not work the way it is. Find the mistake and fix it. Execute the corrected code.
// let num = 1;
// num = 3;
// console.log(num);

//? Here, we declare the variable num. But, it has no value yet. Assign a value to it and run the code.
// let num;
// num = 5;
// console.log(num);


//? Here, we have two variables numOne and numTwo. numOne already has a value. Assign numTwo the value of numOne and run the code 
// let numOne = 5;
// let numTwo = numOne;
// console.log(numTwo);

//? Below, we attempt to assign the value of a variable named numOne to the variable numTwo. But, that variable has not been declared yet. Declare a variable named numOne and run the code.
// let numOne = 5;
// let numTwo = numOne;
// console.log(numTwo);

//? In this simple exercise we declare a variable called num and assign it a value of 5. Then we try to log the value of the variable using the console.log() method.But, the console.log() method contains a small mistake. If you try to run the code, you will see an error message.Fix the mistake and run the code again.
// const num = 5;
// console.log(num);


//? This exercise is very similar to the previous one. We declare a variable called num, assign it a value of 5, and try to log it. But again, we introduced a small mistake.Fix the code and run it.
// const num = 5;
// console.log(num);


//////////////////////////////////////////////////! Task 2: Booleans 

//? Here, we declare the variable isTrue. But, it has no value yet. Assign a boolean value to it and run the code.
// let isTrue;
// isTrue = true;
// console.log(isTrue);

//? Here, we declare the variable num and assign it the value 5. We also declare the variable bool which we assign the boolean representation of num.Extend the code such that the console.log() statement logs false.
// let num = 5;
// num = false;
// const bool = Boolean(bool);
// console.log(bool);



//////////////////////////////////////////////////! Task 3: Operators

//? In the console.log() statement below we use the Equal operator to check whether numOne and numTwo have the same value. Change the code so that the console.log() statement logs true.
// const numOne = 5;
// const numTwo = 5;
// console.log(numOne == numTwo);


//? In the console.log() statement below we use the Not Equal operator to check whether numOne and numTwo have different values. Change the code so that the console.log() statement logs true.
// const numOne = 5;
// const numTwo = 6;
// console.log(numOne != numTwo);


//? In the console.log() statement below we use the Greater Than operator to check whether the value of numOne is greater than the value of numTwo. Change the code so that the console.log() statement logs true.
// const numOne = 6;
// const numTwo = 5;
// console.log(numOne > numTwo);


//? In the console.log() statement below we use the Less Than operator to check whether the value of numOne is less than the value of numTwo. Change the code so that the console.log() statement logs true.
// const numOne = 1;
// const numTwo = 2;
// console.log(numOne < numTwo);


//? In the console.log() statement below we use the Greater Than Or Equal operator to check whether the value of numOne is greater than or equal the value of numTwo. It also checks whether the value of numTwo is greater than or equal the value of numThree. Change the code so that both expressions in the console.log() statement logs true.
// const numOne = 3;
// const numTwo = 2;
// const numThree = 2;
// console.log(numOne >= numTwo, numTwo >= numThree);


//////////////////////////////////////////////////! Task 3: String

//? In this exercise the existing console.log() statement logs the value of the variable text. The variable text has already been declared with an empty string – as indicated by the two single quotes.Fill in the string with some characters and run the code to see if the string is being logged.
// const text = 'hello world';
// console.log('The value of text is: ' + text);



//? Here, we have declared 3 variables textOne, textTwo, and textThree. An empty string is assigned to all of them.Do you see how in each case different symbols are used to create the string? All three of them are valid methods to create a JavaScript string.Fill in all 3 strings with some characters and run the code to see if the values get logged.
// const textOne = 'Hello ';
// const textTwo = "World ";
// const textThree = `JavaScript`;
// console.log(textOne, textTwo, textThree);


//? After we have learnt how to create JavaScript strings, we will now connect 2 strings together. In the code below we use the Addition (+) operator to concatenate textOne and textTwo. The console.log() statement logs the resulting string. Currently, the result would be HelloWorld.Change the code below so that the value of res is Hello World
// const textOne = 'Hello';
// const textTwo = 'World';
// const combined = `${textOne} ${textTwo}`;
// console.log(combined);



//////////////////////////////////////////////////! Task 3: Conditionals

//? The code will assign the variable num a new value 1. But it will only run if the condition is met.Adjust the condition such that the code inside the curly braces will execute and the console.log() statement logs true.
// let num = 0;
// if (1 < 2) {
//    num = 1;
// }
// console.log(num === 1);


//? Time to practice what we've learnt so far. In the code below, the if...statement will assign a new value to the variable text. But only if its condition is met. Currently, the condition is missing.Add any condition that will be satisfied such that the console.log() statement logs true.
// let text = 'hello';
// if (text) {
//    text = text + ' world';
// }
// console.log(text === 'hello world');