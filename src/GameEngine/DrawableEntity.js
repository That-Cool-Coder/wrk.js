wrk.GameEngine.DrawableEntity = class extends wrk.GameEngine.Entity {
    constructor(name, localPosition, localAngle, texture, textureSize) {
        super(name, localPosition, localAngle);

        this.setTextureSize(textureSize);

        this.sprite = new PIXI.Sprite(texture);
        this.sprite.width = this.textureSize.x;
        this.sprite.height = this.textureSize.y;
    }

    setTextureSize(size) {
        this.textureSize = wrk.v.copy(size);
    }

    addToPixiContainer(container) {
        container.addChild(this.sprite);
    }

    update() {
        var inheritedFunc = wrk.GameEngine.Entity.prototype.update.bind(this);
        inheritedFunc();

        var globalPosition = this.globalPosition;
        this.sprite.position.set(globalPosition.x, globalPosition.y);
        this.sprite.rotation = -this.globalAngle;
    }
}