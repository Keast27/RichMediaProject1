export { bunny, brownBun, whiteBun, spottedBun };
class bunny {
    constructor(x = 0, y = 0, color = "brown", genes = { x1: 1, y1: 1 }, hunger = 100, health = 100, age = 0, sex = "f", mated = false) {
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

        let parentGenes = { x2: 0, y2: 0 };
    }

    createBun(bunny) {
        //Average litter is seven uhhh let's go with four for now
        for (let i = 4; i < 4; i++) {
            let bun;
            bun = new bunny(x, y, this.setBaby());
            console.log(bun);
        }
    }

    setBaby() {

        let momGenes = this.genes.x1 + this.genes.x2;
        let dadGenes = parentGenes.x2 + parentGenes.y2;
        let babyGenes;

        let mix = momGenes + dadGenes;
        //Dom + Hybrid (2 +vs 1)
        if (mix == 3) {
            let chance = Math.floor(Math.random() * 3) + 1;
            if (chance == 1) babyGenes = { x1: 1, x2: 1 };
            if (chance == 2) babyGenes = { x1: 1, x2: 0 };
        }
        //Rec vs Hybrid (0 +vs 1)
        if (mix == 1) {
            let chance = Math.floor(Math.random() * 2) + 1;
            if (chance == 1) babyGenes = { x1: 0, x2: 0 };
            if (chance == 2) babyGenes = { x1: 1, x2: 0 };
        }

        if (mix == 2) {
            //Dom + Rec
            if (Math.abs(momGenes - dadGenes) = 2) {
                let chance = Math.floor(Math.random() * 2) + 1;
                if (chance == 1) babyGenes = { x1: 0, x2: 0 };
                if (chance == 2) babyGenes = { x1: 1, x2: 0 };
            }
            //Hybrid + Hybrid
            if (Math.abs(momGenes - dadGenes) = 0) {
                let chance = Math.floor(Math.random() * 4) + 1;
                if(chance % 2 == 0) babyGenes = { x1: 1, x2: 0 };
                if(chance == 1) babyGenes = { x1: 1, x2: 1 };
                if(chance == 3) babyGenes = { x1: 0, x2: 0 };
            }
        }
        //Rec + Rec
        if (mix == 0) {
            babyGenes = { x1: 0, x2: 0 }
        }
        //Dom + Dom
        if (mix == 4) {
            babyGenes = { x1: 1, x2: 1 }
        }
        return babyGenes;
    }

    getGenes() {

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

        //on average, rabbits live to 9 years
        if (age == 9 || health == 0) {

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