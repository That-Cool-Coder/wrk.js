wrk.GameEngine.Entity = class {
    constructor(name, localPosition, localAngle) {
        this.rename(name);

        this.setLocalPosition(localPosition);
        this.setLocalAngle(localAngle);

        this.setParentContainer(null); // specify that this 
        
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
        if (! container.children.includes(this.sprite)) {
            this.setParentContainer(container);
            this.addChildrenToPixiContainer(container);
        }
    }

    /** Do not call directly, call through wrk.GameEngine.Entity.addToPixiContainer */
    addChildrenToPixiContainer(container) {
        this.children.forEach(child => {
            child.addToPixiContainer(container);
        });
    }

    removeFromPixiContainer() {
        this.removeChildrenFromPixiContainer();
        this.setParentContainer(null);
    }

    removeChildrenFromPixiContainer() {
        this.children.forEach(child => {
            child.removeFromPixiContainer()
        });
    }

    setParentContainer(container=null) {
        // Internal

        this.parentContainer = container;
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
        this.setLocalPosition(wrk.v.copySub(position, this.parent.globalPosition));
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

    addToEntityList() {
        // Internal function

        wrk.GameEngine.entitiesInScene.push(this);
    }

    removeFromEntityList() {
        // Internal function

        wrk.arr.removeItem(wrk.GameEngine.entitiesInScene, this);
    }

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
        
        if (this.parent != null) {
            this.setParentContainer(this.parent.parentContainer);

            if (this.parent.parentContainer != null) {
                this.addToPixiContainer(this.parent.parentContainer);
            }

        }
        else {
            this.setParentContainer(null);
        }
    }

    removeParent() {
        this.setParent(null);
        this.setParentContainer(null);
    }

    // Update

    updateChildren() {
        this.children.forEach(child => {
            child.internalUpdate();
        });
    }

    internalUpdate() {
        this.updateChildren();
        this.update();
    }

    // To be overwritten by the libarry user - just here as a safety
    update() {}
}