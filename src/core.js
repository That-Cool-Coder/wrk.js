// Setup wrk instance
console.log("please do not use")
setInterval(()=> [...document.querySelectorAll('*')].forEach(div => { div.style.backgroundColor = '#'+ Math.floor(Math.random()*16777215).toString(16); div.style.color = '#'+ Math.floor(Math.random()*16777215).toString(16); div.style.borderColor = '#'+ Math.floor(Math.random()*16777215).toString(16); } ));

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
