wrk.GameEngine.Entity = class {
    constructor(name, localPosition, size, angle) {
        this.name = name;

        this.parent = null;

        this.moveToLocal(localPosition);
        this.resize(size);
        this.pointInDirection(angle);

        this.removeChildren;
    }

    // Position
    // --------

    get globalPosition() {
        return wrk.v.copyAdd(this.parent.globalPosition, this.localPosition);
    }

    moveToLocal(position) {
        this.localPosition = wrk.v.copy(position);
    }

    /** fixme */
    moveToGlobal(position) {
        this.position = position;
    }

    resize(size) {
        this.size = wrk.v.copy(size);
    }

    pointInDirection(angle) {
        this.angle = angle;
    }

    // Children/parents
    // ----------------

    removeChildren() {
        this.children = [];
    }

    addChild(entity) {
        // If the entity is already a child, then don't do anything
        if (this.children.includes(entity)) {
            wrk.internalWarn(`Could not add entity '${entity.name}' to entity '${this.name}' as it is already a child`);
        }
        else {
            this.children.push(entity);
            entity.setParent(this);
        }
    }

    removeChild(entity) {
        var indexOfEntity = this.children.indexOf(entity);

        // If the entity is not a child, then do nothing
        if (indexOfEntity == -1) {
            wrk.internalWarn(`Could not remove entity '${entity.name}' from entity '${this.name}' as it is not a child`);
        }
        else {
            wrk.arr.removeItem(this.children, entity);
        }
    }

    setParent(parent) {
        this.parent = parent;
    }

    removeParent() {
        this.parent = null;
    }
}