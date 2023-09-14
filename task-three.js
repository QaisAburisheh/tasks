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


function secondLargest(array){
    let maxNum=[0]
    let secMax=[0]
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

console.log(secondLargest([10, 40, 30]))

console.log(secondLargest([10, 40, 30, 20, 50]))
console.log(secondLargest([25, 143, 89, 13, 105]))
console.log(secondLargest([54, 23, 11, 17, 10]))


