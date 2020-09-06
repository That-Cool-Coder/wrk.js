wrk.uniqueId = function() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}

wrk.randBoolean = function() {
    return wrk.randflt(0, 1) > 0.5;
}

wrk.doNothing = function() {
    // do nothing
}

wrk.constrain = function(num, min, max) {
    if (num < min) num = min;
    if (num > max) num = max;
    return num;
}