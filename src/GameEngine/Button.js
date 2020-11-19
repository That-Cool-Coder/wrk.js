wrk.GameEngine.Button = class extends wrk.GameEngine.DrawableEntity {
    constructor(name, localPosition, localAngle, size, text, textFormat={},
        background=PIXI.Texture.Empty, anchor) {

        super(name, localPosition, localAngle, background, size, anchor);
        
        this.label = new wrk.GameEngine.Label(this.name + 'label',
            this.localPosition, this.localAngle, text, textFormat);
    }
}