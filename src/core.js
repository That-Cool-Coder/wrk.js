// wrk.js v1.1.1
// Protected under GNU General Public License v3.0

// Setup wrk instance

if (window.wrk !== undefined) {

    // This doesn't look like it should work (wrk is not defined yet in this file)...
    // ...but it will because wrk has already been defined (that's why we're warning the user!)
    wrk.internalWarn('An instance of wrk.js is already running');
}
else {
    var wrk = {}; // Create an object to be the basis of wrk
    wrk.VERSION = 'v1.1.1';
    wrk.consoleLogHeader = '  🔧🔧 ';
    wrk.consoleLogStyling = 'background-color: #9cc8ff; display: block';
    window.wrk = wrk; // Make it global

    // Make a 'hello' message
    console.log(`%c  \n${wrk.consoleLogHeader} wrk.js ${wrk.VERSION}  \n  `,
        wrk.consoleLogStyling);

    // Load the 'consts' from math
    Object.getOwnPropertyNames(Math).forEach(key => {
        wrk[key] = Math[key];
    });
}

wrk.internalLog = function(message) {
    var fullMessage = '%c' + wrk.consoleLogHeader + message;
    console.log(fullMessage, wrk.consoleLogStyling);
}

wrk.internalWarn = function(message) {
    var fullMessage = `${wrk.consoleLogHeader} wrk.js warning:\n  ${message}`;
    console.warn(fullMessage);
}