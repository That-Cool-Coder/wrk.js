// Setup wrk instance

if (window.wrk !== undefined) {
    console.error('Warning: an instance of wrk.js is already running')
}
else {
    var wrk = {};
    window.wrk = wrk;
}