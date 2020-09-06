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

wrk.arr.lowestIndex = function(array=[]) {
    var lowestIdx = null;
    var lowestItem = 0;
    array.forEach((item, i) => {
        if (item <= lowestItem) {
            lowestItem = item;
            lowestIdx = i;
        }
    });
    return lowestIdx;
}

wrk.arr.choose = function(array=[]) {
    return array[wrk.randint(0, array.length)];
}

wrk.arr.sum = function(array=[]) {
    var sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
    return sum;
}

wrk.arr.product = function(array=[]) {
    var product = array.reduce(function(a, b){
        return a + b;
    }, 1); // should this 1 be 0? !FIXME
    return product;
}

wrk.arr.mean = function(array=[]) {
    var sum = wrk.arr.sum(array);
    var mean = sum / array.length;
    return mean;
}

wrk.arr.median = function(array=[]) {
    // If it's even find the two middle numbers and find their mean
    if (array.length % 2 == 0) {
        var justBelowMiddle = array[array.length / 2 - 1];
        var justOverMiddle = array[array.length / 2];
        return wrk.mean(justBelowMiddle, justOverMiddle);
    }
    // If it's odd find the middle index
    else {
        var middleIndex = array.length / 2 - 0.5;
        return array[middleIndex];
    }
}

wrk.arr.mode = function(){}; // do nothing because thinking about whether this should do objects and strings, not just numbers !FIXME