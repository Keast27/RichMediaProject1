import { bunny } from './bunnies.js';
import { grass } from './grass.js';
import { identifierUpdate, identifyBun } from './bunIdentifier.js';
import { getRandomInt } from './utils.js';
export { init };
// #1 - wait for page to load

// Field variables
let ctx;
let ctx2;
let canvases

let bunbun = new bunny(200, 380, "white", 1, 1, 100, 100, 1, "f", false);
let color = "white";
let newBunColor = "white";
let bunbuns = [bunbun];
let grass_tiles = [];
let daytime = "noon";
let timer = 0;
let fps = 200;
let bunPopCntrl = "rand";
function init() {
    canvases = document.getElementsByTagName('canvas');


    // #1-4 draw in scene
    clear();

    // #5 Change color according to input
    document.querySelector('#bunnyColorChooser').onchange = function (e) {
        newBunColor = e.target.value;
    };

    // # 6 Kill bunnies if choosen to 
    document.querySelector('#hunt').onclick = function () {
        var types = document.getElementsByName('hitlist');

        for (let i = 0; i < types.length; i++) {
            if (types[i].checked) bunPopCntrl = types[i].value;
        }
        huntBuns();
    };

    // #7 Change time of day
    document.querySelector('#dayTimeChooser').onchange = function (e) {
            daytime = e.target.value;
    };

    // #8 Add a new bunbun each time spawn button is pressed
    document.querySelector('#spawn').onclick = function () {
        let chance = Math.floor(Math.random() * 2) + 1;
        let sex;
        if (chance == 1) sex = "f";
        if (chance == 2) sex = "m"
        addBunBun(getRandomInt(50, 700), getRandomInt(350, 450), newBunColor, 1, 1, 100, 100, 1, sex, false)
    };

    // #9 Change frames per second
    document.querySelector('#framesChooser').onchange = function (e) {
        fps = e.target.value;
    };

    // #10 Get grass tiles set up
    grassSetUp();
    
    // #11 Enter Update loop
    update();
}

// To run every frame
function update() {
    setTimeout(update, fps);
    let canvas2 = canvases[1];
    ctx2 = canvas2.getContext('2d');
    identifierUpdate(ctx2, canvas2);
    //Trigger manager function
    for (let i = 0; i < bunbuns.length; i++) {
        bunbuns[i].lifeHandler(grass_tiles);
        if (!bunbuns[i].alive) killBun(bunbuns[i]);
    }
    canvases[0].onclick = canvasClicked;

    checkRomanticLife();

    //Run grass update helper function
    grassUpdate();

    // Change time of day automatically
    daytimeUpdate();

    // Clear the screen and draw in the bunnies
    clear();
    drawBunbuns();

}

