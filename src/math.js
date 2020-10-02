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
    var diff = max - min;
    return Math.random() * diff + min;
}

wrk.randint = function(min, max) {
    return Math.floor(wrk.randflt(min, max));
}

wrk.sigmoid = function(x) {
    return 1 / (1 + Math.exp(-x)); // f(x) = 1 / (1 + e^(-x))
}

wrk.invSigmoid = function(x) {
    return wrk.sigmoid(x) * (1 - wrk.sigmoid(x)); // f'(x) = f(x) * (1 - f(x))
}

wrk.degrees = function(radians) {
    return radians * wrk._180DIVPI;
}

wrk.radians = function(degrees) {
    return degrees / wrk._180DIVPI;
}

// Should this be in math? !FIXME
wrk.mean = function(a, b) {
    return (a + b) / 2;
}