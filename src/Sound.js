wrk.Sound = class {
    constructor(url) {
        fetch(url)
            .then(function(response) {return response.blob()})
            .then(function(blob) {
                this.fileBlob = URL.createObjectURL(blob);
                this.audio = new Audio(fileBlob); // forces a request for the blob
            });
        
    }

    play() {
        this.audio.play();
    }

    stop() {
        this.audio.stop();
    }

    pause() {
        this.audio.pause();
    }

    loop() {
        this.onended = () => this.play();
    }

    set onended(val) {
        this.audio.onended = val;
    }
}