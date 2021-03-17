export { grass };


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
        this.timer += 1;
        
        console.log(this.timer);    

        if(this.timer > 50 && this.state < 5) 
        {
            this.state++;
            this.timer = 25;
        }
    }

    // Check to see what state the grass is in and change the color
    // Accordingly 
    stateCheck()
    {
        if(this.state == 5) this.color = "green";
        if(this.state == 4) this.color = "rgb(82, 204, 82)";
        if(this.state == 3) this.color = "rgb(177, 252, 164)";
        if(this.state == 2) this.color = "rgb(112, 224, 112)";
        if(this.state == 1) this.color = "rgb(204, 227, 166)";
        if(this.state == 0) this.color = "rgb(163, 155, 118)";
    }
}