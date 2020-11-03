// wrk.js v1.1.0
// Protected under GNU General Public License v3.0

// Setup wrk instance

if (window.wrk !== undefined) {

    // This doesn't look like it should work (wrk is not defined yet in this file)...
    // ...but it will because wrk has already been defined (that's why we're warning the user!)
    wrk.internalWarn('Warning: an instance of wrk.js is already running');
}
else {
    var wrk = {}; // Create an object to be the basis of wrk
    wrk.VERSION = 'v1.1.0';
    window.wrk = wrk; // Make it global

    // Load the 'consts' from math
    Object.getOwnPropertyNames(Math).forEach(key => {
        wrk[key] = Math[key];
    });
}

wrk.internalWarn = function(message) {
    var fullMessage = 'wrk.js warning:\n' + 
        message;
    console.warn(fullMessage);
    console.trace();
}