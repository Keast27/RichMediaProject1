import {bunny, brownBun,whiteBun,spottedBun} from './bunnies.js';
export {init};
// #1 - wait for page to load
let bunbun;
let ctx;
let color = "white";
bunbun = new bunny(200,380,"white",1,1,0,50,1,"male",false);

let bunbuns = [bunbun];

function init(){
    console.log("init() called");
    // #2 - get pointer to <canvas> element on page
    let canvas = document.querySelector('canvas');
    
    // #3 - get pointer to "drawing context" and drawing API
    ctx = canvas.getContext('2d');
    
  
    ctx.fillStyle = "Skyblue"; 
    // ctx.fillRect(x,y,width,height);
    ctx.fillRect(0,0,canvas.width,500);
    
    //Turn grass into tiles?
    ctx.fillStyle = "Green"; 
    // ctx.fillRect(x,y,width,height);
    ctx.fillRect(0,400,750,100);

    // Health of first bunny
    document.querySelector('#health').innerHTML += '<br>' + "Bunny " + bunbuns.length + ": " + bunbuns[0].health;
    
    
    // Add a new bunbun each time spawn button is pressed
    document.querySelector('#spawn').onclick = function()
        {addBunBun(getRandomInt(0,750),getRandomInt(350,500),color,1,1,0,50,1,"male",false)};

    // Change color according to input
    document.querySelector('#bunnyColorChooser').onchange = function (e) {
        for(let i = 0; i < bunbuns.length; i++)
        {
            bunbuns[i].color = e.target.value;
        }   
        color = e.target.value; 
    };

    bunbun.eat();
    console.log("The next folowing lines show what happens to a litter when we cross a dominant trait bunny with a recessive trait one");
    //bunbuns.push(bunbun.createBun());
    update();
}

// Draw all the bunnies in bunbuns to the screen
function update(){
    requestAnimationFrame(update);

    for(let i = 0; i < bunbuns.length; i++){
        bunbuns[i].walk();
        
        console.log(bunbuns[i]);
    }

    clear();
    drawBunbuns();
}

function clear(){

    // Bad code, hopefully should change this later
    let canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    
    // Fill sky in
    ctx.fillStyle = "Skyblue"; 
    ctx.fillRect(0,0,canvas.width,500);
    
    //Turn grass into tiles?
    ctx.fillStyle = "Green"; 
    ctx.fillRect(0,400,750,100);
}

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

// Add a new bunny to bunbuns 
function addBunBun(x,y,color, g1, g2,hunger,health,age,sex,mated)
{
    let bunbunTemp = new bunny(x,y,color,g1, g2,hunger,health,age,sex,mated);

    bunbuns.push(bunbunTemp);
    document.querySelector('#health').innerHTML += '<br>' + "Bunny " + bunbuns.length + ": " + bunbuns[0].health;
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

console.log("In bottom of <script> tag!");
