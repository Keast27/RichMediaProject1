export { bunny, brownBun, whiteBun, spottedBun };
class bunny {
    constructor(x = 0, y = 0, color = "brown", g1 = 1, g2 = 1, hunger = 100, health = 100, age = 0, sex = "f", mated = false) {
        //Location
        this.x = x;
        this.y = y;

        //Traits
        this.color = color;
        let g = [g1, g2];
        this.genes = g;
        this.hunger = hunger;
        this.health = health;
        this.age = age;
        this.sex = sex;
        this.mated = mated;
        let pG = [1, 0];
        this.parentGenes = pG;
        this.alive = true;
    }

    createBun() {
        console.log("bun!!");
        //Average litter is seven uhhh let's go with four for now
        for (let i = 0; i < 4; i++) {
            let bun;
            let newGenes = this.setBaby();
            bun = new bunny(this.x + 10, this.y, undefined, newGenes[0], newGenes[1]);

            console.log("Baby Genes:" + newGenes);

        }
    }

    setBaby() {

        let momGenes = this.genes[1] + this.genes[1];
        let dadGenes = this.parentGenes[1] + this.parentGenes[1];
        let babyGenes = [5, 5];
        // babyGenes.x1 = 10;
        let mix = momGenes + dadGenes;
    
        //Dom + Hybrid (2 +vs 1)
        if (mix == 3) {
            let chance = Math.floor(Math.random() * 3) + 1;
            if (chance == 1) { let newGenes = [1, 1]; return newGenes; }
            if (chance == 2) { let newGenes = [1, 0]; return newGenes; }
        }
        //Rec vs Hybrid (0 +vs 1)
        if (mix == 1) {
            let chance = Math.floor(Math.random() * 2) + 1;
            if (chance == 1) { let newGenes = [0, 0]; return newGenes; }
            if (chance == 2) { let newGenes = [1, 0]; return newGenes; }
        }

        if (mix == 2) {
            //Dom + Rec
            if (Math.abs(momGenes - dadGenes) == 2) {
                babyGenes.x1 = 10;
                let chance = Math.floor(Math.random() * 2) + 1;
                if (chance == 1) { let newGenes = [0, 0]; return newGenes; }
                if (chance == 2) { let newGenes = [1, 0]; return newGenes; }

            }
            //Hybrid + Hybrid
            if (Math.abs(momGenes - dadGenes) = 0) {
                babyGenes.x1 = 11;
                let chance = Math.floor(Math.random() * 4) + 1;
                if (chance % 2 == 0) { let newGenes = [1, 0]; return newGenes; }
                if (chance == 1) { let newGenes = [1, 1]; return newGenes; }
                if (chance == 3) { let newGenes = [0, 0]; return newGenes; }
            }
        }
        //Rec + Rec
        if (mix == 0) {
            let newGenes = [0, 0]; return newGenes;
        }
        //Dom + Dom
        if (mix == 4) {
            let newGenes = [1, 1]; return newGenes;
        }
        console.log(babyGenes);
        return babyGenes;
    }

    checkCollison(bun) {
        width = 7;
        height = 20;
        //get genes
        if((bun.x < this.x + width && bun.x + width > this.x && 
            bun.y < this.y + height && bun.y + height > this.y)){
            if(this.sex != bun.sex){
                if(this.sex == "f"){
                    this.parentGenes = bun.genes;
                    this.mated = true;
                }
            }
        }

    }

    eat() {
        //Look for if food is available, eat
        console.log("Nom");
    }

    life() {
        //check to see if bunny is allowed to live :knife:
        hunger--;
        age++;

        if (hunger < 70) {
            this.eat();
        } 

        if(hunger <= 0) life--;

        //on average, rabbits live to 9 years
        if (age == 9 || health == 0) {
            this.alive = false;
            //If dead remove from draw list
        }

        //Add check for pregnancy time?? idk. Pregnancy time is 4-5 weeks
        if (sex == "f" && mated) {
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