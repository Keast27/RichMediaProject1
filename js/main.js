import {bunny, brownBun,whiteBun,spottedBun} from './bunnies.js';
export {init};
// #1 - wait for page to load
let bunbun;
let ctx;
bunbun = new bunny(200,380,"white",0,0,50,1,"male",false);

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
    document.querySelector('#health').innerHTML += '<br>' + "Bunny " + bunbuns.length + ": " + bunbuns[0].health + '<br></br>';
    
    
    // Add a new bunbun each time spawn button is pressed
    document.querySelector('#spawn').onclick = function()
        {addBunBun(getRandomInt(0,750),getRandomInt(350,500),"white",0,0,50,1,"male",false)};

    drawBunbuns();
    bunbun.eat();

}

// Draw all the bunnies in bunbuns to the screen
function drawBunbuns()
{
    for(let i = 0; i < bunbuns.length; i++)
    {
        ctx.fillStyle = bunbuns[i].color;
        ctx.fillRect(bunbuns[i].x, bunbuns[i].y, 25, 50);
        ctx.fillStyle = "black";
        ctx.fillRect(bunbuns[i].x + 7, bunbuns[i].y + 7, 3, 10);
        ctx.fillRect(bunbuns[i].x + 17, bunbuns[i].y + 7, 3, 10);
        ctx.fillStyle = "white";
        ctx.fillRect(bunbuns[i].x + 3, bunbuns[i].y - 15, 7, 20);
        ctx.fillRect(bunbuns[i].x + 13, bunbuns[i].y - 15, 7, 20);
        ctx.fillStyle = "pink";
        ctx.fillRect(bunbuns[i].x + 5, bunbuns[i].y - 10, 4, 10);
        ctx.fillRect(bunbuns[i].x + 15, bunbuns[i].y - 10, 4, 10);

    }
}

// Add a new bunny to bunbuns 
function addBunBun(x,y,color,genes,hunger,health,age,sex,mated)
{
    let bunbunTemp = new bunny(x,y,color,genes,hunger,health,age,sex,mated);

    bunbuns.push(bunbunTemp);
    document.querySelector('#health').innerHTML += "Bunny " + bunbuns.length + ": " + health + '<br></br>';
    drawBunbuns();
}

// Helper function to get random int grabbed from MDN
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

console.log("In bottom of <script> tag!");
