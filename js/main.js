"use strict";
// #1 - wait for page to load
window.onload = init; 

function init(){
    console.log("init() called");
    // #2 - get pointer to <canvas> element on page
    let canvas = document.querySelector('canvas');
    
    // #3 - get pointer to "drawing context" and drawing API
    let ctx = canvas.getContext('2d');
    
    ctx.fillStyle = "oreo";
    ctx.beginPath();			
    ctx.arc(400, 200, 100, 0, Math.PI, false); 
    ctx.closePath();
     //ctx.fill();
    ctx.stroke();
    /* #4 - start drawing! */
    /**
    // draw filled square
    ctx.fillStyle = "red"; 
    // ctx.fillRect(x,y,width,height);
    ctx.fillRect(20,20,100,100);
    
    
    
    // draw stroked square
    ctx.strokeStyle="#00FFFF"; // any legal CSS color will work for .fillStyle or .strokeStyle
    ctx.lineWidth=10;
    // ctx.strokeRect(x,y,width,height);
    ctx.strokeRect(220,20,120,100);
    
    
    
    
    // fill and stroke circle
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    //  ctx.arc(x,y,radius,startAngle,endAngle, clockwise)
    ctx.arc(220, 70, 50, 2, Math.PI * 2, false); 
    ctx.closePath();
     ctx.fill();
     ctx.stroke();
     
     
    
    // stroke line
    ctx.lineWidth = 20; 
    ctx.strokeStyle = "rgb(55, 11, 200)"; // any legal CSS color will work for .fillStyle or .strokeStyle
    ctx.beginPath(); 
    ctx.moveTo(20, 240);
    ctx.lineTo(520, 180); 
    ctx.closePath(); 
    ctx.stroke();
    
    
    
    // fill text
    ctx.font = "48px Verdana italic"; // the value of .font must be a valid CSS declaration
    ctx.fillText("Wehat Appreciation Class 2",20,300);
    
    
    
    
    // stroke text
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 2; 
    ctx.strokeText("Wehat Appreciation Class 2",20,300);
    **/
    
    
    /**
    // Bonus: A Parallelogram
    ctx.beginPath();
    ctx.moveTo(50, 50); // "pick up" pen and move to top-left corner
    ctx.lineTo(250, 50); // extend path to top-right corner
    ctx.lineTo(200, 150); // extend path to bottom-right corner
    ctx.lineTo(0, 150); // extend path to bottom-left corner
    
    // closing the path will automatically extend the path back to (50,50) where it started
    ctx.closePath();
    
    // we can't yet see the path, so stroke and fill it.
    ctx.fillStyle = "yellow"; 
    ctx.fill();
    ctx.strokeStyle="#red";
    ctx.lineWidth=10; 
    ctx.stroke();
    **/
    ctx.fillStyle = "black"; 
    ctx.fillRect(0,0,50,50);
    ctx.fillStyle = "purple"; 
    ctx.fillRect(300,300,50,50);
    ctx.strokeStyle="#black";
    ctx.lineWidth=1; 
    ctx.strokeRect(300,300,50,50);

    ctx.lineWidth = 5; 
    ctx.strokeStyle = "green";
    ctx.beginPath(); 
    ctx.moveTo(0, 100);
    ctx.lineTo(100, 500); 
    ctx.closePath(); 
    ctx.stroke();
    
    ctx.fillStyle = "black";
    ctx.beginPath();
    //  ctx.arc(x,y,radius,startAngle,endAngle, clockwise)
    ctx.arc(220, 70, 50, 2, Math.PI * 2, false); 
    ctx.closePath();
     ctx.fill();
     
    
     ctx.fillStyle = "yellow";
    ctx.beginPath();			
    ctx.arc(200, 200, 100, 0, Math.PI, false); 
    ctx.closePath();
     ctx.fill();

    
     

}

console.log("In bottom of <script> tag!");
