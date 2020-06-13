Wrk.prototype.roundTo = function(num, decimalPlaces) {
    var numToRound = num * 10**decimalPlaces;
    return Math.round(numToRound) / 10**decimalPlaces;
}