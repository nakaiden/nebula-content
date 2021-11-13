//1. Write a statement that checks if 2 and 'two' are equal
console.log(2 == "two");
//2. Write a statement that checks if '2' and 2 are loosely equal
console.log('2' == 2);
//3. Write a statement that checks if 14 and '14' are strictly equal
console.log(14 === '14');

//4. Write a statement that checks if 10 is greater than -100
console.log(0 > -100);
//5. Write a statement that checks if 4 is strictly equal to the rounded value of 4.4
let firstNum = Math.round(4.4);
console.log(4 === firstNum);
//6. Write a statement that checks if 10 is greater than or equal to 9.1 rounded up
let scndNum = Math.ceil(9.1);
console.log(10 >= scndNum);
//7. Write a single statement that checks if 10 is greater than 2 and 3 is greater than 4
console.log(10 > 2 && 3 > 4);
  // 7.a Without changing any of the numbers, or their order. How do we make this print true?
  console.log(10 > 2 || 3 > 4);

//8. Pick a number between 1-20 and assign it to a variable
  // This is the number of watermelons you purchased.
  let numOfFruit = 8;
  if(numOfFruit<= 2){
    console.log('Looks like you like watermelon');
}if(numOfFruit < 2 && numOfFruit < 5){
  console.log('Thats a lot of watermelon');
}if(numOfFruit > 5 && numOfFruit < 10){
  console.log('Thats too many watermelon!');
}if(numOfFruit > 10 && numOfFruit < 15){
  console.log('You must be CRAZY for watermelon!');
}if(numOfFruit > 15 && numOfFruit < 20){
  console.log('Did you have a coupon?');
}
  // If your number of watermelons is 1 or 2, console.log 'Looks like you like watermelon'
  // If your number of watermelons is more than 2, console.log 'Thats a lot of watermelon'
  // If your number of watermelons is more than 5, print, 'Thats too many watermelon!'
  // If your number of watermelons is more than 10, print, 'You must be CRAZY for watermelon!'
  // If your number of watermelons is more than 15, print, 'Did you have a coupon?'


//9. Create a variable that represents your current hunger on a level of 1-10
  // Using a ternary, if your hunger is greater than 6 print, 'Time to eat!'
  // Otherwise print. "I'm not hungry"
  let hunger = 8;
  let text = hunger > 6 ? "Time to eat!" : "I'm not hungry";
  console.log(text);


// 10. Think of an Magic-8 Ball
  // Write a switch statement that works the same way. 
  // When you run this file you should
  // Generate a random number
  // And get an out put from your switch statement
  // Ex: 
    // I update a question variable to say "Will I win the lottery?"
    // I run node <FILENAME> 
    // The console prints out:
      // Will I win the lottery? Not Likely. 

      let qstn = "Will I ever own a Tesla?";
      let ansr = Math.ceil(Math.random()*10);

      
      switch(ansr){
        case 1:
          console.log(`${qstn} Yes, Elon has yours on reserve!!!`);
          break;
        case 2:
          console.log(`${qstn} Yes, But are you willing to sell your soul?`);
          break;
        case 3:
          console.log(`${qstn} No, you are more likely to own an electric scooter`);
          break;
        default:
          console.log(`${qstn} Sorry, not gonna happen!!!`);
      }
  // Pseudocode:
    // variable that holds a randomly generated number
    // variable for holding the question
    // switch statement that picks responses based on the random number variable 

// BONUS:
  // On the prior example, try and have the answer print like someone is speaking to you.
  
  // Ex:
    //Input:  Will I win the lottery?
    //Output: Will you win the lottery? Not likely. <- Notice I has been programmatically changed to you

  // Ex2:
    // Input: Will I get a new pet this year?
    // Output: Will you get a pet this year? It is certain. 
    // Try and handle many edge cases - can we put in any question and have it spit out a gramatically correct response?

