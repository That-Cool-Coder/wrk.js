wrk.GameEngine.Scene = class extends wrk.GameEngine.Entity {
    constructor(name, localPosition, localAngle, anchor=wrk.v(0.5, 0.5)) {
        super(name, localPosition, localAngle);

        this.pixiContainer = new PIXI.Container();
        this.setAnchor(anchor);

        this.isSelected = false;
    }

    addChild(child) {
        var inheritedFunc = wrk.GameEngine.Entity.prototype.addChild.bind(this);
        var childAdded = inheritedFunc(child);

        if (childAdded) {
            child.addToPixiContainer(this.pixiContainer);
        }
    }

    setAnchor(position) {
        this.anchor = wrk.v.copy(position);
    }

    /** Do not call this directly, call through wrk.GameEngine.selectScene() */
    select(pixiApp) {
        this.isSelected = true;

        this.parentAppPointer = pixiApp;
        
        pixiApp.stage.addChild(this.pixiContainer);
        this.setAnchor(this.anchor);
    }

    /** Do not call this directly, call through wrk.GameEngine.deselectScene() */
    deselect() {
        this.isSelected = false;
        this.parentAppPointer = null;
    }

    update() {
        this.updateChildren();

        this.pixiContainer.rotation = this.globalAngle;

        var globalPosition = this.globalPosition;
        this.pixiContainer.position.set(globalPosition.x, globalPosition.y);
    }
}