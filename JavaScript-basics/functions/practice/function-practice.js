//function multiplyBy10(num){
   // return num*10;
//}
//console.log(multiplyBy10(2));
//console.log(multiplyBy10(3));
//console.log(multiplyBy10(-13));

//function SayGoodbye(person){
//return `Take care ${person} I'll see you when you return`;
//}
//console.log(SayGoodbye('Mike'))

//function evenNumbers(arr){
  //  let evenNums = [];
    //for(let i = 0; i < arr.length; i++){
      //  if(arr[i] % 2 === 0){
        //    evenNums.push(arr[i]);
        //}
    //}
    //return evenNums;
//}
//console.log(evenNumbers([3,10,7,45,92,4,16]));
//console.log(evenNumbers[]))

function findSmallestInt(args) {
    
    let smallInt = args[0];
    
    for(let i =0; i < args.length; i++){
    
    if(args[i] <= smallInt){
    	smallInt = args[i];
    	}
    
    } 
      
    console.log(smallInt); 
    findSmallestInt([34, 15, 88, 2]);
    findSmallestInt([34, -345, -1, 100]);
}
