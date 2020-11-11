wrk.GameEngine.DrawableEntity = class extends wrk.GameEngine.Entity {
    constructor(name, localPosition, localAngle, texture, textureSize, anchor=wrk.v(0.5, 0.5)) {
        super(name, localPosition, localAngle);

        this.setTexture(texture, textureSize);
        this.setAnchor(anchor);
    }

    setTextureSize(size) {
        this.textureSize = wrk.v.copy(size);
        this.sprite.width = this.textureSize.x;
        this.sprite.height = this.textureSize.y;
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

    setTexture(texture, textureSize=null) {
        this.sprite = new PIXI.Sprite(texture);
        if (textureSize != null) {
            this.setTextureSize(textureSize);
        }
    }

    setAnchor(position) {
        // from 0,0 to 1, 1

        this.sprite.anchor.x = position.x;
        this.sprite.anchor.y = position.y;
    }

    internalUpdate() {
        this.updateChildren();
        this.update();

        var globalPosition = this.globalPosition;
        this.sprite.position.set(globalPosition.x, globalPosition.y);
        this.sprite.rotation = this.globalAngle + wrk.PI;
    }
}