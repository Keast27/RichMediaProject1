export { grass };

let timer;
let state;
let color;

class grass {
    constructor(x = 0, y = 0, width = 0, height = 0){
        //Location
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.timer = 0;
        this.state = 5;
        this.color = "green";
    }

    // Increase the state of the grass as time passes on if bunnies
    // Have left it alone
    regrow()
    {
        timer += 1;
        
        if(timer > 20 && state < 5) state++;
    }

    // Check to see what state the grass is in and change the color
    // Accordingly 
    stateCheck()
    {
        if(state == 5) color = "green";
        if(state == 4) color = "rgb(82, 204, 82)";
        if(state == 3) color = "rgb(177, 252, 164)";
        if(state == 2) color = "rgb(112, 224, 112)";
        if(state == 1) color = "rgb(204, 227, 166)";
        if(state == 0) color = "rgb(163, 155, 118)";
    }
}