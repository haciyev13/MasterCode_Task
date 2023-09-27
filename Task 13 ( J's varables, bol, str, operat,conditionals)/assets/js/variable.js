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

//?sum adlı funksiya yazın. Funksiya ədədlərdən ibarət bir arrayi parametr kimi qəbul etməli və arrayın bütün elementlərinin cəmini qaytarmalıdır:

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));

//? arithmeticMean adlı funksiya yazın. Funksiyanız ədədlərdən ibarət bir arrayi parametr kimi qəbul etməli və arrayin elementlərinin ədədi ortasını qaytarmalıdır:

function arithmeticMean(arr) {
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 = sum1 + arr[i] / arr.length;
  }
  return sum1;
}
console.log(arithmeticMean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
