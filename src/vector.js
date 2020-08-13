wrk.Vector = function(x, y, z=0) {
    // simple and (hopefully) fast
    return {x : x, y : y, z : z};
}

wrk.Vector.copy = function(v) {
    return wrk.Vector(v,x, v.y, v.z);
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