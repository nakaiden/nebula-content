// ​These are the most commonly written complexities

// - O(1) -> Constant time: flat and constant no matter how much data you pass into the input
// - O(log n) -> Briefly jumps up but then flattens out.
// - O(n) -> Goes up and right in a straight line.
// - O(n^2) -> The larger the input the more it spkes up.

// O(1) is constant
// No matter how big the input, the computer will essentially do the same amount of work.
// Most mathematical operations are O(1) -> +, -, * etc.
// Assignment, return and accessing a value in an array or object are also O(1).

function constantTimeExample(num){
    if(num <= 10){
        return num;
    } else {
        let num2 = num / .5 - 1;
        return num * num2;
    }
}

function constantTimeExample2(str, obj){
    // Looking to see if a key exits in an obj - returns a boolean value
    return obj[str] ? true : false;
}

// O(n) is linear
// The computer resources required grow proportionally to the size of the input
// An algorithm running at linear time will process each input at least once. Loops are a common example

function linearTimeExample(arr){
    // Getting sum of array of numbers
    let output = 0;
    for(let i = 0; i < arr.length; i++){
        output += arr[i];
    }
    return output;
}
// Another linear time example
let searchValue = 10;
const isValueThere = Object.values({someKey: 9, anotherKey: 10}).some(cur => cur === searchValue);

// O(n^2) is quadratic
// A functions run time is proportional to the square of the input size.
// For example, a function that has a loop running at O(n) becomes O(n^2) when that loops becomes nested within a loop that is also running at O(n)

function quadraticTimeExample(arr){
    // Save every pair sequence possible of elements in an array
    // Sample input -> [5, 3, 1]
    // Expected output -> [[5, 3], [5, 1], [3, 5], [3, 1], [1, 5], [1, 3]]
    const holdPairs = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i !== j) holdPairs.push([arr[i], arr[j]]);
        }
    }
    return holdPairs;
}

// O(log n) is logarithmic
// An algorithm that cuts the input size in half at each step is logarithmic.

function logarithmicTimeExample(num) {
    // Sample input -> 8
    // Sample output -> [1, 2, 4, 8]
    const logStepsToN = [];
    for (let i = 1; i < num; i*=2) {
        logStepsToN.push(i);
    }
    return logStepsToN;
}

// Examples
// The answers are below each block of code
// Before looking at the answer try and decide on what its O(n) is
// Example one
function exampleFunction(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] / 2 < i){
            total -= arr[i] / 2;
        }
    }
    
    return total;
}

// The prior function loops over an array and adds each value to the total
// It then loops over the array and removes half of each value from the total The first loop is 0(n), and so is the second therefore this is 0(2n)
// Which factors down to O(n), the 2 is neglegible
// n === number of elements (aka) size of input


//arr is a sorted array
function binarySearch(arr, key){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let middle = Math.floor((start + end) / 2);
        if(arr[middle] === key){
            return key + ' is at index ' + middle;
        }else if(arr[middle] < key){
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

