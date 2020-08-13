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