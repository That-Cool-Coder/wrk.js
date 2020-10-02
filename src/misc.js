wrk.uniqueId = function() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + wrk.random().toString(36).substr(2, 9);
}

wrk.randBoolean = function() {
    return wrk.random() > 0.5;
}

wrk.doNothing = function() {
    // do nothing
}

wrk.constrain = function(num, min, max) {
    // Constrain num between min and max

    return Math.max(min, Math.min(num, max))
}

wrk.wrapAround = function(num, min, max) {
    // Make num wrap around from min to max and max to min if it goes over
    // Not complete !FIXME! if num < min is not correct! and it's also wrong if num > max

    var diff = max - min;
    if (num > max) num = num % diff + min;
    if (num < min) num = max;
    return num;
}