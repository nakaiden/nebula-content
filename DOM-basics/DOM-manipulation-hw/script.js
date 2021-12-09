const container = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(container);
container.classList.add('styles');

for (let i =0; i < 10; i++){
    const div = document.createElement('div');
    div.className = "cube"
    container.appendChild(div);      
}
const cubes = document.querySelectorAll('.cube')
const colors = ["red","blue","green","yellow","orange","purple","pink"];

cubes.forEach(div => {
    const randomNum = Math.floor(Math.random() * 7);
    div.style.backgroundColor = colors[randomNum];
    div.innerText= colors[randomNum];
    })



    