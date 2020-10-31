wrk.GameEngine.Scene = class {
    constructor(name) {
        // maybe get rid of name, idk
        this.name = name;

        this.entities = [];
    }

    addEntity(entity) {
        if (! this.entities.includes(entity)) {
            this.entities.push(entity);
        }
        else {
            wrk.internalWarn(`Could not add entity '${entity.name}' to scene '${this.name}' as it is already in the scene`);
        }
    }

    removeEntity(entity) {
        var index = this.entities.indexOf(entity);

        // If the entity was found, remove it
        if (index > -1) {
            this.entities.splice(index, 1);
        }
        else {
            wrk.internalWarn(`Could not remove entity '${entity.name}' from scene '${this.name}' as it is not in the scene`);
        }
    }

    draw() {

    }

    select() {
        // Call this from wrk.GameEngine.selectScene

        // add contents to container
    }

    deselect() {
        // Call this from wrk.GameEngine.selectScene will null as arg
    }
}