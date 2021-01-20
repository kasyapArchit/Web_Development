var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

var newNumbers = numbers.map(function (x){
  return x * 2;
});
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

newNumbers = numbers.filter(function (num) {
  return num > 10;
});
console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

newNumbers = numbers.reduce(function (accumulator, num) {
  return accumulator + num;
});
console.log(newNumbers);

//Find - find the first item that matches from an array.

var number = numbers.find(function (num) {
  return num > 10;
});
console.log(number);

//FindIndex - find the index of the first item that matches.

number = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(number+1);

// Making a list of meaning truncated to 100 characters

// import emojis from "./emojipedia";


// var meaning = emojis.map(function (emoji) {
//   return emoji.meaning.substring(0, 100);
// });

// console.log(meaning);