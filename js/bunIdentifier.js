export { identifierUpdate, identifyBun };

let currentBun = null;

//Update function
function identifierUpdate(ctx, canvas) {
    ctx.fillStyle = "tan";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";


    bunPortrait(ctx);
}

//Sets the bunny for the chart
function identifyBun(bun) {
    currentBun = bun;
}

//Makes the picture based on bunny's stats
function bunPortrait(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(10, 10, 100, 100);
    ctx.fillStyle = "skyblue";
    ctx.fillRect(15, 15, 90, 90);

    if (currentBun != null) {
        drawBun(ctx);
        drawStats(ctx);
    } else {
        ctx.fillStyle = "black"
        ctx.fillText("Click on a lil bun ", 130, 50);
        ctx.fillText("to view its status!", 130, 80);
    }
}


//Draws the bunny based on stats
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

    if (bun.mated) {
        ctx.fillRect(36, 63, 15, 15);
        ctx.fillRect(69, 63, 15, 15);
    }

    ctx.fillStyle = "black";
    ctx.fillRect(44, 70, 7, -20);
    ctx.fillRect(69, 70, 7, -20);

    if (!bun.alive) {
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.fillStyle = bun.color;
        ctx.moveTo(10, 10);
        ctx.lineTo(110, 110);
        ctx.moveTo(10, 110);
        ctx.lineTo(110, 10);
        ctx.lineWidth = 10;
        ctx.stroke();
    }
}

//Fills out form for bunny
function drawStats(ctx) {
    //capitalize color
    let color = currentBun.color.charAt(0).toUpperCase() + currentBun.color.slice(1)

    ctx.fillStyle = "black";
    ctx.fillText("Age: " + Math.round(currentBun.age), 130, 50);
    ctx.fillText("Sex: " + getSex(currentBun.sex), 130, 80);
    ctx.fillText("Genes: " + getGenes(currentBun.genes), 130, 110);
    ctx.fillText("Health: " + currentBun.health, 130, 140);
    ctx.fillText("Hunger: " + currentBun.hunger, 130, 170);
    ctx.fillText("Color: " + color, 130, 220);
    if (currentBun.alive) {
        if (currentBun.mated) {
            ctx.fillText("This bunny is a mother!", 50, 250);
            ctx.fillText("It got friendly with", 50, 280);
            ctx.fillText("a " + currentBun.parentColor + " bunny!!", 50, 310);
            ctx.fillText("How sweet <3", 50, 340);
        }
    }else{
        ctx.fillStyle = "red"
        ctx.fillText("This bun is dead bro :(", 50, 250);
    }
}

function getSex(sex) {
    if (sex == "f") {
        return "Female";
    }
    if (sex == "m") {
        return "Male"
    }
}

function getGenes(genes) {
    let determinant = genes[0] + genes[1];
    if (determinant == 2) {
        return "Dominant";
    }
    if (determinant == 1) {
        return "Hybrid";
    }
    if (determinant == 0) {
        return "Recessive";
    }
}