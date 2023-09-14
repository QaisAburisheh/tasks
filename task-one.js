// 1) Write a function that takes an integer minutes and converts it to seconds

function turnToSeconds(num) {
  return num * 60;
}
console.log(turnToSeconds(10));

// 2) Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addOne(num) {
  return num + 1;
}

console.log(addOne(1));

// 3) Create a function that takes an array containing only numbers and return the first element.

function array(num) {
  return num[0];
}
console.log(array([1, 2, 3, 4]));

// 3) Write a function that takes the base and height of a triangle and return its area

function triangleArea(base, height) {
  return 0.5 * base * height;
}
console.log(triangleArea(4, 5));

//  5) Create a function called evenNumberEvenIndex that accept an array of nums

function evenNumberEvenIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 2) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
let nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
console.log(evenNumberEvenIndex(nums));

// 6) Create a function called evenIndexOddLength that accept an array of strings and return a new array that have the string with odd length in even index

function evenIndexOddLength(strings) {
  let oddString = [];
  for (let i = 0; i < strings.length; i += 2) {
    let arr = strings[i];
    if (arr.length % 2 !== 0) {
      oddString.push(arr);
    }
  }
  return oddString;
}
let strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(strings));

// 7) Create a function called powerElementIndex that accept an array of number and return a new array that have the element power by the index of it self

function powerElementIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] ** i);
  }
  return newArray;
}

let num = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(num));

// 8) Write a function called multiplication2 that takes two parameters and return the multiplication of them

function multiplication2(a, b) {
  let multi = 0;
  for (let i = 0; i < b; i++) {
    multi += a;
  }
  return multi;
}
console.log(multiplication2(4, 5));
console.log(multiplication2(2, 8));
console.log(multiplication2(7, 6));

// 9) Create a function called muti2 that take two parameter and will return the multiplication from the first number to the second number

function multi2(a, b) {
  let result = 1;

  for (let i = a; i <= b; i++) {
    result *= i;
  }

  return result;
}

console.log(multi2(4, 5));
console.log(multi2(3, 6));

//  10)Create a function called aveArray that accept an array and return the average of the numbers inside this array

function averageNumber(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  return average / array.length;
}
console.log(averageNumber([1, 2, 3, 8, 9, 77]));
