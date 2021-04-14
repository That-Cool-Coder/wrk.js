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
        this.sprite.touchstart = data => this.mouseDownCallbacks.call(data);
        
        this.mouseUpCallbacks = new wrk.FunctionGroup();
        this.sprite.mouseup = data => this.mouseUpCallbacks.call(data);
        this.sprite.touchend = data => this.mouseUpCallbacks.call(data);

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

    getGlobalCornerPositions() {
        // Cache global position here for more speed
        var globalPosition = this.globalPosition;
        
        var topLeftPos = wrk.v(this.textureSize.x * -this.anchor.x,
            this.textureSize.y * -this.anchor.y);
        wrk.v.rotate(topLeftPos, this.localAngle);
        wrk.v.add(topLeftPos, globalPosition);

        var topRightPos = wrk.v(this.textureSize.x * this.anchor.x,
            this.textureSize.y * -this.anchor.y);
        wrk.v.rotate(topRightPos, this.localAngle);
        wrk.v.add(topRightPos, globalPosition);

        var bottomRightPos = wrk.v(this.textureSize.x * this.anchor.x,
            this.textureSize.y * this.anchor.y);
        wrk.v.rotate(bottomRightPos, this.localAngle);
        wrk.v.add(bottomRightPos, globalPosition);

        var bottomLeftPos = wrk.v(this.textureSize.x * -this.anchor.x,
            this.textureSize.y * this.anchor.y);
        wrk.v.rotate(bottomLeftPos, this.localAngle);
        wrk.v.add(bottomLeftPos, globalPosition);

        return [topLeftPos, topRightPos, bottomRightPos, bottomLeftPos];
    }

    setTextureSize(size) {
        this.textureSize = wrk.v.copy(size);
        this.sprite.width = this.textureSize.x;
        this.sprite.height = this.textureSize.y;
    }

    setContainingScene(scene) {
        this.containingScene = scene;
        if (scene != null) {
            scene.pixiContainer.addChild(this.sprite);
            this.setChildrensContainingScene(scene);
            this.containingScene.flattenedChildList.push(this);
        }
    }

    removeFromContainingScene() {
        if (this.containingScene != null) {
            this.containingScene.pixiContainer.removeChild(this.sprite);
            this.removeChildrenFromContainingScene();
            wrk.arr.removeItem(this.containingScene.flattenedChildList, this);
        }
        this.containingScene = null;
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
        // from 0,0 to 1,1
        
        this.anchor = wrk.v.copy(position);
        this.sprite.anchor.x = position.x;
        this.sprite.anchor.y = position.y;
    }

    setTint(tint) {
        this.tint = tint;
        this.sprite.tint = tint;
    }

    setVisible(state) {
        this.sprite.visible = state;
    }

    internalUpdate() {
        var globalPosition = this.globalPosition;
        this.sprite.position.set(globalPosition.x, globalPosition.y);
        this.sprite.rotation = this.globalAngle + wrk.PI;

        // This needs to be after the block above - 
        // otherwise, if this entity's parent gets removed in update(),
        // the call to globalPosition above will break
        this.updateChildren();
        this.update();
    }
}