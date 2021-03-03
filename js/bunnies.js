export {bunny, brownBun,whiteBun,spottedBun};
class bunny {
    constructor(x = 0, y = 0, color = "brown", genes = { x1: 1, y1: 0, x2: 1, y2: 0}, hunger = 100, health = 100, age = 0, sex = "f") {
        this.x = x;
        this.y = y;
        this.color = color;
        this.genes = genes;
        this.hunger = hunger;
        this.health = health;
        this.age = age;
        this.sex = sex;
        }
        createBun(bunny){

        }
        
        eat(){
        //If bunny is hungry and food is available, eat
        console.log("Nom");
        }
        
        life(){
        //check to see if bunny is allowed to live :knife:

        }
       
    
}



class brownBun extends bunny {

}

class whiteBun extends bunny {
    
}

class spottedBun extends bunny {
    
}