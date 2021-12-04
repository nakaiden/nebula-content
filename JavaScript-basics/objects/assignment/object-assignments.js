// 1.   Create an object for your dream vehicle
const dreamCar = {
    year: '2022',
    make: 'BMW',
    model: 'X-7 M50i',
    color: 'Pearl White',
    engine: 'V-10',
    passengers: 8,    
    
}
  
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
// 2.   Using dot-notation Log to the console 3 properties from the previous object
    console.log(dreamCar.year, dreamCar.make, dreamCar.model);
    
// 3.   Using bracket-notation Log to the console 3 properties from the previous object
    console.log(dreamCar['color'], dreamCar['engine'], dreamCar['passengers']);
   
// 4.   Try and log a property that doesn't already exist - what output do we get?
    console.log(dreamCar.topSpeed) //undefined//
// 5.   Add a new key-value pair to the vehicle. 
dreamCar.topSpeed = '200 mph';
console.log(dreamCar);
// 6.   Using bracket-notation update a property on the vehicle. 
dreamCar.color = 'Nardo Gray';
console.log(dreamCar.color);
// 7.   Using dot-notation update a property on the vehicle. 
dreamCar.topSpeed = '180 mph';
// 8.   Create a method for turning your vehicle on
function vehicleOn(){
    return "Cold Start"
}
dreamCar.start = vehicleOn;
dreamCar.start()
// 9.   Create a method for turning your vehicle off
function vehicleOff(){
    return "Powering Down"
}
dreamCar.shutdown = vehicleOff
dreamCar.shutdown()
//10.   
//      a. Check if your vehicle is on (it should be off)
    console.log (dreamCar)
//      b. Start your vehicle
dreamCar.start()
//      c. Check if your vehicle is on (it should be on)
    console.log (dreamCar)
//      d. Stop your vehicle
dreamCar.shutdown()
//      e. Check if your vehicle is on (it should be on)
console.log (dreamCar)