wrk.GameEngine.Entity = class {
    constructor(name, localPosition, localAngle) {
        this.rename(name);

        this.setLocalPosition(localPosition);
        this.setLocalAngle(localAngle);
        
        this.children = [];
    }

    // Misc
    // ----

    rename(name) {
        this.name = name;
    }

    // Pixi
    // ----

    addToPixiContainer(container) {
        // do nothing except add children - overwrite in drawable entities
        this.addChildrenToPixiContainer(container);
    }

    /** Do not call directly, call through wrk.GameEngine.Entity.addToPixiContainer */
    addChildrenToPixiContainer(container) {
        this.children.forEach(child => {
            child.addToPixiContainer(container);
        })
    }

    removeFromPixiContainer() {
        this.removeChildrenFromPixiContainer();
    }

    removeChildrenFromPixiContainer() {
        this.children.forEach(child => child.removeFromPixiContainer());
    }

    // Position
    // --------

    /** Try not to use this extensively because it's recursive and laggy */
    get globalPosition() {
        var rotatedLocalPosition = wrk.v.copy(this.localPosition);
        wrk.v.rotate(rotatedLocalPosition, this.parent.localAngle);
        return wrk.v.copyAdd(this.parent.globalPosition, rotatedLocalPosition);
    }

    setLocalPosition(position) {
        this.localPosition = wrk.v.copy(position);
    }

    setGlobalPosition(position) {
        this.position = wrk.v.copySub(position, this.parent.globalPosition);
    }

    // Angle
    // -----

    get globalAngle() {
        return this.parent.globalAngle + this.localAngle;
    }

    setLocalAngle(angle) {
        this.localAngle = angle;
    }

    setGlobalAngle(angle) {
        this.setLocalAngle(angle - this.parent.globalAngle);
    }

    // Children/parents
    // ----------------

    removeChildren() {
        // While there are children, remove the first child
        while (this.children.length > 0) {
            this.removeChild(this.children[0]);
        }
    }

    addChild(entity) {
        // If the entity is already a child, then don't do anything
        if (this.children.includes(entity)) {
            wrk.internalWarn(`Could not add entity '${entity.name}' to entity '${this.name}' as it is already a child`);
            return false;
        }
        else {
            this.children.push(entity);
            entity.setParent(this);
            return true;
        }
    }

    removeChild(entity) {
        var indexOfEntity = this.children.indexOf(entity);

        // If the entity is not a child, then do nothing
        if (indexOfEntity == -1) {
            wrk.internalWarn(`Could not remove entity '${entity.name}' from entity '${this.name}' as it is not a child`);
            return false;
        }
        else {
            wrk.arr.removeItem(this.children, entity);
            entity.removeFromPixiContainer();
            entity.removeParent();
            return true;
        }
    }

    setParent(parent) {
        this.parent = parent;
    }

    removeParent() {
        this.setParent(null);
    }

    updateChildren() {
        this.children.forEach(child => {
            child.update();
        });
    }

    update() {
        this.updateChildren();
    }
}