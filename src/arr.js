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