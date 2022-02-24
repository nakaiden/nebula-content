const russianDoll = {
    doll: "Great Grandmother",
    child: {
        doll: "Grandmother",
        child: {
            doll: "Mother",
            child: {
                doll: "Daughter",
                child: false
            }
        }
    }
}

const countDolls = (doll) => {
    if(!doll.child){
        return 1;
    }
    return 1 + countDolls(doll.child);
}

countDolls(russianDoll); // Returns 4.

1 + countDolls('grandmother')
1 + 1 + countDolls('mother')
1 + 1 + 1 + countDolls('Daughter');
1 + 1 + 1 + 1

 /*
 reverse(ant) = tna
    / \
   t  reverse(an)
        /   \
       n     reverse(a)
                / \
                a  reverse('')
                      \
                      ''
*/

function reverse(str){
    //BASE CASE SUPER IMPORTANT!!
    if(str === '') return '';
    //otherwise we are going to return the last letter of of string plus the reverse function called on every letter execpt for the last
    let recursiveOutput = reverse(str.slice(0, -1));
    let lastLetter = str.slice(-1)
    return lastLetter + recursiveOutput;
}

console.log(reverse('ant'));
console.log(reverse('race car'));


/* pali(racecar)
       /   \
      r=r  palic(aceca)
              /  \
            a=a  pali(cec)
                  /   \
                c=c   pali(e)
                        / \
                           true
*/
/* pali(race car)
       /   \
      r=r  palic(ace ca)
              /  \
            a=a  pali(ce c)
                  /   \
                c=c   pali(e )
                        /  \
                      e=' '   
*/

function isPalindrome(str){
    
    // is the word short enough that it is a palindrone
    if(str.length < 2) return true;
    // does the first letter match the last letter
    return str.slice(0, 1) === str.slice(-1) && isPalindrome(str.slice(1,-1))
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('Racecar'));
console.log(isPalindrome('abc123'));


// Time To Practice!
// Another problem that is classically solved with recursion, is writing a function that takes a number as an input and outputs it's factorial.

// As a reminder, a factorial denoted by n! is the product of an integer and all the integers below it. So 4! denotes the factorial of 4, which is 24. You would come to this solution by doing 4 * 3 * 2 * 1 = 24.

// Using our new found understanding of recursion define a recursive function that will return the factorial of an input number.

function total(n){
    if(n === 1) return 1;
    let productOutput = n * total(n - 1);
    return n * productOutput;
}
console.log(total(4))
// Reminder / FYI: A lot of recursive code solutions can be solved with a loop / while loop. Writing a recursive solution is usually easier to read and is seen as an "elegant" approach. However, in JavaScript, recursion tends to be more costly on your machine than just using loops in part because recursion uses the entire the Call Stack instead of just one frame on the Call Stack like a loop.
let count = 0;
function fib(n){
    count++
    //base case
    if(n <= 2) return 1;
    //recursive case
    return fib(n + 1) + fib(n - 2);
}
console.log(fib(10), count);