wrk.Sound = class extends Audio {
    constructor(url) {
        super(url);
    }

    loop() {
        this.onended = () => this.play();
    }
}