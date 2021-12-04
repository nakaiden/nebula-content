const Me = {
    name: 'Carl Davis',
    age: 41,
    AstroSign: 'Sagitarius',
};
const Wife ={
    name: 'Kara Davis',
    age: 38,
    Astrosign: 'Aquarius',
};
const Daughter ={
    name: 'Kaianne Davis',
    age: 3,
    AstroSign: 'Leo'
};
const Son ={
    name: 'Kairi Davis',
    age: 10,
    AstroSign: 'Cancer',
};
const Dog ={
    name: 'Roofus',
    age: 70,
    AstroSign: 'Gemini',
};
console.log(Wife);
console.log(Daughter);
console.log(Dog);


// 1.   Create an athlete for a celebrity and save it to a variable
const athlete = {
    name:'Christiano Renaldo',
    sport: 'Soccer',
    sponsorship: 'Nike',
    netWorth: 180000000000,

};
// 2.   Using dot-notation add 3 key-value pairs to the celebrity
athlete.speed = 25;
athlete.age = 36;
athlete.height = "6'2";

// 3.   Using bracket-notation add 3 key-value pairs to the celebrity
athlete['birthplace'] = 'Portugal';
athlete['current team'] = 'Manchester United';
athlete['hair color'] = 'black';

// 4.   Write a function that allows us to add or update 3 properties
function footwork (){
  athlete.footwork = 'nice'; 
  athlete.speed = 23;
  athlete['current team'] = 'France';
  //console.log(athlete);
}
footwork()
// 5.   Using a loop - log all the celebrities properties to the console
for(let key in athlete){
    console.log(`${key}`);
}