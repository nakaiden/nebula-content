// .map()
// 1.   Using .map() create a new array that doubles all the numbers in a given array
const newArr = oldArr.map(cur => cur * 2);

// 2.   Using .map() create a new array that halves all numbers in a given array
const newArr = oldArr.map(cur => cur /2);

// 3.   Using .map() create a new array that finds the power of all the numbers in a given array
const newArr = oldArr.map(cur => cur * cur);

// 4.   Using .map() create a new array of all capital strings from an array of lower case strings
const letters = ['a','b','d','q']
const caps = letters.map(letter => letter.toUpperCase());
console.log(caps)

// 5.   Using .map() create a new array of greeting sentences from an array of given people
//      Expected output: ['Hello Pamela', 'Hello Michael', 'Hello Angela']
const people = [
    {name: 'Pamela'}, 
    {name: 'Micheal'},
    {name: 'Angela'}
]
const greet = people.map(person => `Hello ${person.name}`)
console.log(greet)
//const newArr = oldArr.map(cur => cur === people.name ? `Hello ${people.name}` : 0);





// // .map()
// // 1.   Using .map() create a new array that doubles all the numbers in a given array
// const newArr = [1,2,3,4,5];
// const double = newArr.map(num => (num*2));
// console.log(double);

// // 2.   Using .map() create a new array that halves all numbers in a given array
// const newArr2 = newArr.map(cur => cur/2);
// console.log(newArr2)

// // 3.   Using .map() create a new array that finds the power of all the numbers in a given array
// const pow = newArr.map(c => c*c)
// console.log(pow)

// // 4.   Using .map() create a new array of all capital strings from an array of lower case strings
// const letters = ['a', 'b', 'd', 'q'];
// const caps = letters.map(letter => letter.toUpperCase())
// console.log(caps)

// // 5.   Using .map() create a new array of greeting sentences from an array of given people
// //      Expected output: ['Hello Pamela', 'Hello Michael', 'Hello Angela']
// const people = [
//     {profession: 'Secratary', name: 'Pamela'}, 
//     {profession: 'Manager', name: 'Micheal'},
//     {profession: 'Accountant', name: 'Angela'}
// ]

// const greet = people.map(person => `Hello ${person.name} who is a ${person.profession}!`)

// console.log(greet)