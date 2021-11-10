let hi = "hello";
let bye = "goodbye";
let concatenatestrng = 'hello' + 'goodbye'
console.log(concatenatestrng)
//console.log(hi + bye)
//I was able to execute the string with concatenation & type coercion

let heyFrnd = "Hello Friend";
console.log(heyFrnd.substr(6))
//At first I had '(6),(-1)' after substr and it gave me 'Friend -1'

let vrb1 = "My";
let fav = "Favorite";
let vrb2 = "to";
let vrb3 = "is";
let ftbl = "Football";
let noun1 = "and";
let food = "pizza";
const tempLat = `${vrb1} ${fav} thing ${vrb2} do on Sunday ${vrb3} ${vrb2} watch ${ftbl} ${noun1} eat ${food}! `
console.log(tempLat);
//kept receiving a not defined error because I had the word my in front of templat

const fullNm = "Frankie Carl Davis Jr";
console.log(fullNm[0]+fullNm[8]+fullNm[13]);

let greet = "Hello World";
console.log(greet[5]);

let codnTme = "Coding-Time!"
console.log(codnTme.indexOf("-"));

let drkeVrs = 'What a Time to be Alive!';
console.log(drkeVrs.slice(-1));
//I was able to find the answer two different ways but not
//quite sure which way would be best
//"console.log(drkeVrs.indexOf('!'));"
//"console.log(drkeVrs[23]);"
let drkeVrs2 = 'She used to call me on my cellphone';
console.log(drkeVrs2.slice(0, 3));

let sntnc = 'This-is-a-sentence';
console.log(sntnc.split("-"));

let one = 1;
let two = 2;
one += 1;
two *= 5;
console.log(one + two);
//bonus
let frstName = 'Elon';
let scndName = 'Musk:';
console.log(frstName,scndName,(frstName[0]+scndName[0]));
//I cheated on the bonus because I couldn't figure out to input a ":"