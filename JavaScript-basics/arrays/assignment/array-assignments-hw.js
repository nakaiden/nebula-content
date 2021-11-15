// 1.   Create an array that contains two of your favorite things to do
const favThings = ['Cooking', 'Spending time with my children']
console.log(favThings);

// 2.   Using an array method, add another thing you like to do to that list
favThings.push('Watching Movies');
console.log(favThings);

// 3.   Reverse the order of the array (remember, if needed use MDN)
favThings.reverse();
console.log(favThings);

// 4.   Using this array: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// 5.   log the length of the array
console.log(days.length);

// 6.   log the 4th element in the array
console.log(days[3]);

// 7.   Remove the first element in the array. Log the new array and the element removed from the array
days.shift();
console.log(days);

// 8.   Put 'Sunday' back at the beginning of the array (.unshift) and log the new array
days.unshift('Sunday');
console.log(days);

// 9.   Remove the last element in the array. Log the new array and log the element removed
days.pop();
console.log(days);

//10.   Add 'Saturday' back to the end of the array and log the new array
days.push("Saturday");
console.log(days);

//11.   Replace 'Thursday' with 'Friday Junior'
days[4]='Friday Junior'
console.log(days);

//12.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
const favDay = days[6];

console.log('My favorite day of the week is ' + favDay);
//console.log(`My favorite day of the week is ${favDay}`)

//13.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
let phoneLaptop = phone.concat(laptop);
console.log(phoneLaptop);

//14.   Write a line of code to test if something is an array or not
const chkAray = [20, 40 ,60, 80, 100];
const chkAray2 = "Nope";
console.log(Array.isArray(chkAray));
console.log(Array.isArray(chkAray2));
