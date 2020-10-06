wrk.str = {};

wrk.str.lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

wrk.str.upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

wrk.str.digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

wrk.str.symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_',
    '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'];

wrk.str.randomFromArray = function(length=1, charsToUse=[]) {
    // Create a random string using the chars in charsToUse
    
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