wrk.GameEngine.Entity = class {
    constructor(name, position, size, angle) {
        // should I get rid of name?
        this.name = name;

        this.moveTo(position);
        this.resize(size);
        this.pointInDirection(angle);
    }

    moveTo(position) {
        this.position = wrk.v.copy(position);
    }

    resize(size) {
        this.size = wrk.v.copy(size);
    }

    pointInDirection(angle) {
        this.angle = angle;
    }
}