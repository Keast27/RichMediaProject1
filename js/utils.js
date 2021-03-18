export { getInclusiveRandInt, getRandomInt};

// Helper method to get a random number
function getInclusiveRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let rng =  Math.floor(Math.random() * (max - min + 1) + min)
    return rng;
}

/// Helper function to get random int
function getRandomInt(min, max) {

    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}