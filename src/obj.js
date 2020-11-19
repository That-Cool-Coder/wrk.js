wrk.obj = {};

wrk.obj.keys = function(obj) {
    return Object.keys(obj);
}

wrk.obj.values = function(obj) {
    return Object.values(obj);
}

wrk.obj.setValues = function(obj, values) {
    // change the values of an object without changing the keys
    // assumes that keys and values are same length, etc
    var keys = wrk.obj.keys(obj);
    keys.forEach((key, i) => {
        obj[key] = values[i];
    });
}

wrk.obj.oneLevelCopy = function(obj) {
    var newObj = {};
    var keys = wrk.obj.keys(obj);
    keys.forEach(key => {
        newObj[key] = obj[key];
    });
    return newObj;
}