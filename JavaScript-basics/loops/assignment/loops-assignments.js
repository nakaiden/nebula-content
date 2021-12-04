// 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
//      Each loop it should log to the console 'the current index is _'

for(let i =0; i <=30; i++){
    console.log(`the current index is ${i}`)   
}

// 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
//      Each loop it should log to the console the current index
for(let i =1; i <=10; i+=2){
    console.log(i);
}

// 3.   Create an array with your top 5 celebrity names in it. 
//      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
//      Loop over the array and log each celebrity's full name to the console.
const topCeleb = ["Kylie Jenner", "Kanye West", "Roger Federer", "Cristiano Rolando", "Lionel Messi"];
for(let i = 0; i < topCeleb.length; i++){
    console.log(topCeleb[i])
}

// 4.   Loop over your celebrity list and 
//      If a celebrity's full name has an even number of characters log it to the console
for(let i = 0; i < topCeleb.length; i++){
    if(topCeleb[i].length %2 === 1){
        console.log(topCeleb[i])
    }

}

// 5.   Use the your celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only first names
let firstName =[]
for(let i = 0; i < topCeleb.length; i++){
    firstName.push(topCeleb[i].split(" ")[0]) 
}
console.log(firstName)
    
        

// 6.   Use the your celebrity array for this question
//      Create a for loop which will output two separate arrays, one with only initials, one with only last names
let lastName =[]
let intlName = []
for(let i = 0; i < topCeleb.length; i++){
    lastName.push(topCeleb[i].split(" ")[1]);
    intlName.push(topCeleb[i].split(' ')[1][0]) 
}
console.log(lastName, intlName)

// 7.   Convert your celebrity array to all caps and no spaces:
//      Ex:
//        Input:  ['Martha Stewart', 'David Beckham', etc..] 
//        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]
 let upperName = [] 
for(let i = 0; i < topCeleb.length; i++){
   upperName.push(topCeleb[i].toUpperCase().split(' ').join('-'));    
}
    console.log(upperName)
// 8.   Index your array to find your favorite celebrity. 
//      Save that name to a variable
let favCeleb = topCeleb[1];
console.log(favCeleb);
//      Loop over the array until you find that individual
for(let i = 0; i < topCeleb.length; i++){
    console.log(i)
    if(topCeleb[i] === favCeleb){
        console.log(topCeleb[i]);
        break;
    }
    console.log('Not Fav')
}
//      Log that name to the console and break out of the loop

//BONUS:
//      Write a loop that iterates from zero until 30
//      If an index is divisible by 2 log 'fizz'
//      If an index is divisible by 3 log 'buzz'
//      If an index is divisible by both 2 & 3, log 'fizz-buzz'
//      Otherwise print the index to the console

