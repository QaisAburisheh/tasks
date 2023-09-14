// 1) Create a function that takes two dates and returns the number of days between the first and second date.

function twoDates(date1, date2) {
  var time = date2.getTime() - date1.getTime();
  var days = time / (1000 * 3600 * 24);
  return days;
}
console.log(twoDates(new Date("june 14 2019"), new Date("june 20, 2019")));
console.log(
  twoDates(new Date("December 29, 2018"), new Date("january 1, 2019"))
);
console.log(twoDates(new Date("01/02/2010"), new Date("06/06/2012")));

// 2) Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

function numInStr(array) {
  let numArray = [];
  for (const num of array) {
    if (/\d/.test(num)) {
      numArray.push(num);
    }
  }
  return numArray;
}
console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));

// 3) Given a string, reverse all the words which have odd length. The even length words are not changed.

function reverseOdd(string) {
  let array = string.split(",");
  for (let i = 0; i < array.length; i++) {
    if (array[i].length % 2 !== 0) {
      array[i] = array[i].split("").reverse().join("");
    }
  }
  return array.join("");
}
console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));

// 4) A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

function isPandigital(array) {
  let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0; i < nums.length; i++) {
    if (!array.includes(nums[i])) {
      return false;
    }
  }

  return true;
}
console.log(isPandigital("98140723568910"));
console.log(isPandigital("90864523148909"));
console.log(isPandigital("112233445566778899"));
