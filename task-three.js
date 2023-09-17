// 1) Given a number, n, return a function which adds n to the number passed to it

function add(a, b) {
  return a + b;
}
console.log(add(10, 20));
console.log(add(10, 20));

// 2) Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
function removeLeadingTrailing(number) {
  return parseFloat(number);
}

console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00402"));
console.log(removeLeadingTrailing("03.1400"));
console.log(removeLeadingTrailing("30"));

// 3)Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(array) {
  let maxNum = [0];
  let secMax = [0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNum) {
      secMax = maxNum;
      maxNum = array[i];
    } else if (array[i] > secMax && array[i] !== maxNum) {
      secMax = array[i];
    }
  }

  return secMax;
}

console.log(secondLargest([10, 40, 30]));

console.log(secondLargest([10, 40, 30, 20, 50]));
console.log(secondLargest([25, 143, 89, 13, 105]));
console.log(secondLargest([54, 23, 11, 17, 10]));

// 4) A rep digit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

function isRepDigit(number) {
  let num = number.toString();
  let bool = false;
  if (number < 0) {
    return false;
  } else if (number === 0) {
    bool = true;
  } else
    for (let i = 0; i < num.length - 1; i++) {
      if (num[i] === num[i + 1]) {
        bool = true;
      }
    }
  return bool;
}
console.log(isRepDigit(66));
console.log(isRepDigit(0));
console.log(isRepDigit(-11));

// 5) Given an input string, reverse the string word by word, the first word will be the last, and so on.

function reverseWords(string) {
  let array = string.split(" ");
  for (let i = 0; i < array.length; i++) {
    return array.reverse().join(" ");
  }
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("hello world!"));
console.log(reverseWords("a good example"));

//  6) Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array.

function sevenBoom(arr) {
  const string = arr.join("");

  if (string.includes("7")) {
    return "Boom!";
  } else {
    return "there is no 7 in the array";
  }
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));

// 7) Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.

function insertWhitespace(inputString) {
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i];

    if (currentChar === currentChar.toUpperCase()) {
      if (i > 0 && inputString[i - 1] === inputString[i - 1].toLowerCase()) {
        result += " ";
      }
    }

    result += currentChar;
  }

  return result;
}

console.log(insertWhitespace("SheWalksToTheBeach"));
console.log(insertWhitespace("MarvinTalksTooMuch"));
console.log(insertWhitespace("TheGreatestUpsetInHistory"));

// 8) Create a function which returns the number of true values there are in an array

function countTrue(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      count += 1;
    }
  }
  return count;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));

// 9) Create a function that moves all capital letters to the front of a word.

function capToFront(s) {
  var sp = s.split("");
  var capital = [];
  var lower = [];
  for (var i = 0; i < sp.length; i++) {
    if (sp[i] == sp[i].toUpperCase()) {
      capital.push(sp[i]);
      sp.splice(i, 1);
    }
    if (sp[i] == sp[i].toLowerCase()) {
      lower.push(sp[i]);
    }
  }
  return capital.join("").concat(lower.join(""));
}

console.log(capToFront("hApPy"));

// 10) Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// 11) Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

function findNaN(array) {
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      return i;
    }
  }
  return -1;
}

console.log(findNaN([1, 2, NaN]));
console.log(findNaN([NaN, 1, 2, 3, 4]));
console.log(findNaN([0, 1, 2, 3, 4]));

// 12) Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

function removeDups(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));

// 13) Write a function that receives the time in 12-hour AM/PM format and returns a string representation of the time in military (24-hour) format.

function convertTime(timeStr) {
  const timeParts = timeStr.match(/(\d+):(\d+):(\d+)([APM]+M)/i);

  if (!timeParts) {
    return "Invalid time format";
  }

  let hour = parseInt(timeParts[1], 10);
  const minute = timeParts[2];
  const second = timeParts[3];
  const period = timeParts[4].toUpperCase();

  if (period === "PM" && hour !== 12) {
    hour += 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }

  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinute = minute.padStart(2, "0");
  const formattedSecond = second.padStart(2, "0");

  return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
}

console.log(convertTime("07:05:45PM"));
console.log(convertTime("12:40:22AM"));
console.log(convertTime("12:45:54PM"));
console.log(convertTime("13:30:15PM"));

// 14) Write a function that removes the last vowel in each word in a sentence.

function removeLastVowel(array) {
  let string = array.split(" ");
  for (i = 0; i < string.length; i++) {
    for (j = string[i].length - 1; j >= 0; j--) {
      if (
        string[i][j].toLowerCase() == "a" ||
        string[i][j].toLowerCase() == "e" ||
        string[i][j].toLowerCase() == "i" ||
        string[i][j].toLowerCase() == "o" ||
        string[i][j].toLowerCase() == "u"
      ) {
        string[i] = string[i].slice(0, j) + string[i].slice(j + 1);
        break;
      }
    }
  }
  return string.join(" ");
}

console.log(
  removeLastVowel("Those who dare to fail miserably can achieve greatly.")
);
console.log(removeLastVowel("Love is a serious mental disease."));

// 15) Create a function that takes in an array of numbers and returns the sum of its cubes.
function sumOfCubes(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i] ** 3;
  }
  return sum;
}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([3, 4, 5]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));
