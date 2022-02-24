/*

Write a class that creates shoes

The shoe should have a size, color, type, and age.

Initialize 3 shoes with your class & log a sentence to the console: ex:

`My flipflops are yellow, size 9, and 6 years old.`

*/















/*

Given the following class that can create shapes, write an extension which will calculate the Surface Area and Volume of a given shape.

Note, one class extension will likely not be able to handle all shapes, you'll have to extend shape for each unique shape

Log to the console a sentnece about your shape:

`Given a cylander of 2 height and 2 width. It will have a volume of 6.28 and a surface area of 18.84.`

*/



// class Shape {

//     constructor(height, diameter){

//         this.height = height;

//         this.diameter = diameter;

//     }

// }




// Extend 4 classes off of shapes

// Rectangle(A=bh), Triangle(A=1/2bh), Circle(A=πr2) and Trapezoid(A=1/2h(b1+b2))

// Have methods to find the areas of the differnt shapes

class Shape {
    constructor(height, diameter){
        this.height = height;
        this.diameter = diameter;
    }
}

class Rectangle extends Shape {
    constructor(width, height){
        super(height);
        this.width = width;
    }
    getArea(){
        return this.width * this.height
    }
}

class Triangle extends Shape{
    constructor(width, height){
        super(height);
        this.width = width;
    }
    getArea(){
        return this.width * this.height / 2
    }
}
const triangle = new Triangle(5,6)
console.log(triangle.getArea(), 'should be', 15)

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    getArea(){
        //return this.radius * this.radius * Map.PI
        return this.radius **2 * Math.PI
    }
}
const circle = new Circle(5)
console.log(circle.getArea(), 'should be', 15.70796326794897 )

class Trapezoid extends Shape{
    constructor(height, width, width2){
        super(height);
        this.width = width;
        this.width2 = width2
    }
    getArea(){
        return ((this.height * .5) * (this.width + this.width2))
    }
}
const trapezoid = new Trapezoid(3,6,7)
console.log(trapezoid.getArea(), 'should be', 19.5)

