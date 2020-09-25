// wrk.js v0.2.0
// Protected under GNU General Public License v3.0

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