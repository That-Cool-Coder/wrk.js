wrk.GameEngine.Label = class extends wrk.GameEngine.Entity {
    constructor(name, text, localPosition, localAngle,
        format={}, anchor=wrk.v(0.5, 0.5)) {
        super(name, localPosition, localAngle);

        this.setTextFormat(format);
        this.setText(text);
        this.setAnchor(anchor);
    }

    addToPixiContainer(container) {
        container.addChild(this.textSprite);
        this.addChildrenToPixiContainer(container);
    }

    removeFromPixiContainer() {
        var container = this.textSprite.parent;
        if (container != undefined) {
            container.removeChild(this.textSprite);
            this.removeChildrenFromPixiContainer();
        }
    }

    setTextFormat(format) {
        this.textFormat = wrk.obj.oneLevelCopy(format);
        
        // Protection for before the text is set
        if (this.text != undefined) {
            
            this.updateTextSprite();
        }
    }

    setText(text) {
        this.text = text;

        // Protection for before the text format is set
        if (this.text != undefined) {
            
            this.updateTextSprite();
        }
    }

    setAnchor(position) {
        // from 0,0 to 1,1

        this.textSprite.anchor.x = position.x;
        this.textSprite.anchor.y = position.y;
    }

    setVisibile(state) {
        this.textSprite.visibile = state;
    }

    internalUpdate() {
        this.updateChildren();
        this.update();

        var globalPosition = this.globalPosition;
        this.textSprite.position.set(globalPosition.x, globalPosition.y);
        this.textSprite.rotation = this.globalAngle + wrk.PI;
    }

    updateTextSprite() {
        // Quite slow so don't call if you don't need to

        if (this.textSprite != undefined) {
            // Remove the old sprite
            var oldParent = this.textSprite.parent;
            oldParent.removeChild(this.textSprite);
        }

        this.textSprite = new PIXI.Text(this.text, this.textFormat);

        if (oldParent != undefined) {
            oldParent.addChild(this.textSprite);
        }
    }
}