/// Clear the screen to original state
function clear() {

    // Bad code, hopefully should change this later
    let canvas = canvases[0];
    ctx = canvas.getContext('2d');

    // Draw the noon background
    if (daytime == "noon") {
        ctx.fillStyle = "Skyblue";
        ctx.fillRect(0, 0, canvas.width, 500);

        ctx.fillStyle = "Yellow";
        ctx.arc

        ctx.fillStyle = "white"
        ctx.fillRect(50, 70, 100, 40);
        ctx.fillRect(110, 40, 40, 40);
        ctx.fillRect(85, 55, 30, 20);

        ctx.fillRect(550, 140, 100, 40);
        ctx.fillRect(580, 110, 40, 40);
        ctx.fillRect(565, 125, 65, 20);
    }
    // Draw in the sunset background
    else if (daytime == "sunset") {
        ctx.fillStyle = "#cd9acb";
        ctx.fillRect(0, 0, canvas.width, 100);
        ctx.fillStyle = "#d4ac94";
        ctx.fillRect(0, 100, canvas.width, 100);
        ctx.fillStyle = "#fa9621";
        ctx.fillRect(0, 200, canvas.width, 100);
    }
    // Draw in the night time background
    else if (daytime == "night") {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, 500);

        ctx.fillStyle = "white"
        ctx.fillRect(50, 70, 10, 40);
        ctx.fillRect(35, 85, 40, 10);
        ctx.fillRect(150, 170, 10, 40);
        ctx.fillRect(135, 185, 40, 10);
        ctx.fillRect(320, 40, 10, 40);
        ctx.fillRect(305, 55, 40, 10);
        ctx.fillRect(550, 90, 10, 40);
        ctx.fillRect(535, 105, 40, 10);
        ctx.fillRect(600, 40, 50, 50);
        ctx.fillStyle = "gray";
        ctx.fillRect(630, 50, 15, 15);
    }

    // Hillside number 2
    ctx.fillStyle = "rgb(177, 252, 164)";
    ctx.fillRect(200, 270, 550, 150);
    ctx.beginPath();
    ctx.strokeStyle = "rgb(177, 252, 164)";
    ctx.ellipse(500, 300, 50, 250, Math.PI / 2, 0, 2 * Math.PI);
    ctx.stroke();

    if(daytime=="sunset"){
        ctx.fillStyle = "#c0e889";
        ctx.fillRect(200, 270, 550, 150);
        ctx.beginPath();
        ctx.strokeStyle = "#c0e889";
        ctx.ellipse(500, 300, 50, 250, Math.PI / 2, 0, 2 * Math.PI);
        ctx.stroke();
    }
    else if(daytime=="night"){
        ctx.fillStyle = "#6a9863";
        ctx.fillRect(200, 270, 550, 150);
        ctx.beginPath();
        ctx.strokeStyle = "#6a9863";
        ctx.ellipse(500, 300, 50, 250, Math.PI / 2, 0, 2 * Math.PI);
        ctx.stroke();
    }

    // Hillside number 1
    ctx.fillStyle = "rgb(112, 224, 112)";
    ctx.fillRect(0, 335, 750, 70);
    ctx.fillStyle = "rgb(112, 224, 112)";
    ctx.fillRect(0, 300, 300, 100);
    ctx.beginPath();
    ctx.moveTo(0, 350);
    ctx.bezierCurveTo(300, 150, 300, 500, 770, 300);
    ctx.lineWidth = 50;
    ctx.strokeStyle = "rgb(112, 224, 112)";
    ctx.stroke();

    if (daytime == "sunset") {
        ctx.fillStyle = "#9aca58";
        ctx.fillRect(0, 335, 750, 70);
        ctx.fillStyle = "#9aca58";
        ctx.fillRect(0, 300, 300, 100);
        ctx.beginPath();
        ctx.moveTo(0, 350);
        ctx.bezierCurveTo(300, 150, 300, 500, 770, 300);
        ctx.lineWidth = 50;
        ctx.strokeStyle = "#9aca58";
        ctx.stroke();
    }
    else if(daytime=="night"){
        ctx.fillStyle = "#438743";
        ctx.fillRect(0, 335, 750, 70);
        ctx.fillStyle = "#438743";
        ctx.fillRect(0, 300, 300, 100);
        ctx.beginPath();
        ctx.moveTo(0, 350);
        ctx.bezierCurveTo(300, 150, 300, 500, 770, 300);
        ctx.lineWidth = 50;
        ctx.strokeStyle = "#438743";
        ctx.stroke();
    }

    // Draw in all the grass tiles w/proper color 
    for (let i = 0; i < grass_tiles.length; i++) {
        ctx.fillStyle = grass_tiles[i].color;
        ctx.fillRect(grass_tiles[i].x, grass_tiles[i].y, 20, 20);
    }
    

    // Draw the grass borders 
    for (let i = 0; i < 5; i++) {
        ctx.fillStyle = "Black";
        ctx.fillRect(0, 400 + i * 20, 750, 2);
    }

    for (let i = 0; i < 38; i++) {
        ctx.fillStyle = "Black";
        ctx.fillRect(i * 20, 400, 3, 300);
    }
}

