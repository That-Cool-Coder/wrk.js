Wrk.prototype.getElemById = function(id) {
    return document.getElementById(id);
}

Wrk.prototype.setValues = function(obj, values) {
    // change the values of an object without changing the keys
    // assumes that keys and values are same length, etc
    var keys = Object.keys(obj);
    keys.forEach((key, i) => {
        obj[key] = values[i];
    });
}

Wrk.prototype.highestIndex = function(array) {
    var highestIdx = null;
    var highestItem = 0;
    array.forEach((item, i) => {
        if (item >= highestItem) {
            highestItem = item;
            highestIdx = i;
        }
    });
    return highestIdx;
}

Wrk.prototype.uniqueId = function() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}

Wrk.prototype.nullFunc = function() {
    // do nothing
}