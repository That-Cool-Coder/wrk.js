new p5();

var x = 10;
var y = 10;
var z = 10;
var amount = 10000;

var times = {
    slowP5 : 0,
    fastP5 : 0,
    wrk : 0
}

function test() {
    var start = performance.now();
    // make slow p5
    for (var i = 0; i < amount; i ++) {
        var vector = createVector(x, y);
    }
    var end = performance.now();
    times.slowP5 = end - start;

    var start = performance.now();
    // make slow p5
    for (var i = 0; i < amount; i ++) {
        var vector = new p5.Vector(x, y);
    }
    var end = performance.now();
    times.fastP5 = end - start;

    var start = performance.now();
    // make slow p5
    for (var i = 0; i < amount; i ++) {
        var vector = new wrk.Vector(x, y);
    }
    var end = performance.now();
    times.wrk = end - start;

    console.log(times);
}