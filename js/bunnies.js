import { getInclusiveRandInt, getRandomInt } from './utils.js';
export { bunny };


class bunny {
    // Constructor for the bunny
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
        this.parentColor = "blue";
        this.alive = true;
        this.pregTime = 0;
        this.BunBatch = [];
        this.width = 25;
        this.height = 70;
    }

    // Create a new bunny when they are born
    createBun() {
        //Average litter is seven uhhh let's go with four for now
        for (let i = 0; i < 4; i++) {
            let newGenes = this.setBaby();
            let chance = Math.floor(Math.random() * 2) + 1;
            let sex;
            if (chance == 1) sex = "f";
            if (chance == 2) sex = "m"
            let babyBun = new bunny(this.x + 10, this.y, undefined, newGenes[0], newGenes[1], undefined, undefined, 0, sex);
            this.setColor(babyBun);
            this.BunBatch.push(babyBun);
        }
    }

    // Set the color or "breed" of the bunny
    // This is used for main.js
    setColor(baby) {
        let determinet = baby.genes[0] + baby.genes[1];
        if (determinet == 2) {
            baby.color = "white";
        } else if (determinet == 1) {
            baby.color = "gray";
        } else if (determinet == 0) {
            baby.color = "brown";
        }
    }

    // Logic to set up twhich genes the baby will have
    // So we can properly change the breed and print it out
    setBaby() {

        let momGenes = this.genes[0] + this.genes[1];
        let dadGenes = this.parentGenes[0] + this.parentGenes[1];
        let babyGenes = [5, 5];
        let mix = momGenes + dadGenes;

        //Dom + Hybrid (2 +vs 1)
        if (mix == 3) {
            let chance = getInclusiveRandInt(1, 2);
            if (chance == 1) { let newGenes = [1, 1]; return newGenes; }
            if (chance == 2) { let newGenes = [1, 0]; return newGenes; }
        }
        //Rec vs Hybrid (0 +vs 1)
        if (mix == 1) {
            let chance = getInclusiveRandInt(1, 2);
            if (chance == 1) { let newGenes = [0, 0]; return newGenes; }
            if (chance == 2) { let newGenes = [1, 0]; return newGenes; }
        }

        if (mix == 2) {
            //Dom + Rec
            if (Math.abs(momGenes - dadGenes) == 2) {
               
                let newGenes = [1, 0]; return newGenes; 

            }
            //Hybrid + Hybrid
            if (Math.abs(momGenes - dadGenes) == 0) {
                
                let chance =  getInclusiveRandInt(1, 4);
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
    }

    // See if the bunny is colliding with another bunny
    // And if so, breed 
    checkCollison(bun) {
        let width = this.width;
        let height = this.height;
        //get genes
        if ((bun.x < this.x + width && bun.x + width > this.x &&
            bun.y < this.y + height && bun.y + height > this.y)) {
            if (this.sex != bun.sex) {
                if (this.sex == "f") {
                    this.parentGenes = bun.genes;
                    this.parentColor = bun.color;
                    this.mated = true;
                }
            }
        }
    }

    // Find out what grass tile the bunny IS colliding with
    // And return it
    checkCollisonGrass(grass){
        let width = this.width / 2;
        let height = this.height / 2;
        if (grass.state > 0) {
            if ((grass.x < this.x + width && grass.x + width > this.x &&
                grass.y < this.y + height && grass.y + height > this.y)) {
                return true;
            }
        }
    }

    // Give bunnies some health and hunger back from eating the grass
    // Lower the grass' growth state and set timer to 0
    eat(grass) {
        this.hunger += 25;
        if(this.health < 100) this.health += 10;
        grass.state-=1;
        grass.timer = 0;
    }

    // Randomly walk the bunny in two cardinal directions
    // Also make sure the bunny doesn't walk out of bounds 
    walk() {
        let strideX = getRandomInt(1, 20);
        let strideY = getRandomInt(1, 10);
        if (strideX % 2 == 0) strideX *= -1;
        if (strideY % 2 == 0) strideY *= -1;

        this.x += strideX;
        this.y += strideY;

        // Make sure the bunny doesn't walk off the ground
        if (this.x > 740) this.x -= strideX * 2;
        if (this.x < -15) this.x -= strideX * 2;
        if (this.y > 450) this.y -= strideY * 2;
        if (this.y < 350) this.y -= strideY * 2
    }

    // Logic for the bunny each frame, more commments in method because there's a lot
    lifeHandler(grass_tiles) {
        // Lower health and increase age
        this.hunger -= 10;
        this.age += 0.05;

        // Have bunny walk around
        this.walk();

        // If the bunny's hunger is at zero, start losing health
        if (this.hunger <= 0){
            this.hunger = 0; 
            this.health -= 3;
        };

        // Find out if the bunny is hungry
        if(this.hunger <= 50){
            // Go through all grass tiles and see which the bunny is colliding with
            for(let i = 0; i < grass_tiles.length; i++){;
                if(this.checkCollisonGrass(grass_tiles[i])){
                    // Eat the grass tiles and force quit out of the loop
                    this.eat(grass_tiles[i]);
                    i = grass_tiles.length;
                }
            }
        }

        //on average, rabbits live to 9 years
        if (this.age > 9 || this.health <= 0) {
            this.health = 0;
            this.alive = false;
            //If dead remove from draw list
        }

        //Add check for pregnancy time?? idk. Pregnancy time is 4-5 weeks
        if (this.sex == "f" && this.mated) {
            this.pregTime++;

            if (this.pregTime == 50) {
                this.createBun();
                this.mated = false;
                this.pregTime = 0;
            }
        }
    }

    // Helper method to get the mous collision 
    checkMouseCollision(mouseX, mouseY) {
        let width = this.width;
        let height = this.height;
        //Being kind with the collision box
        let buffer = 10;
        //get genes
        if ((this.x - buffer < mouseX && this.x + width + buffer > mouseX &&
            this.y - 25 < mouseY && this.y + height - 20 > mouseY)) {
            return true;

        } else {
            return false;
        }
    }
}

