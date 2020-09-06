// Setup wrk instance

if (window.wrk !== undefined) {
    console.error('Warning: an instance of wrk.js is already running')
}
else {
    var wrk = {};
    window.wrk = wrk;

    // Load the 'consts' from math
    Object.getOwnPropertyNames(Math).forEach(key => {
        wrk[key] = Math[key];
    });
    wrk._180DIVPI = 180 / wrk.PI;
}

wrk.uniqueId = function() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}

wrk.randBoolean = function() {
    return wrk.randflt(0, 1) > 0.5;
}

wrk.doNothing = function() {
    // do nothing
}

wrk.constrain = function(num, min, max) {
    if (num < min) num = min;
    if (num > max) num = max;
    return num;
}

wrk.str = {};

wrk.str.lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

wrk.str.upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

wrk.str.digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

wrk.str.symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_',
'=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'];

wrk.str.randomFromArray = function(length=1, charsToUse=[]) {  
    var result = '';
    for (var i = 0; i < length; i ++) {
        result += wrk.arr.choose(charsToUse);
    }
    return result;
}

wrk.str.random = function(length=1, lowercaseAllowed=true, uppercaseAllowed=true,
    digitsAllowed=true, symbolsAllowed=true) {
    
    var charsToUse = [];
    if (lowercaseAllowed) charsToUse = charsToUse.concat(wrk.str.lowerAlphabet);
    if (uppercaseAllowed) charsToUse = charsToUse.concat(wrk.str.upperAlphabet);
    if (digitsAllowed) charsToUse = charsToUse.concat(wrk.str.digits);
    if (symbolsAllowed) charsToUse = charsToUse.concat(wrk.str.symbols);

    return wrk.str.randomFromArray(length, charsToUse);
}

wrk.str.randomLetters = function(length=1, lowercaseAllowed=true, uppercaseAllowed=true) { 
    var charsToUse = [];
    if (lowercaseAllowed) charsToUse = charsToUse.concat(wrk.str.lowerAlphabet);
    if (uppercaseAllowed) charsToUse = charsToUse.concat(wrk.str.upperAlphabet);
    
    return wrk.str.randomFromArray(length, charsToUse);
}

wrk.str.randomSymbols = function(length=1, digitsAllowed=false) { 
    var charsToUse = [];
    if (digitsAllowed) charsToUse = charsToUse.concat(wrk.str.digits);
    
    return wrk.str.randomFromArray(length, charsToUse);
}

wrk.str.randomDigits = function(length=1) {
    return wrk.str.randomFromArray(length, wrk.str.digits);
}

wrk.str.breakHtmlTags = function(str) {
    return str.replace(/</g, '<\u200c');
}

wrk.round = function(num, decimalPlaces=0) {
    var numToRound = num * 10**decimalPlaces;
    return Math.round(numToRound) / 10**decimalPlaces;
}

wrk.floor = function(num, decimalPlaces=0) {
    var numToRound = num * 10**decimalPlaces;
    return Math.floor(numToRound) / 10**decimalPlaces;
}

wrk.ceiling = function(num, decimalPlaces=0) {
    var numToRound = num * 10**decimalPlaces;
    return Math.ceil(numToRound) / 10**decimalPlaces;
}

wrk.randflt = function(min, max) {
    var diff = max - min;
    return Math.random() * diff + min;
}

wrk.randint = function(min, max) {
    return Math.floor(wrk.randflt(min, max));
}

wrk.sigmoid = function(x) {
    return 1 / (1 + Math.exp(-x)); // f(x) = 1 / (1 + e^(-x))
}

wrk.invSigmoid = function(x) {
    return wrk.sigmoid(x) * (1 - wrk.sigmoid(x));; // f'(x) = f(x) * (1 - f(x))
}

wrk.degrees = function(radians) {
    return radians * wrk._180DIVPI;
}

wrk.radians = function(degrees) {
    return degrees / wrk._180DIVPI;
}

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
    return wrk.v(wrk.dom.viewportWidth, wrk.dom.viewportHeight);
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

wrk.arr = {};

wrk.arr.highestIndex = function(array=[]) {
    var highestIdx = null;
    var highestItem = 0;
    array.forEach((item, i) => {
        if (item >= highestItem) {
            highestItem = item;
            highestIdx = i;
        }
    });
    return highestIdx;
}

wrk.arr.choose = function(array=[]) {
    return array[wrk.randint(0, array.length)];
}

wrk.obj = {};

wrk.obj.setValues = function(obj, values) {
    // change the values of an object without changing the keys
    // assumes that keys and values are same length, etc
    var keys = Object.keys(obj);
    keys.forEach((key, i) => {
        obj[key] = values[i];
    });
}

wrk.v = function(x, y, z=0) {
    // simple and (hopefully) fast
    return {x : x, y : y, z : z};
}

