wrk.v = function(x, y, z=0) {
    // simple and (hopefully) fast
    return {x : x, y : y, z : z};
}

wrk.v.random = function(min, max, floatsAllowed=true) {
    if (floatsAllowed) {
        return new wrk.v(wrk.randflt(min.x, max.x),
            wrk.randflt(min.y, max.y),
            wrk.randflt(min.z, max.z));
    }
    else {
        return new wrk.v(wrk.randint(min.x, max.x),
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

wrk.v.mean = function(v1, v2) {
    var dist = wrk.v.dist(v1, v2);
    return wrk.v.copyAdd(v1, dist);
}

wrk.v.normalize = function(v) {
    var mag = wrk.v.mag(v);
    wrk.v.div(v, mag);
}

wrk.v.rotate = function(v, angle=0, useDegrees=false) {
    if (useDegrees) {
        angle = wrk.radians(angle);
    }
    angle *= -1; // make it go clockwise
    
    var cos = wrk.cos(angle);
    var sin = wrk.sin(angle);

    // Assign to a temp variable to avoid messing with the v.x below
    var newX = v.x * cos - v.y * sin;
    // Don't assign to a temp variable because v.y isn't used again
    v.y = v.x * sin + v.y * cos;
    // Read from the temp variable
    v.x = newX;
}

wrk.v.heading = function(v, useDegrees=false) {
    var heading = wrk.atan2(v.x, v.y);
    if (useDegrees) heading = wrk.degrees(heading);
    return heading;
}