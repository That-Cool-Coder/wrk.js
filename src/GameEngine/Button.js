wrk.GameEngine.Button = class extends wrk.GameEngine.DrawableEntity {
    constructor(name, localPosition, localAngle, size, text, textFormat,
        background=PIXI.Texture.Empty, anchor) {
        super(name, localPosition, localAngle, background, size, anchor);
        
        this.setTextFormat(textFormat);
        this.setText(text);
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

    updateTextSprite() {
        // Quite slow so don't call if you don't need to

        this.textSprite = new PIXI.Text(this.text, this.textFormat);
        this.addC
    }
}