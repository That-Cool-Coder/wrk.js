wrk.GameEngine.Button = class extends wrk.GameEngine.DrawableEntity {
    constructor(name, localPosition, localAngle, size, background=null,
        text='', textFormat={}, anchor) {

        if (background === null) background = PIXI.Texture.Empty;

        super(name, localPosition, localAngle, background, size, anchor);
        
        this.label = new wrk.GameEngine.Label(this.name + ' label', text,
            wrk.v(0, 0), 0, textFormat);
        this.addChild(this.label)
    }
}