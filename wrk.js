var Wrk = function() {
    // setup
}

Wrk.prototype.roundTo = function(num, decimalPlaces) {
    var numToRound = num * 10**decimalPlaces;
    return Math.round(numToRound) / 10**decimalPlaces;
}

Wrk.prototype.Vector = function(x, y, z=0) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Wrk.prototype.Vector.copy = function(v) {
    return new Wrk.Vector(v,x, v.y, v.z);
}

Wrk.prototype.Vector.add = function(v1, v2) {
    v1.x += v2.x;
    v1.y += v2.y;
    v1.z += v2.z;
}

Wrk.prototype.Vector.add2 = function(v1, v2) {
    var v3 = wrk.Vector.copy(v1);
    wrk.Vector.Add(v3, v2);
    return v3;
}

// create a wrk instance for person to use
var wrk = new Wrk();