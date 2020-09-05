wrk.attitude = function(heading, pitch, roll) {
    return {heading : heading, pitch : pitch, roll : roll};
}

wrk.attitude.copy = function(a) {
    return wrk.attitude(a.heading, a.pitch, a.roll);
}

wrk.attitude.add = function(a1, a2) {
    a1.heading += a2.heading;
    a1.pitch += a2.pitch;
    a1.roll += a2.roll;
}

wrk.attitude.copyAdd = function(a1, a2) {
    var a3 = wrk.attitude.copy(a1);
    wrk.attitude.add(a3, a2);
    return a3;
}

wrk.attitude.sub = function(a1, a2) {
    a1.heading -= a2.heading;
    a1.pitch -= a2.pitch;
    a1.roll -= a2.roll;
}

wrk.attitude.copySub = function(a1, a2) {
    var a3 = wrk.attitude.copy(a1);
    wrk.attitude.sub(a3, a2);
    return a3;
}

wrk.attitude.mult = function(a, amount) {
    a.heading *= amount;
    a.pitch *= amount;
    a.roll *= amount;
}

wrk.attitude.copyMult = function(a, amount) {
    var a2 = wrk.attitude.copy(a);
    wrk.attitude.mult(a2, amount);
    return a2;
}

wrk.attitude.div = function(a, amount) {
    a.heading /= amount;
    a.pitch /= amount;
    a.roll /= amount;
}

wrk.attitude.copyDiv = function(a, amount) {
    var a2 = wrk.attitude.copy(a);
    wrk.attitude.div(a2, amount);
    return a2;
}