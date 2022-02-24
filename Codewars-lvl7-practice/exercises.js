// --------- EXERCISES --------- //

// write a function that takes an input string and returns a string with the first and last character of the input

// write a function that takes in two numbers and multiplies them and returns it as an array

// function doubleNumbers(arr){
//     let outputArray = [];
//     for(let i = 0; i < arr.length; i++){
//         outputArray.push(arr[i] * 2);
//     }
//     return outputArray;
//}
function getDigitsFromProduct(num1,num2){
    return(num1 * num2).toString().split('')

}
    console.log(getDigitsFromProduct(3, 5));


// write a function that takes in a sentance and replaces all the spaces with dashes

// write a function that takes a number and reverses it

// write a function that takes an incoming string and converts it to an array of capital letters