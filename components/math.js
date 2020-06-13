Wrk.prototype.roundTo = function(num, decimalPlaces) {
    var numToRound = num * 10**decimalPlaces;
    return Math.round(numToRound) / 10**decimalPlaces;
}

Wrk.prototype.randflt = function(min, max) {
    var diff = max - min;
    return Math.random() * diff + min;
}

Wrk.prototype.randint = function(min, max) {
    return Math.floor(wrk.randflt(min, max));
}

Wrk.prototype.sigmoid = function(x) {
    return 1 / (1 + Math.exp(-x)); // f(x) = 1 / (1 + e^(-x))
}

Wrk.prototype.sigmoid = function(x) {
    return sigmoid(x) * (1 - sigmoid(x)); // f'(x) = f(x) * (1 - f(x))
}