export {identifierUpdate, identifyBun};

let currentBun = null;
let health = 100;

function identifierUpdate(ctx, canvas){
    ctx.fillStyle = "tan";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
   
    
    bunPortrait(ctx);
}

function identifyBun(bun) {
   currentBun = bun;
}

function bunPortrait(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(10, 10, 100, 100);
    ctx.fillStyle = "skyblue";
    ctx.fillRect(15, 15, 90, 90);

    if(currentBun != null){
        drawBun(ctx);
    } else {
        ctx.fillStyle = "black"
        ctx.fillText("Click on a lil bun ", 130, 50);
        ctx.fillText("to view its status!", 130, 80);
    }
}

function drawBun(ctx) {
    let bun = currentBun;
    //if(bun.color == "white"){
        ctx.fillStyle = bun.color;
        ctx.fillRect(28, 40, 60, 65);
        ctx.fillRect(35, 40, 15, -25);
        ctx.fillRect(60, 40, 15, -25);
        ctx.fillStyle = "pink";
        ctx.fillRect(40, 40, 7, -20);
        ctx.fillRect(65, 40, 7, -20);

        if(bun.mated){
            ctx.fillRect(36, 63, 15, 15);
            ctx.fillRect(69, 63, 15, 15);
        }

        ctx.fillStyle = "black";
        ctx.fillRect(44, 70, 7, -20);
        ctx.fillRect(69, 70, 7, -20);
        drawStats(ctx);
    //}
}

function drawStats(ctx) {
    ctx.fillStyle = "black"
    ctx.fillText("Age: " + Math.round(currentBun.age), 130, 50);
    ctx.fillText("Sex: " + getSex(currentBun.sex), 130, 80);
    ctx.fillText("Genes: " + getGenes(currentBun.genes), 130, 110);
    ctx.fillText("Health: " + currentBun.health, 130, 140);
    ctx.fillText("Color: " + currentBun.color, 130, 170);
}

function getSex(sex) {
    if(sex == "f"){
        return "Female";
    }
    if(sex == "m"){
        return "Male"
    }
}

function getGenes(genes){
    let determinant = genes[0] + genes[1];
    if(determinant == 2){
        return "Dominant";
    }
    if(determinant == 1){
        return "Hybrid";
    }
    if(determinant == 0){
        return "Recessive";
    }
}