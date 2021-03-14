// You'll notice that a lot of the functions in this file could use the other ones
// But this carries a severe speed penalty, so I've put things inline if that speeds it up
// Vector operations are often the slowest thing in an application,
// so making them fast is critical

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

wrk.v.equal = function(v1, v2) {
    return (v1.x == v2.x && v1.y == v2.y && v1.z == v1.z);
}

wrk.v.add = function(v1, v2) {
    v1.x += v2.x;
    v1.y += v2.y;
    v1.z += v2.z;
}

wrk.v.copyAdd = function(v1, v2) {
    var v3 = wrk.v(
        v1.x + v2.x,
        v1.y + v2.y,
        v1.z + v2.z);
    return v3;
}

wrk.v.sub = function(v1, v2) {
    v1.x -= v2.x;
    v1.y -= v2.y;
    v1.z -= v2.z;
}

wrk.v.copySub = function(v1, v2) {
    var v3 = wrk.v(
        v1.x / v2.x,
        v1.y / v2.y,
        v1.z / v2.z);
    return v3;
}

wrk.v.mult = function(v, amount) {
    v.x *= amount;
    v.y *= amount;
    v.z *= amount;
}

wrk.v.copyMult = function(v, amount) {
    var v2 = wrk.v(
        v.x * amount,
        v.y * amount,
        v.z * amount);
    return v2;
}

wrk.v.div = function(v, amount) {
    v.x /= amount;
    v.y /= amount;
    v.z /= amount;
}

wrk.v.copyDiv = function(v, amount) {
    var v2 = wrk.v(
        v.x / amount,
        v.y / amount,
        v.z / amount);
    return v2;
}

wrk.v.magSq = function(v) {
    return v.x ** 2 + v.y ** 2 + v.z ** 2;
}

wrk.v.mag = function(v) {
    return wrk.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2);
}

wrk.v.distSq = function(v1, v2) {
    var displacementX = v2.x - v1.x;
    var displacementY = v2.y - v1.y;
    var displacementZ = v2.z - v1.z;
    return displacementX ** 2 + displacementY ** 2 + displacementZ ** 2;
}

wrk.v.dist = function(v1, v2) {
    var displacementX = v2.x - v1.x;
    var displacementY = v2.y - v1.y;
    var displacementZ = v2.z - v1.z;
    return wrk.sqrt(displacementX ** 2 + displacementY ** 2 + displacementZ ** 2);
}

wrk.v.mean = function(v1, v2) {
    var halfDisplacementX = (v2.x - v1.x) / 2;
    var halfDisplacementY = (v2.y - v1.y) / 2;
    var halfDisplacementZ = (v2.z - v1.z) / 2;

    return wrk.v(
        v1.x + halfDisplacementX,
        v1.y + halfDisplacementY,
        v1.z + halfDisplacementZ);
}

wrk.v.normalize = function(v) {
    var mag = wrk.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2)
    v.x /= mag;
    v.y /= mag;
    v.z /= mag;
}

wrk.v.rotate = function(v, angle=0, useDegrees=false) {
    if (useDegrees) {
        angle /= wrk._180DIVPI;
    }
    
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
    var heading = wrk.atan2(v.y, v.x);
    if (useDegrees) heading *= wrk._180DIVPI;
    return heading;
}

wrk.v.dot = function(v1, v2) {
    var result = v1.x * v2.x;
    result += v1.y * v2.y;
    result += v1.z * v2.z;
    return result;
}

wrk.v.cross = function(v1, v2) {
    var crossP = wrk.v(0, 0, 0);
    crossP.x = v1.y * v2.z - v1.z * v2.y;
    crossP.y = v1.z * v2.x - v1.x * v2.z;
    crossP.z = v1.x * v2.y - v1.y * v2.x;
    return crossP;
}