// Draw in all the bunnies
function drawBunbuns() {
    for (let i = 0; i < bunbuns.length; i++) {
        ctx.fillStyle = bunbuns[i].color;
        ctx.fillRect(bunbuns[i].x, bunbuns[i].y, 25, 50);
        if (bunbuns[i].mated) {
            ctx.fillStyle = "pink";
            ctx.fillRect(bunbuns[i].x + 4, bunbuns[i].y + 18, 6, 4);
            ctx.fillRect(bunbuns[i].x + 16, bunbuns[i].y + 18, 6, 4);
        }
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
function addBunBun(x, y, color, g1, g2, hunger, health, age, sex, mated) {
    let bunbunTemp = new bunny(x, y, color, g1, g2, hunger, health, age, sex, mated);
    geneBasedOnColor(bunbunTemp);
    bunbuns.push(bunbunTemp);

    // Add the health of the bunnies
    document.querySelector('#health').innerHTML += '<br>' + "Bunny " + bunbuns.length + ": " + bunbuns[0].health;
}

// Color the bunny in based on their gene
function geneBasedOnColor(bun) {

    if (bun.color == "white") {
        bun.genes = [1, 1];
    } else if (bun.color == "gray") {
        bun.genes = [1, 0];
    } else if (bun.color == "brown") {
        bun.genes = [0, 0];
    }
}


// Go through all the bunnies, and if they are old enough and haven't mated
// See if any are colliding and have them mate
function checkRomanticLife() {
    for (let i = 0; i < bunbuns.length; i++) {
        if (!bunbuns[i].mated && bunbuns[i].age > 1){
            for (let j = 0; j < bunbuns.length; j++) {
                if(!bunbuns[j].mated && bunbuns[j].age > 1){
                    bunbuns[i].checkCollison(bunbuns[j]);
                }
            }
        }
        //If the bunny is carrying babies, deliver them
        if (bunbuns[i].BunBatch.length != 0) (getBabies(bunbuns[i]));
    }
}

//Pops and returns babies, adds them to world list.
function getBabies(bun) {
    for (let i = 0; i < bun.BunBatch.length; i++) {
        bunbuns.push(bun.BunBatch.shift());
    }
}

// Remove the dead bunnies from the array of bunnies
function killBun(deadBun) {
    let aliveBuns = [];
    bunbuns.forEach(bunbun => {
        if (bunbun != deadBun) aliveBuns.push(bunbun);
    });
    bunbuns = aliveBuns;
}

// Run the grass logic each update
function grassUpdate() {
    for (let i = 0; i < grass_tiles.length; i++) {
        grass_tiles[i].regrow();
        grass_tiles[i].stateCheck();
    }
}

// Used to set up grass tiles at start of the game
function grassSetUp() {
    for (let i = 0; i < 38; i++) {
        for (let j = 0; j < 5; j++) {
            let tempGrass = new grass(i * 20, 400 + j * 20, 20, 20);
            grass_tiles.push(tempGrass);
        }
    }
}

// Used to change the time of the day automatically
function daytimeUpdate(){
    timer += 1;
    
    if(timer > 150 && daytime == "noon") daytime = "sunset";
    else if(timer > 75 && daytime == "sunset") daytime = "night";
    else if(timer > 150 && daytime == "night") daytime = "noon";

    if(timer > 150) timer = 0;
}


/// Helper funciton to see if canvas was clicked on 
function canvasClicked(e) {
    //Mouse collider
    let rect = e.target.getBoundingClientRect();
    let mouseX = e.clientX - rect.x;
    let mouseY = e.clientY - rect.y;

    if (bunbuns.length != 0) {
        for (let i = 0; i < bunbuns.length; i++) {
            if (bunbuns[i].checkMouseCollision(mouseX, mouseY)) {
                identifyBun(bunbuns[i]);
            }
        }
    }
}

// Kill some bunnies
function huntBuns() {
    for (let i = 0; i < 7; i++) {
        if(bunPopCntrl == "rand"){
            bunbuns[i].alive = false;
            killBun(bunbuns[i]);
        }
        else if(bunbuns[i].color == bunPopCntrl){
            bunbuns[i].alive = false;
            killBun(bunbuns[i]);
        }
    }
}
