// Setup wrk instance

if (window.wrk !== undefined) {
    console.error('Warning: an instance of wrk.js is already running')
}
else {
    var wrk = {};
    window.wrk = wrk;
}

wrk.getElemById = function(id) {
    return document.getElementById(id);
}

wrk.uniqueId = function() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}

wrk.doNothing = function() {
    // do nothing
}

wrk.dom = {};

wrk.dom.elemId = function(id) {
    return document.getElementById(id);
}

wrk.arr = {};

wrk.arr.highestIndex = function(array) {
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

wrk.obj = {};

wrk.obj.setValues = function(obj, values) {
    // change the values of an object without changing the keys
    // assumes that keys and values are same length, etc
    var keys = Object.keys(obj);
    keys.forEach((key, i) => {
        obj[key] = values[i];
    });
}

wrk.roundTo = function(num, decimalPlaces) {
    var numToRound = num * 10**decimalPlaces;
    return Math.round(numToRound) / 10**decimalPlaces;
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
    return sigmoid(x) * (1 - sigmoid(x)); // f'(x) = f(x) * (1 - f(x))
}

wrk.Vector = function(x, y, z=0) {
    // simple and (hopefully) fast
    return {x : x, y : y, z : z};
}

wrk.Vector.copy = function(v) {
    return new Wrk.Vector(v,x, v.y, v.z);
}

wrk.Vector.add = function(v1, v2) {
    v1.x += v2.x;
    v1.y += v2.y;
    v1.z += v2.z;
}

wrk.Vector.add2 = function(v1, v2) {
    var v3 = wrk.Vector.copy(v1);
    wrk.Vector.Add(v3, v2);
    return v3;
}

