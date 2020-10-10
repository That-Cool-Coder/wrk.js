// wrk.js v1.0.0
// Protected under GNU General Public License v3.0

// Setup wrk instance

if (window.wrk !== undefined) {
    console.error('Warning: an instance of wrk.js is already running')
}
else {
    var wrk = {}; // Create an object to be the basis of wrk
    window.wrk = wrk; // Make it global

    // Load the 'consts' from math
    Object.getOwnPropertyNames(Math).forEach(key => {
        wrk[key] = Math[key];
    });
}