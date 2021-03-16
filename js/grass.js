export { grass };

let timer;
let state;

class grass {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        //Location
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        timer = 0;
        state = 5;
    }

    // Increase the state of the grass as time passes on if bunnies
    // Have left it alone
    regrow()
    {
        timer += 1;
        
        if(timer > 20 && state < 5) state++;
    }
}