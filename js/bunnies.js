export {bunny, brownBun,whiteBun,spottedBun};
class bunny {
    constructor(x = 0, y = 0, color = "brown", genes = { x1: 1, y1: 1}, hunger = 100, health = 100, age = 0, sex = "f", mated = false) {
        //Location
        this.x = x;
        this.y = y;
        
        //Traits
        this.color = color;
        this.genes = genes;
        this.hunger = hunger;
        this.health = health;
        this.age = age;
        this.sex = sex;
        this.mated = mated;
        }

        createBun(bunny){
           //Average litter is seven uhhh let's go with four for now
            for(let i = 4; i < 4; i++){

            }
        }
        
        eat(){
        //Look for if food is available, eat
        console.log("Nom");
        }
        
        life(){
            //check to see if bunny is allowed to live :knife:
            hunger--;
            age++;

            if(hunger < 70){
                this.eat();
            }
      
            //on average, rabbits live to 9 years
            if(age == 9 || health == 0){

            }

            //Add check for pregnancy time?? idk. Pregnancy time is 4-5 weeks
            if(sex == "f" && mated){
                this.createBun();
            }
        }
}



class brownBun extends bunny {

}

class whiteBun extends bunny {
    
}

class spottedBun extends bunny {
    
}