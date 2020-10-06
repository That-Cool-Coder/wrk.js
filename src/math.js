wrk._180DIVPI = 180 / wrk.PI; // speeds up degrees -> radians and vice versa

wrk.round = function(num, decimalPlaces=0) {
    var numToRound = num * 10**decimalPlaces;
    return Math.round(numToRound) / 10**decimalPlaces;
}

wrk.floor = function(num, decimalPlaces=0) {
    var numToRound = num * 10**decimalPlaces;
    return Math.floor(numToRound) / 10**decimalPlaces;
}

wrk.ceiling = function(num, decimalPlaces=0) {
    var numToRound = num * 10**decimalPlaces;
    return Math.ceil(numToRound) / 10**decimalPlaces;
}

wrk.randflt = function(min, max) {
    // Create a random float between min and max [min, max)
    var diff = max - min;
    return Math.random() * diff + min;
}

wrk.randint = function(min, max) {
    // Create a random integer between min and max [min, max)
    return Math.floor(wrk.randflt(min, max));
}

wrk.sigmoid = function(x) {
    // Do sigmoid
    return 1 / (1 + Math.exp(-x)); // f(x) = 1 / (1 + e^(-x))
}

wrk.invSigmoid = function(x) {
    // Do inverse sigmoid
    return wrk.sigmoid(x) * (1 - wrk.sigmoid(x)); // f'(x) = f(x) * (1 - f(x))
}

wrk.degrees = function(radians) {
    // Convert an angle in radians to degrees

    return radians * wrk._180DIVPI;
}

wrk.radians = function(degrees) {
    // Convert an angle in degrees to radians

    return degrees / wrk._180DIVPI;
}

// Should this be in math? !FIXME
wrk.mean = function(a, b) {
    return (a + b) / 2;
}