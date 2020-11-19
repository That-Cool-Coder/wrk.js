wrk.GameEngine.Label = class extends wrk.GameEngine.Entity {
    constructor(name, localPosition, localAngle, text, format={}) {
        super(name, localPosition, localAngle);

        this.setTextFormat(format);
        this.setText(text);
    }

    addToPixiContainer(container) {
        container.addChild(this.sprite);
        this.addChildrenToPixiContainer(container);
    }

    removeFromPixiContainer() {
        var container = this.sprite.parent;
        if (container != undefined) {
            container.removeChild(this.sprite);
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

    setVisibile(state) {
        this.sprite.visibile = state;
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

        this.textSprite = new PIXI.Text(this.text, this.textFormat);
    }
}