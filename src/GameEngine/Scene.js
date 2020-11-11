wrk.GameEngine.Scene = class extends wrk.GameEngine.Entity {
    constructor(name, localPosition, localAngle) {
        super(name, localPosition, localAngle);

        this.container = new PIXI.Container();

        this.isSelected = false;
    }

    get globalAngle() {
        return 0;
    }

    setBackgroundSound(sound) {
        this.backgroundSound = sound;
        wrk.internalLog('Does this need a copy or something?');

        if (this.isSelected) {
            this.startBackgroundSound();
        }
    }

    startBackgroundSound() {
        if (this.backgroundSound != null) {
            this.backgroundSound.loop();
        }
    }

    stopBackgroundSound() {
        if (this.backgroundSound != null) {
            this.backgroundSound.stop();
        }
    }

    addChild(child) {
        var inheritedFunc = wrk.GameEngine.Entity.prototype.addChild.bind(this);
        var childAdded = inheritedFunc(child);

        if (childAdded) {
            child.addToPixiContainer(this.container);
        }
    }

    /** Do not call this directly, call through wrk.GameEngine.selectScene() */
    select(pixiApp) {
        this.isSelected = true;

        this.parentAppPointer = pixiApp;
        
        pixiApp.stage.addChild(this.container);

        this.startBackgroundSound();
    }

    /** Do not call this directly, call through wrk.GameEngine.deselectCrntScene() */
    deselect() {
        this.isSelected = false;
        this.parentAppPointer.stage.removeChild(this.container);
        this.parentAppPointer = null;

        this.stopBackgroundSound();
    }

    update() {
        this.updateChildren();

        this.container.rotation = this.localAngle;
    }
}