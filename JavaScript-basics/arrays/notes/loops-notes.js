const arrayOfNums = [5, 3, 2, 1, 0, 9, 10, 30, 55];
for(let i =0; i < arrayOfNums.length; i++){
    console.log(arrayOfNums[i])
}
for(let i =0; i < arrayOfNums.length; i++){
    let currentNum = arrayOfNums[i];
    if(currentNum % 2 === 0){
        console.log(currentNum);
        break;
    }
    
}
