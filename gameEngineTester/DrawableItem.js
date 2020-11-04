wrk.GameEngine.DrawableItem = class extends Entity {
    constructor(name, parent, localPosition, localAngle, texture, textureSize) {
        super(name, parent, localPosition, localAngle);

        this.setTextureSize(textureSize);

        this.sprite = new PIXI.Sprite(this.graphics.texture);
        this.sprite.width = this.textureSize.x;
        this.sprite.height = this.textureSize.y;
    }

    setTextureSize(size) {
        this.textureSize = wrk.v.copy(size);
    }
}