console.log('Hello World');
// Q1:  Attach this document to the index.html

// Q2:  Grab the second element that has the text Hello
const getEle = document.getElementById('first');
console.log(getEle);
//      console.log these elements

// Q3:  Grab and console.log the text in the h1 that says 'Good Afternoon'
// There's only one H! and it doest have a unique identifier
const h1s = document.querySelectorAll('h1');
console.log(h1s[2].innerText);

for (let i = 0; i < h1s.length; i++){
    if(h1s[i].innerText === 'Good Afternoon'){
        console.log(h1s[i].innerText);
    }
}

// Q4:  Grab the h1 with the text that says "Catch me if you can" - console.log it.
const cat = document.getElementsByClassName("catch-me");
const cat1 = document.querySelector(".catch-me");

//console.log(cat[0])
//console.log(cat1);

// Q5:  Grab the span element and change the text to "Got ya"
const span = document.querySelector('span');
//console.log(span.innerText);//I bet you can't get me
span.innerText = 'Got ya';
