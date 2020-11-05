wrk.GameEngine.Scene = class extends wrk.GameEngine.Entity {
    constructor(name, localPosition, localAngle) {
        super(name, localPosition, localAngle);

        this.pixiContainer = new PIXI.Container();

        this.isSelected = false;
    }

    addChild(child) {
        var inheritedFunc = wrk.GameEngine.Entity.prototype.addChild.bind(this);
        var childAdded = inheritedFunc(child);

        if (childAdded) {
            child.addToPixiContainer(this.pixiContainer);
        }
    }

    /** Do not call this directly, call through wrk.GameEngine.selectScene() */
    select(pixiApp) {
        this.isSelected = true;
        
        pixiApp.stage.addChild(this.pixiContainer);
    }

    /** Do not call this directly, call through wrk.GameEngine.deselectScene() */
    deselect() {
        this.isSelected = false;
    }
}