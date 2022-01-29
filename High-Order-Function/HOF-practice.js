/* Array HOF */


//Array.forEach()
// The forEach() method executes a provided function once for each array element.
// This array doesnt return anything it 'does something' for each element
// We often see students confuse this Higher Order Function with .map()
// Think, "Do I need an output array or am I doing something else?"
// If the answer is, "Yes, I need an output array" => .map()
// Otherwise it could be .forEach()

// using HOF .map - transforms one array into a new one

//.filter
// Array.filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Returns a new array, of equal or lesser length.
// Ex: "Given an array of positives and negatives, give me a new array of only positive numbers"

// .reduce - takes an array and returns 1 cumalitive value from it
// Array.reduce()
// The reduce() method executes a callback function on each element of the array, in order, passing in the returned value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

//.find
//Array.find()
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// .sort - sort an array MUTATES THE ORIGINAL ARRAY


// 1.   Write a higher-order function which takes in two numbers and performs a calculation with them
//      Write the callback functions seperately 
//          Ex: calculate(multiply, 2,4) => 8
    function multiplyTwoNumbers(num1,num2){
        let num1 = 8;
        let num2 = 4;
        return num1 * num2;
    }
//          Ex: calculate(subtract, 2,4) => -2
    // function subtractTwoNumbers(num1,num2){
    //     return num1 - num2;
    // }
    
    const calculateThis = (num1, num2, func) => {
        const calculation = func(num1, num2);
        return calculation;
    }
    
    
    const subtract = (a,b) =>{
        return a - b;
    }
//          Ex: calculate(exponent, 2,4) => 16
    const exponentByFour = (num) => {
        let num = 8;
        return num * 4;
    }

// 2.   Write a function that takes in any number of numbers and performs calculations on them
//      Write the callback functions seperately 
//      console.log(arguments) inside of a function to visualize your arguments
//          Ex: calculateAll(multiply, 1,4,1,231,5) => 4620
//          Ex: calculateAll(subtract, 2,4,5,7) => -14
const calculate = (func, nums) => {
    return func(nums)
}

const mult = (arr) => {
    let solution = arr [0];
    for(let i = 1; i < arr.length; i++){
        solution = solution * arr[i]
    }
    return solution
}
console.log(calculate(mult, [1,2,3,4]))



//An array of numbers
// 3.   Write a function that takes in a string and performs some form of manipulation on it
//          Ex: modify(yeller, 'I need a nap') => I NEED A NAP!!!
//          Ex: modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
//          Ex: modify(code, 'There is no cake') => Th-r- -s n- c-k-

// 4.   Write a function that takes in an array filled with different data types and returns each data type
//          Ex: oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['I love coding, 'goosfraba']
//          Ex: oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['Nested Array!']
//          Ex: oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => [10, Infinity]


//.sort
// Array.sort()
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

