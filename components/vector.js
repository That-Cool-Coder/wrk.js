Wrk.prototype.Vector = function(x, y, z=0) {
    // simple and (hopefully) fast
    return {x : x, y : y, z : z};
}

Wrk.prototype.Vector.copy = function(v) {
    return new wrk.Vector(v.x, v.y, v.z);
}

Wrk.prototype.Vector.add = function(v1, v2) {
    v1.x += v2.x;
    v1.y += v2.y;
    v1.z += v2.z;
}

Wrk.prototype.Vector.addAndCopy = function(v1, v2) {
    var v3 = wrk.Vector.copy(v1);
    wrk.Vector.add(v3, v2);
    return v3;
}

Wrk.prototype.Vector.sub = function(v1, v2) {
    v1.x -= v2.x;
    v1.y -= v2.y;
    v1.z -= v2.z;
}

Wrk.prototype.Vector.subAndCopy = function(v1, v2) {
    var v3 = wrk.Vector.copy(v1);
    wrk.Vector.sub(v3, v2);
    return v3;
}

Wrk.prototype.Vector.mult = function(v1, amount) {
    v1.x *= amount;
    v1.y *= amount;
    v1.z *= amount;
}

Wrk.prototype.Vector.multAndCopy = function(v1, amount) {
    var v3 = wrk.Vector.copy(v1);
    wrk.Vector.mult(v3, amount);
    return v3;
}

Wrk.prototype.Vector.div = function(v1, amount) {
    if (amount !== 0) {
        v1.x /= amount;
        v1.y /= amount;
        v1.z /= amount;
    }
}

Wrk.prototype.Vector.multAndCopy = function(v1, amount) {
    var v3 = wrk.Vector.copy(v1);
    wrk.Vector.div(v3, amount);
    return v3;
}