export {init};
// #1 - wait for page to load
window.onload = init; 

function init(){
    console.log("init() called");
    // #2 - get pointer to <canvas> element on page
    let canvas = document.querySelector('canvas');
    
    // #3 - get pointer to "drawing context" and drawing API
    let ctx = canvas.getContext('2d');
    
  
    ctx.fillStyle = "Skyblue"; 
    // ctx.fillRect(x,y,width,height);
    ctx.fillRect(0,0,750,500);
    
    ctx.fillStyle = "Green"; 
    // ctx.fillRect(x,y,width,height);
    ctx.fillRect(0,400,750,100);
    
   

}

console.log("In bottom of <script> tag!");
