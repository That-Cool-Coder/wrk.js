// Setup wrk instance

if (window.wrk !== undefined) {
    console.error('Warning: an instance of wrk.js is already running')
}
else {
    var wrk = {};
    window.wrk = wrk;

    // Load the 'consts' from math
    Object.getOwnPropertyNames(Math).forEach(key => {
        wrk[key] = Math[key];
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

wrk.str = {};

wrk.str.lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

wrk.str.upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

wrk.str.digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

wrk.str.symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_',
'=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'];

wrk.str.randomFromArray = function(length=1, charsToUse=[]) {  
    var result = '';
    for (var i = 0; i < length; i ++) {
        result += wrk.arr.choose(charsToUse);
    }
    return result;
}

wrk.str.random = function(length=1, lowercaseAllowed=true, uppercaseAllowed=true,
    digitsAllowed=true, symbolsAllowed=true) {
    
    var charsToUse = [];
    if (lowercaseAllowed) charsToUse = charsToUse.concat(wrk.str.lowerAlphabet);
    if (uppercaseAllowed) charsToUse = charsToUse.concat(wrk.str.upperAlphabet);
    if (digitsAllowed) charsToUse = charsToUse.concat(wrk.str.digits);
    if (symbolsAllowed) charsToUse = charsToUse.concat(wrk.str.symbols);

    return wrk.str.randomFromArray(length, charsToUse);
}

wrk.str.randomLetters = function(length=1, lowercaseAllowed=true, uppercaseAllowed=true) { 
    var charsToUse = [];
    if (lowercaseAllowed) charsToUse = charsToUse.concat(wrk.str.lowerAlphabet);
    if (uppercaseAllowed) charsToUse = charsToUse.concat(wrk.str.upperAlphabet);
    
    return wrk.str.randomFromArray(length, charsToUse);
}

wrk.str.randomSymbols = function(length=1, digitsAllowed=false) { 
    var charsToUse = [];
    if (digitsAllowed) charsToUse = charsToUse.concat(wrk.str.digits);
    
    return wrk.str.randomFromArray(length, charsToUse);
}

wrk.str.randomDigits = function(length=1) {
    return wrk.str.randomFromArray(length, wrk.str.digits);
}

wrk.str.breakHtmlTags = function(str) {
    return str.replace(/</g, '<\u200c');
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

wrk.dom = {};

wrk.dom.id = function(id) {
    return document.getElementById(id);
}

wrk.arr = {};

wrk.arr.highestIndex = function(array=[]) {
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

wrk.arr.choose = function(array=[]) {
    return array[wrk.randint(0, array.length)];
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

wrk.v = function(x, y, z=0) {
    // simple and (hopefully) fast
    return {x : x, y : y, z : z};
}

wrk.v.random = function(min, max, floatsAllowed=true) {
    if (floatsAllowed) {
        return new wrk.v(wrk.randflt(min.x, max.y),
            wrk.randflt(min.y, max.y),
            wrk.randflt(min.z, max.z));
    }
    else {
        return new wrk.v(wrk.randint(min.x, max.y),
            wrk.randint(min.y, max.y),
            wrk.randint(min.z, max.z));
    }
}

wrk.v.copy = function(v) {
    return wrk.v(v.x, v.y, v.z);
}

wrk.v.add = function(v1, v2) {
    v1.x += v2.x;
    v1.y += v2.y;
    v1.z += v2.z;
}

wrk.v.copyAdd = function(v1, v2) {
    var v3 = wrk.v.copy(v1);
    wrk.v.add(v3, v2);
    return v3;
}

wrk.v.sub = function(v1, v2) {
    v1.x -= v2.x;
    v1.y -= v2.y;
    v1.z -= v2.z;
}

wrk.v.copySub = function(v1, v2) {
    var v3 = wrk.v.copy(v1);
    wrk.v.sub(v3, v2);
    return v3;
}

wrk.v.mult = function(v, amount) {
    v.x *= amount;
    v.y *= amount;
    v.z *= amount;
}

wrk.v.copyMult = function(v, amount) {
    var v2 = wrk.v.copy(v);
    wrk.v.mult(v2, amount);
    return v2;
}

wrk.v.div = function(v, amount) {
    v.x /= amount;
    v.y /= amount;
    v.z /= amount;
}

wrk.v.copyDiv = function(v, amount) {
    var v2 = wrk.v.copy(v);
    wrk.v.div(v2, amount);
    return v2;
}

wrk.v.magSq = function(v) {
    return v.x ** 2 + v.y ** 2 + v.z ** 2;
}

wrk.v.mag = function(v) {
    return wrk.sqrt(wrk.v.magSq(v));
}

wrk.v.distSq = function(v1, v2) {
    var v3 = wrk.v.copySub(v2, v1);
    return wrk.v.magSq(v3);
}

wrk.v.dist = function(v1, v2) {
    return wrk.sqrt(wrk.v.distSq(v1, v2));
}

