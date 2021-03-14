function testSpeed(func, samples) {
    var meanTime = 0;
    for (var i = 0; i < samples; i ++) {
        var start = performance.now();
        func();
        var end = performance.now()
        meanTime += end - start;
    }
    return meanTime / samples;
}

function run() {
    var codeToRun = wrk.dom.id('codeInput').value;
    localStorage.wrkTestCode = codeToRun;
    var func = eval('() => {' + codeToRun + ';}');
    var samples = wrk.dom.id('samplesInput').value;
    localStorage.wrkTestSamples = samples;
    var result = testSpeed(func, samples);
    wrk.dom.id('results').innerText = result + ' ms';
}

if (localStorage.wrkTestCode) {
    wrk.dom.id('codeInput').value = localStorage.wrkTestCode;
}

if (localStorage.wrkTestSamples) {
    wrk.dom.id('samplesInput').value = localStorage.wrkTestSamples;
}