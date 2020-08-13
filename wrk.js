// Setup wrk instance

if (window.wrk !== undefined) {
    console.error('Warning: an instance of wrk.js is already running')
}
else {
    var wrk = {};
    window.wrk = wrk;

    // Load the 'consts' from math
    Object.getOwnPropertyNames(Math).forEach(key => {
        //if (typeof Math[key] == 'number') {
            wrk[key] = Math[key];
        //}
    });
    wrk._180DIVPI = 180 / wrk.PI;
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

wrk.vector = function(x, y, z=0) {
    // simple and (hopefully) fast
    return {x : x, y : y, z : z};
}

wrk.vector.random = function(min, max, floatsAllowed=true) {
    if (floatsAllowed) {
        return new wrk.vector(wrk.randflt(min.x, max.y),
            wrk.randflt(min.y, max.y),
            wrk.randflt(min.z, max.z));
    }
    else {
        return new wrk.vector(wrk.randint(min.x, max.y),
            wrk.randint(min.y, max.y),
            wrk.randint(min.z, max.z));
    }
}

wrk.vector.copy = function(v) {
    return wrk.vector(v.x, v.y, v.z);
}

wrk.vector.add = function(v1, v2) {
    v1.x += v2.x;
    v1.y += v2.y;
    v1.z += v2.z;
}

wrk.vector.copyAdd = function(v1, v2) {
    var v3 = wrk.vector.copy(v1);
    wrk.vector.add(v3, v2);
    return v3;
}

wrk.vector.sub = function(v1, v2) {
    v1.x -= v2.x;
    v1.y -= v2.y;
    v1.z -= v2.z;
}

wrk.vector.copySub = function(v1, v2) {
    var v3 = wrk.vector.copy(v1);
    wrk.vector.sub(v3, v2);
    return v3;
}

wrk.vector.mult = function(v, amount) {
    v.x *= amount;
    v.y *= amount;
    v.z *= amount;
}

wrk.vector.copyMult = function(v, amount) {
    var v2 = wrk.vector.copy(v);
    wrk.vector.mult(v2, amount);
    return v2;
}

wrk.vector.div = function(v, amount) {
    v.x /= amount;
    v.y /= amount;
    v.z /= amount;
}

wrk.vector.copyDiv = function(v, amount) {
    var v2 = wrk.vector.copy(v);
    wrk.vector.div(v2, amount);
    return v2;
}

wrk.vector.magSq = function(v) {
    return v.x ** 2 + v.y ** 2 + v.z ** 2;
}

wrk.vector.mag = function(v) {
    return wrk.sqrt(wrk.vector.magSq(v));
}

wrk.vector.distSq = function(v1, v2) {
    var v3 = wrk.vector.copySub(v2, v1);
    return wrk.vector.magSq(v3);
}

wrk.vector.dist = function(v1, v2) {
    return wrk.sqrt(wrk.vector.distSq(v1, v2));
}

