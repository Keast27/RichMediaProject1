export { getInclusiveRandInt, getRandomInt, drawRect};

// Helper method to get a random number
function getInclusiveRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let rng =  Math.floor(Math.random() * (max - min + 1) + min)
    return rng;
}

/// Helper function to get random int
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function drawRect(ctx, x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}