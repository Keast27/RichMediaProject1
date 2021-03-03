import {bunny, brownBun,whiteBun,spottedBun} from './bunnies.js';
export {init};
// #1 - wait for page to load
let bunbun;
bunbun = new bunny();
function init(){
    console.log("init() called");
    // #2 - get pointer to <canvas> element on page
    let canvas = document.querySelector('canvas');
    
    // #3 - get pointer to "drawing context" and drawing API
    let ctx = canvas.getContext('2d');
    
  
    ctx.fillStyle = "Skyblue"; 
    // ctx.fillRect(x,y,width,height);
    ctx.fillRect(0,0,canvas.width,500);
    
    //Turn grass into tiles?
    ctx.fillStyle = "Green"; 
    // ctx.fillRect(x,y,width,height);
    ctx.fillRect(0,400,750,100);
    
   bunbun.eat();

}



console.log("In bottom of <script> tag!");
