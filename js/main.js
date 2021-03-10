import {bunny, brownBun,whiteBun,spottedBun} from './bunnies.js';
export {init};
// #1 - wait for page to load

// Field variables
let ctx;
let bunbun =  new bunny(200,380,"white",1,1,0,50,1,"male",false);
let color = "white";
let bunbuns = [bunbun];



function init(){
    console.log("init() called");
   
    // #1-4 draw in scene
    clear();

    // #5 Health of first bunny
    document.querySelector('#health').innerHTML += '<br>' + "Bunny " + bunbuns.length + ": " + bunbuns[0].health;
    
    // #6 Change color according to input
    document.querySelector('#bunnyColorChooser').onchange = function (e) {
        for(let i = 0; i < bunbuns.length; i++)
        {
            bunbuns[i].color = e.target.value;
        }   
        color = e.target.value; 
    };
    
    // #7 Add a new bunbun each time spawn button is pressed
    document.querySelector('#spawn').onclick = function()
        {addBunBun(getRandomInt(50,700),getRandomInt(350,450),color,1,1,0,50,1,"male",false)};

    console.log("The next folowing lines show what happens to a litter when we cross a dominant trait bunny with a recessive trait one");
    // #8 Call update
    update();
}

// To run every frame
function update(){
    requestAnimationFrame(update);

    // Have bunnies eat and walk
    for(let i = 0; i < bunbuns.length; i++){
        bunbuns[i].walk();
        bunbuns[i].eat();
    }

    // Clear the screen and draw in the bunnies
    clear();
    drawBunbuns();
}

/// Clear the screen to original state
function clear(){

    // Bad code, hopefully should change this later
    let canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    
    // Fill sky in
    ctx.fillStyle = "Skyblue"; 
    ctx.fillRect(0,0,canvas.width,500);
    
    //Turn grass into tiles?
    ctx.fillStyle = "rgb(177, 252, 164)"; 
    ctx.fillRect(200,270,550,150);
    ctx.beginPath();
    ctx.strokeStyle = "rgb(177, 252, 164)"; 
    ctx.ellipse(500, 300, 50, 250, Math.PI / 2, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillStyle = "rgb(112, 224, 112)"; 
    ctx.fillRect(0,335,750,70);
    ctx.fillStyle = "rgb(112, 224, 112)"; 
    ctx.fillRect(0,300,300,100);
    ctx.beginPath();
    ctx.moveTo(0,350);
    ctx.bezierCurveTo(300,150,300,500,750,300);
    ctx.lineWidth = 50;
    ctx.strokeStyle = "rgb(112, 224, 112)";
    ctx.stroke();

    
    
    ctx.fillStyle = "Green"; 
    ctx.fillRect(0,400,750,100);
}

// Draw in all the bunnies
function drawBunbuns()
{
    for(let i = 0; i < bunbuns.length; i++)
    {
        ctx.fillStyle = bunbuns[i].color;
        ctx.fillRect(bunbuns[i].x, bunbuns[i].y, 25, 50);
        ctx.fillStyle = "black";
        ctx.fillRect(bunbuns[i].x + 7, bunbuns[i].y + 7, 3, 10);
        ctx.fillRect(bunbuns[i].x + 17, bunbuns[i].y + 7, 3, 10);
        ctx.fillStyle = bunbuns[i].color;
        ctx.fillRect(bunbuns[i].x + 3, bunbuns[i].y - 15, 7, 20);
        ctx.fillRect(bunbuns[i].x + 13, bunbuns[i].y - 15, 7, 20);
        ctx.fillStyle = "pink";
        ctx.fillRect(bunbuns[i].x + 5, bunbuns[i].y - 10, 4, 10);
        ctx.fillRect(bunbuns[i].x + 15, bunbuns[i].y - 10, 4, 10);
    }
}

/// Add a new bunny to bunbuns 
function addBunBun(x,y,color, g1, g2,hunger,health,age,sex,mated)
{
    let bunbunTemp = new bunny(x,y,color,g1, g2,hunger,health,age,sex,mated);
    bunbuns.push(bunbunTemp);
    
    // Add the health of the bunnies
    document.querySelector('#health').innerHTML += '<br>' + "Bunny " + bunbuns.length + ": " + bunbuns[0].health;
}

/// Helper function to get random int
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


console.log("In bottom of <script> tag!");
