const selectButton = document.querySelector('.newRow');
const inputBox = document.querySelector('.inputBox');

selectButton.addEventListener('click', (e) => {
    //e.target.innerText = 'clicked';
    
    let newBx = document.createElement('p');
    newBx.innerText = inputBox.value;
    document.body.appendChild(newBx);
    console.log(inputBox.value)
})