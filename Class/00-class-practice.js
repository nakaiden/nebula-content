/*

Write a class that creates animals

The animals should make a noise

The class should log what the animal eats

The class should log where the animal lives

Initialize 3 animals with your class & log a sentence to the console, ex:

`Dogs live in peoples houses, they bark and are carnivorous.`

*/

class Animal{
    constructor(animal, noise, eats, lives){
        this.animal = animal
        this.noise = noise
        this.eats = eats
        this.lives = lives
    }
    animalSound(){
        console.log(`this animal makes this noise ${this.noise}`)
    }
}

class Shoe{
    constructor(type, size, color, age){
        this.type = type
        this.size = size
        this.color = color
        this.age = age
        console.log(this.reference())
    }
    
    reference(){
        return `My ${this.type} are ${this.color}, ${this.size} and ${this.age} years old.` 
    }

}

const shoe1 = new Shoe('sneaker','blue','11','2');
const shoe2 = new Shoe('sandal','tan','7','1');
const shoe3 = new Shoe('boot','black','9','10');