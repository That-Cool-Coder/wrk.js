wrk.GameEngine.Scene = class extends Entity {
    constructor(name, parent, localPosition, localAngle) {
        super(name, parent, localPosition, localAngle);

        this.pixiContainer = new PIXI.Container();

        this.isSelected = false;
    }

    addChild(child) {
        var inheritedFunc = wrk.GameEngine.Entity.prototype.addChild.bind(this);
        var childAdded = inheritedFunc(child);

        if (childAdded) {
            this.pixiContainer.addChild(child.getDrawableChildren());
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