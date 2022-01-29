//.find()

// 1.   Write a HOF to find the first number greater than 10 in an array
const nums = [1,2,3,15, 4, 80, 34];
const byTen = nums.find((element) => element > 10); //envoked name 'element'
console.log(byTen);

// 2.   Write a HOF to find the first string in an array
const arr = [1,2,3,"pizza", "tacos","pie", {}, [], null, 123];
const firstStr = arr.find((str) => typeof str === " ");
console.log(firstStr);

// 3.   Write a HOF to find the first instance of null in an array
const firstNull = arr.find(nul => nul === null);
console.log(firstNull); 