class Animal {
    constructor(feed:string, animalType:string) {
    console.log(feed ,":", animalType);
    
    }
}
class Cat extends Animal {
    constructor(feed:string, catType:string){
        super(feed, catType);
    }
}
class Dog extends Animal {
    constructor(feed:string, dogType:string){
        super(feed, dogType);
    }
}

let cat = new Cat("Grass", "Persian");