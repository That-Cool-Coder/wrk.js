wrk.GameEngine.Scene = class extends wrk.GameEngine.Entity {
    constructor(name, localPosition, localAngle, anchor=wrk.v(0.5, 0.5)) {
        super(name, localPosition, localAngle);

        this.pixiContainer = new PIXI.Container();
        this.anchor = anchor;

        this.parentAppPointer = null; // A pointer the parent pixi app

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

        if (this.isSelected) {
            var pixiApp = this.parentAppPointer;
            this.pixiContainer.pivot.x = this.anchor.x * pixiApp.renderer.width;
            this.pixiContainer.pivot.y = this.anchor.y * pixiApp.renderer.height;
        }
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
}