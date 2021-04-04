wrk.GameEngine.Scene = class extends wrk.GameEngine.Entity {
    constructor(name, localPosition=wrk.v(0, 0), localAngle=0) {
        super(name, localPosition, localAngle);

        this.pixiContainer = new PIXI.Container();

        this.isSelected = false;
        this.flattenedChildList = [];
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
            child.setContainingScene(this);
        }
    }

    onSelected() {
        // Overwrite
    }

    /** Do not call this directly, call through wrk.GameEngine.selectScene() */
    select(pixiApp) {
        this.isSelected = true;

        this.parentAppPointer = pixiApp;
        
        pixiApp.stage.addChild(this.pixiContainer);

        this.startBackgroundSound();
        this.onSelected();
    }

    onDeselected() {
        // Overwrite
    }

    /** Do not call this directly, call through wrk.GameEngine.deselectCrntScene() */
    deselect() {
        this.isSelected = false;
        this.parentAppPointer.stage.removeChild(this.pixiContainer);
        this.parentAppPointer = null;

        this.stopBackgroundSound();
        this.onDeselected();
    }

    setParent(gameEngine) {
        this.parent = gameEngine;
    }

    internalUpdate() {
        this.updateChildren();
        this.update();

        this.pixiContainer.rotation = this.localAngle;
    }
}