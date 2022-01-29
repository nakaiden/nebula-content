// .reduce()

// 1.   Write a HOF to reduce an array of numbers to all the numbers added up
const nums = [1,2,3,4,5]
const final1 = (nums.reduce((acc, curr) => acc + curr));
console.log(final1)

// 2.   Write a HOF to reduce all numbers in an array to all numbers multiplied together
const final2 = (nums.reduce((acc, curr) => acc * curr));
console.log(final2)


// 3.   Write a HOF to reduce all numbers in an array to the largest number 
const largNum = nums.reduce((biggestNum, current) => biggestNum > current ? biggestNum : current)
console.log(largNum)


// 4.   Write a HOF to find the oldest person in a group
