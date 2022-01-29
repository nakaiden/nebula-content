// .forEach

// 1.   Given an array of numbers, log them to the console for each number. 
const nums = [1,2,3,4,5,6]
nums.forEach(num => console.log(num));

// 2.   Given an array of people, log a greeting to the console for each person.
const people = [
    {name: 'Pamela'}, 
    {name: 'Micheal'},
    {name: 'Angela'}
]
people.forEach(person => console.log(`Hello ${person.name}`));



// 3.   Given an array of mixed values, log whether the value is undefined.
const mixVals = [{name: 'Pamela'}, [1,2,3], 'string', 34, undefined, 67]
mixVals.forEach(val => console.log(val === undefined ? 'It is undefined' : 'It is not undefined'));

// 4.   Given an array of strings, log the vowel count for each string.
const vowels = ['a','e','i','o','u']
const strings = ['Hello World', 'Pizza is good']




// 5.   Given an array of numbers, double them and log them to the console. 
const nums1 = [1,2,3,4,5,6]
nums1.forEach(dbl => console.log(dbl*2));
