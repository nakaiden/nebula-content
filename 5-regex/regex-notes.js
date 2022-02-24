let str = `Lorem ipsum dolor sit amet. Er ER consectetur adipiscing elit, sed do eiusmod tempor incididunt exercitation ut labore et dolore /g magna aliqua. Uter / enim ad minim * veniamer.
er`
console.log(str.match(/^.r|.../gmi));

let blurb = `Space Jam: A New Legacy (also known as Space Jam 2) is a 2021 American live-action/animated sports comedy film produced by Warner Animation Group and distributed by Warner Bros. Pictures. The film is directed by Malcolm D. Lee from a screenplay by Juel Taylor, Tony Rettenmaier, Keenan Coogler, Terence Nance, Jesse Gordon and Celeste Ballard.[6] It serves as a standalone sequel to Space Jam (1996) and is the first theatrically released film to feature the Looney Tunes characters since Looney Tunes: Back in Action (2003). The film stars basketball player LeBron James as a fictional version of himself; Don Cheadle, Khris Davis, Sonequa Martin-Green, and Cedric Joe star in live-action roles, while Jeff Bergman, Eric Bauza, and Zendaya headline the Looney Tunes voice cast. The film follows James enlisting the Looney Tunes' aid to win a basketball game against avatars led by a rogue artificial intelligence in a Warner Bros.-themed virtual multiverse after the AI abducts James' young son, Dom. Bronny James`

console.log(blurb.match(/l?e?bron/gi))


function validatePassword(input){
    if(input.length < 8) return;
    if(!input.includes('abcdefhijk'))return;
    if(!input.includes('0123456789'))return;
    return input.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
}

console.log(/test/);

function test(str){
    let letter = 'a'
    return str.match(/letter/g) // this doesnt work as expected and will return an object indicating if 'letter' exists in the string 
}

function test(str){
    let letter = 'a'
    let regex = new RegExp(letter, 'g')
    return str.match(regex) // this does work because its place in dynamically
}



// 1.   Write a function that tests if a string contains the string of '123' within it

function testFuction1(input){
    return !!input.match(/123/);
}

// console.log(testFuction1('Hello World'));
// console.log(testFuction1('a123456789'));

// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false


function differentLetters(input){
    console.log(input);
    return !!input.match(/a.*?c/)
}

// console.log(differentLetters('abc'), true);
// console.log(differentLetters('aTc'), true);
// console.log(differentLetters('a113412341234c'), true);
// console.log(differentLetters('ac'), true);
// console.log(differentLetters('abd'), false);
// console.log(differentLetters('ca'), false);

// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'

function substringCounter(input, substring){
    // return input.match(new RegExp(substring, 'g'))?.length || 0;
    let match = input.match(new RegExp(substring, 'g'));
    return match ? match.length : 0;
    // if(match){
    //     return match.length;
    // }
    // return 0;
}

// console.log(substringCounter('this is a test', 't'), 3);
// console.log(substringCounter('this is a test', 'q'), 0);

// 4.   Write a function that checks if all characters in a string are lowercase letters

function isLowerCase(input){ //'Hello World'
    return !input.match(/[A-Z]/g);
    // let output = input.match(/[a-z 0-9!@#\$]/g).join('');
    console.log(input, output);
    // return input.match(/[a-z ]/g).join('');
    return input === output;
    return input === output ? true : false;
    if(input === output){
        return true;
    } else {
        return false;
    }
}

// console.log(isLowerCase('Hello world'), false);
// console.log(isLowerCase('hello world'), true);
// console.log(isLowerCase('hello world2'), true);
// console.log(isLowerCase('hello world!'), true);
// 5.   Write a function that checks if a string has an uppercase letter

function containsUpperCase(input){
    return !!input.match(/[A-Z]/);
}

// console.log(containsUpperCase('the world is blue', false));
// console.log(containsUpperCase('the world is BLuE', true));
// console.log(containsUpperCase('the world is 131', false));
// console.log(containsUpperCase('the world is !', false));

// 6.   Write a function that checks if a string contains a dash or underscore 

function containsDash(input){
    return !!input.match(/-|_/)
}

// console.log(containsDash('hello world'), false);
// console.log(containsDash('hello-world'), true);
// console.log(containsDash('hellowor_ld'), true);
// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end

function containsDotCom(input){
    return !!input.match(/\.com$/);
}

console.log(containsDotCom('google.com'), true);
console.log(containsDotCom('.comgoogle.org'), false);
console.log(containsDotCom('google.com.uk'), false);


// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning


// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not


// 10.   Write a function that utlizes regex to replicate the functionality of '  string  '.trim()

