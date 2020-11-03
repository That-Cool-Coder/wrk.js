// Create an empty object to add methods to
wrk.arr = {};

wrk.arr.removeItem = function(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
        wrk.internalWarn(`Could not remove item ${item} from array as it is not in the array`);
    }
    else {
        wrk.arr.removeIndex(array, index);
    }
}

wrk.arr.removeIndex = function(array, index) {
    if (index < 0 || index >= array.length) {
        wrk.internalWarn(`Could not remove item at ${index} from array as the index is out of bounds`);
    }
    else {
        array.splice(index, 1);
    }
}

wrk.arr.highestIndex = function(array=[]) {
    // Find the index of the highest number in the array
    // (only intended for numbers)

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
    // Find the index of the lowest number in the array
    // (only intended for numbers)

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
    // Choose a random item from the array
    // (only intended for numbers)

    return array[wrk.randint(0, array.length)];
}

wrk.arr.sum = function(array=[]) {
    // Get the total of all of the items in the array added together
    // (only intended for numbers)

    var sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
    return sum;
}

wrk.arr.product = function(array=[]) {
    // Get the total of all of the items in the array multiplied together
    // (only intended for numbers)

    var product = array.reduce(function(a, b){
        return a * b;
    }, 1);
    return product;
}

wrk.arr.mean = function(array=[]) {
    // Get the mean (average) value of all of the items in the array
    // (only intended for numbers)

    var sum = wrk.arr.sum(array);
    var mean = sum / array.length;
    return mean;
}

wrk.arr.median = function(array=[]) {
    // Get the item in the middle of the array
    // (works for arrays of any type)

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