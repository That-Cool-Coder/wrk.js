wrk.GameEngine.Button = class extends wrk.GameEngine.DrawableEntity {
    /** Buttons are very limited at the moment. 
     * They are just rectangles. Keep them horizontal (at angle 0 or pi)
     * or the mouse checking will be off
    */
    constructor(name, localPosition, localAngle, texture, textureSize,
        clickAreaSize=wrk.v.copy(textureSize), anchor) {
        super(name, localPosition, localAngle, texture, textureSize, anchor);

        this.clickAreaSize = wrk.v.copy(clickAreaSize);

        this.mouseHovering = false;

        this.sprite.interactive = true;

        this.mouseDownCallbacks = new wrk.FunctionGroup();
        this.sprite.mousedown = data => this.mouseDownCallbacks.call(data);
        
        this.mouseUpCallbacks = new wrk.FunctionGroup();
        this.sprite.mouseup = data => this.mouseUpCallbacks.call(data);

        this.mouseOverCallbacks = new wrk.FunctionGroup();
        this.sprite.mouseover = data => {
            this.mouseHovering = true;
            this.mouseOverCallbacks(data);
        }

        this.mouseOutCallbacks = new wrk.FunctionGroup();
        this.sprite.mouseover = data => {
            this.mouseHovering = false;
            this.mouseOutCallbacks(data);
        }
    }
}