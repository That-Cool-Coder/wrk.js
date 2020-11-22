wrk.GameEngine.DrawableEntity = class extends wrk.GameEngine.Entity {
    constructor(name, localPosition, localAngle, texture, textureSize, anchor=wrk.v(0.5, 0.5)) {
        super(name, localPosition, localAngle);

        this.setTexture(texture, textureSize);
        this.setAnchor(anchor);
        this.setTint(0xffffff);

        this.setupMouseInteraction();
    }

    setupMouseInteraction() {
        this.mouseHovering = false;

        this.sprite.interactive = true;

        this.mouseDownCallbacks = new wrk.FunctionGroup();
        this.sprite.mousedown = data => this.mouseDownCallbacks.call(data);
        
        this.mouseUpCallbacks = new wrk.FunctionGroup();
        this.sprite.mouseup = data => this.mouseUpCallbacks.call(data);

        this.mouseOverCallbacks = new wrk.FunctionGroup();
        this.sprite.mouseover = data => {
            this.mouseHovering = true;
            this.mouseOverCallbacks.call(data);
        }

        this.mouseOutCallbacks = new wrk.FunctionGroup();
        this.sprite.mouseout = data => {
            this.mouseHovering = false;
            this.mouseOutCallbacks.call(data);
        }
    }

    setTextureSize(size) {
        this.textureSize = wrk.v.copy(size);
        this.sprite.width = this.textureSize.x;
        this.sprite.height = this.textureSize.y;
    }

    addToPixiContainer(container) {
        container.addChild(this.sprite);
        this.setParentContainer(container);
        this.addChildrenToPixiContainer(container);
    }

    removeFromPixiContainer() {
        var container = this.sprite.parent;
        this.setParentContainer(null);
        if (container != undefined) {
            container.removeChild(this.sprite);
            this.removeChildrenFromPixiContainer();
        }
    }

    setTexture(texture, textureSize=null) {
        if (this.sprite != undefined) {
            var container = this.sprite.parent;

            var anchor = this.sprite.anchor;

            if (container != undefined) {
                this.removeFromPixiContainer(); // remove old sprite
            }
        }

        this.sprite = new PIXI.Sprite(texture);
        if (textureSize != null) {
            this.setTextureSize(textureSize);
        }
        if (this.tint != undefined) {
            this.setTint(this.tint);
        }

        if (container != undefined) {
            this.addToPixiContainer(container); // add new container
        }
        if (anchor != undefined) {
            this.setAnchor(anchor);
        }
    }

    setAnchor(position) {
        // from 0,0 to 1, 1

        this.sprite.anchor.x = position.x;
        this.sprite.anchor.y = position.y;
    }

    setTint(tint) {
        this.tint = tint;
        this.sprite.tint = tint;
    }

    setVisibile(state) {
        this.sprite.visibile = state;
    }

    internalUpdate() {
        this.updateChildren();
        this.update();

        var globalPosition = this.globalPosition;
        this.sprite.position.set(globalPosition.x, globalPosition.y);
        this.sprite.rotation = this.globalAngle + wrk.PI;
    }
}