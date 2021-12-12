const createid = document.querySelector('.createId');
createid.addEventListener('click', () => {
    const first = document.querySelector('.firstName').value;
    const last = document.querySelector('.lastName').value;
    const city = document.querySelector('.city').value;
    const state = document.querySelector('.state').value;
    const profession = document.querySelector('.profession').value;

    const id = document.createElement('div');

    const fNameLine = document.createElement('p');
    const lNameLine = document.createElement('p');
    const cityLine = document.createElement('p');
    const stateLine = document.createElement('p');
    const profLine = document.createElement('p');

    id.className = "idCard";

    fNameLine.innerText = first;
    lNameLine.innerText = last;
    cityLine.innerText = city;
    stateLine.innerText = state;
    profLine.innerText = profession;

    id.appendChild(fNameLine);
    id.appendChild(lNameLine); 
    id.appendChild(cityLine);
    id.appendChild(stateLine); 
    id.appendChild(profLine); 

    document.body.appendChild(id)

})

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
 

















