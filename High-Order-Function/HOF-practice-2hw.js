// 1.   Write a higher order function that manipulates every number in an array 
const changeNums = [5,10,15,20,25];
//      Ex: changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
const doubler = changeNums.map(old => old * 2);
//      Ex: changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
const halves = changeNums.map(old => old * .5)
//      Ex: changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]
const pow = changeNums.map(old => old * old)

// console.log(mapOver([1,2,3,4,5], doubler))
console.log(doubler, halves, pow);

// what it looks like using map
// const mapOver = [1,2,3,4,5].map(doubler)





// 2.   Write a higher order function that calculates some features of a string
const welcome = 'Howdy Partner!'
//      Ex: stringInfo(length, 'Howdy Partner!') => 14
const strngTotal = welcome.reduce((a)=> a +1, 0)
console.log(strngTotal)
//      Ex: stringInfo(vowels, 'Howdy Partner!') => 3
const vowels = ['a','e','i','o','u']

welcome.forEach((welcome)=>{
    const stringArr = welcome.split("")
    let vowelTotal = 0
    stringArr.forEach(ele=>{
        if(vowels.includes(ele)){
            vowelTotal++
        }
    })
    console.log(vowelTotal);
})

//      Ex: stringInfo(capitals, 'Howdy Partner!') => 2
//      Ex: stringInfo(nonLetters, 'Howdy Partner!') => 2

// 3.   Write a higher order function that minimizes a given list of numbers into one number
//      Ex: minimizeNums(add, [2,3,5,8]) => 18
    const grouped = [5,10,15,20,25]
    let total = grouped.reduce((x,curr) => x + curr);

    function loop(func,arr){
        let sum = 0

        for (let i = 0; i < arr.length; i++){
            sum = adder(sum, arr[i]) 
        }

        return sum
    }
    console.log(total);