wrk.v.random = function(min, max, floatsAllowed=true) {
    if (floatsAllowed) {
        return new wrk.v(wrk.randflt(min.x, max.y),
            wrk.randflt(min.y, max.y),
            wrk.randflt(min.z, max.z));
    }
    else {
        return new wrk.v(wrk.randint(min.x, max.y),
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

wrk.NeuralNetwork = class {
    constructor() {
        this.inputs = [];
        this.hiddenLayers = [];
        this.outputs = [];
    }

    createInputLayer(size) {
        this.inputs = [];
        for (var i = 0; i < size; i ++) {
            this.inputs.push(new wrk.Neuron());
        }
    }

    addHiddenLayer(size) {
        var newLayer = [];
        for (var i = 0; i < size; i ++) {
            newLayer.push(new wrk.Neuron());
        }
        this.hiddenLayers.push(newLayer);
    }

    createOutputLayer(size) {
        this.outputs = [];
        for (var i = 0; i < size; i ++) {
            this.outputs.push(new wrk.Neuron());
        }
    }

    connect() {
        // connect input to first hidden
        this._connect2Layers(this.inputs, this.hiddenLayers[0]);
        // connect last hidden to output
        this._connect2Layers(this.hiddenLayers[this.hiddenLayers.length - 1], this.outputs);

        // connect hidden layers to each other
        for (var i = 0; i < this.hiddenLayers.length - 1; i ++) {
            var firstLayer = this.hiddenLayers[i];
            var secondLayer =  this.hiddenLayers[i + 1];
            this._connect2Layers(firstLayer, secondLayer);
        }
    }

    activate(input) {
        this.inputs.forEach((neuron, i) => neuron.activate(input[i]));
        this.hiddenLayers.forEach(layer => {
            layer.forEach(neuron => neuron.activate());
        });
        return this.outputs.map(neuron => neuron.activate());
    }

    propagate(target) {
        this.outputs.forEach((neuron, i) => neuron.propagate(target[i]));
        for (var i = this.hiddenLayers.length - 1; i >= 0; i --) {
            var layer = this.hiddenLayers[i];
            layer.forEach(neuron => neuron.propagate());
        }
        return this.inputs.forEach(neuron => neuron.propagate());
    }

    train(dataset, iterations=1) {
        while(iterations > 0) {
            dataset.forEach(datum => {
                this.activate(datum.inputs);
                this.propagate(datum.outputs);
            });
            iterations--;
        }
    }

    saveTraining() {
        var savedTraining = [];

        savedTraining.push(this._saveLayer(this.inputs));
        this.hiddenLayers.forEach(layer => {
            savedTraining.push(this._saveLayer(layer));
        });
        savedTraining.push(this._saveLayer(this.outputs));

        return savedTraining;
    }

    loadTraining(savedTraining) {
        this._loadLayer(savedTraining[0], this.inputs);
        this.hiddenLayers.forEach((layer, i) => {
            this._loadLayer(savedTraining[i + 1], layer);
        });
        this._loadLayer(savedTraining[this.hiddenLayers.length + 1], this.outputs);
    }

    _saveLayer(layer) {
        var savedLayer = [];
        layer.forEach(neuron => {
            var savedNeuron = [];
            savedNeuron.push(neuron.bias);

            var incomingWeights = Object.values(neuron.incoming.weights);
            savedNeuron.push(incomingWeights);
            var outgoingWeights = Object.values(neuron.outgoing.weights);
            savedNeuron.push(outgoingWeights);

            savedLayer.push(savedNeuron);
        });
        return savedLayer;
    }

    _loadLayer(savedLayer, neuronObjs) {
        for (var i = 0; i < neuronObjs.length; i ++) {
            var neuron = neuronObjs[i];
            var values = savedLayer[i];

            // set the bias (the first item in a saved neuron)
            neuron.bias = values.shift();
            
            // then set the weights of the connections
            setValues(neuron.incoming.weights, values[0]);
            setValues(neuron.outgoing.weights, values[1]);
        }
    }

    _connect2Layers(layer1, layer2) {
        layer1.forEach(neuron => {
            layer2.forEach(neuron2 => {
                neuron.connect(neuron2);
            });
        });
    }
}

wrk.Neuron = class {
    constructor(bias=wrk.randflt(-1, 1)) {
        this.id = wrk.uniqueId();
        this.bias = bias;

        this.incoming = {
            weights : {},
            targets : {}
        }

        this.outgoing = {
            weights : {},
            targets : {}
        }

        this._output;
        this.output;
        this.error;
    }
    
    connect(neuron, weight=wrk.randflt(0, 1)) {
        this.outgoing.targets[neuron.id] = neuron;
        neuron.incoming.targets[this.id] = this;
        neuron.incoming.weights[this.id] = weight;
        
        if (neuron.incoming.weights[this.id] == undefined) {
            this.outgoing.weights[neuron.id] = wrk.randflt(-1, 1);
        }
        else {
            this.outgoing.weights[neuron.id] = weight;
        }
    }

    activate(input) {
        if (input != undefined) {
            this._output = 1;
            this.output = input;
        }
        else {
            var targetIds = Object.keys(this.incoming.targets);
            var sum = targetIds.reduce((total, target) => {
                return total += this.incoming.targets[target].output * this.incoming.weights[target];
            }, this.bias);
            
            this._output = wrk.invSigmoid(sum);
            this.output = wrk.sigmoid(sum);
        }

        return this.output;
    }
    
    propagate(target, rate=0.3) {
        var outgoingIds = Object.keys(this.outgoing.targets);     
        
        if (target == undefined) {
            var sum = outgoingIds.reduce((total, target, index) => {
                var targetObj = this.outgoing.targets[target];
                this.outgoing.weights[target] -= rate * targetObj.error * this.output;
                this.outgoing.targets[target].incoming.weights[this.id] = this.outgoing.weights[target];
                
                total += targetObj.error * this.outgoing.weights[target];
                return total;
            }, 0);
        }
        else {
            var sum = this.output - target;
        }
        
        // 𝛿squash/𝛿sum
        this.error = sum * this._output
        
        // Δbias
        this.bias -= rate * this.error;
        
        return this.error;
    }
}

