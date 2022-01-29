// .sort()

// 1.   Write a HOF to sort an array of numbers from largest to smallest
const nums = [1,25,6,3,88,45,0]
const lrg2Sml = nums.sort((a,b) => a > b ? -1 : 1);
console.log(lrg2Sml);

// 2.   Write a HOF to sort an array of numbers from smallest to largest
nums.sort((a,b) => a > b ? 1 : -1);
console.log(nums)

// 3.   Write a HOF to sort peoples names by their length
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]
const sep = partyPeople.sort((n1,n2) => n1.length > n2.length ? 1 : -1);
console.log(partyPeople);

//right way
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}];
// const partyNames = partyPeople.map(person => person.name);
const ordererd = partyPeople.sort((person1, person2) => person1.name.length > person2.name.length ? 1 : -1);
console.log(ordererd)

// 4.   Write an HOF to sort an array of objects of people by their age youngest to oldest

const orderByAge = partyPeople.sort((person1,person2) => person1.age > person2.age ? 1 : -1);
console.log(orderByAge);

// 5.   Write an HOF to sort an array of strings by the last letter of the string
const strings = ['sam', 'john', 'daniel', 'vanessa']
const lastLetter = strings.sort((s1,s2) => s1.slice(-1) > s2.slice(-1) ? 1 : -1 ); 
console.log(lastLetter);