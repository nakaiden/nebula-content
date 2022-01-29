// .filter()

const nums = [1,2,3,4,5,6,7,8,9,10]
// 1.   Write a function to filter an array for all the numbers greater than 5
const biggerNums = nums.filter(num => num > 5);
console.log(biggerNums);

// 2.   Write a function to filter an array for all the even numbers
const evenNums = nums.filter(nums => nums % 2 === 0);
console.log(evenNums);

// 3.   Write a function to filter an array for all the non number items
const arr = ['string', 34, {}, 12, "John", [], null, undefined];
const nanArray = arr.filter(ele => typeof ele !== 'number');
const nanArray2 = arr.filter(ele => Number(ele) !== ele);
const nanNum = arr.filter(ele => isNaN(ele))

// 4.   Write a function to filter an array of objects for people over the age of 21 (inclusive)
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]
const older = partyPeople.filter(person => person.age >= 21)
console.log(older)

// 5.   Write a function to filter out all letters from a string 
//      Hint: filter doesn't work on strings..
const mixString = 'saodon1ond1o asACEYHasd5as56d7as7$%^'
const noLets = mixString.split('').filter(char => !'abcdefghijklmnopqrstuvwxyz'.includes(char.toLowerCase())).join('')

console.log(noLets)
