wrk.dom = {};

wrk.dom.logPara = undefined;

wrk.dom.id = function(id) {
    return document.getElementById(id);
}

wrk.dom.viewportWidth = function() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
}

wrk.dom.viewportHeight = function() { 
    return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
}

wrk.dom.viewportSize = function() {
    return wrk.v(wrk.dom.viewportWidth(), wrk.dom.viewportHeight());
}

wrk.dom.clearLogPara = function() {
    if (wrk.dom.logPara !== undefined) {
        wrk.dom.logPara.innerText = '';
    }
}

wrk.dom.logToPara = function(data, label='No label') {
    if (wrk.dom.logPara === undefined) {
        wrk.dom.logPara = document.createElement('p');
        document.body.appendChild(wrk.dom.logPara);
    }
    else {
        wrk.dom.logPara.innerText += `${label} : ${data}\n`;
    }
}

wrk.dom.delete = function(id) {
    var elem = wrk.dom.id(id);
    if (elem != undefined) {
        elem.remove();
    }
}