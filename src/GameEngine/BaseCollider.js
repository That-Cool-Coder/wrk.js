wrk.GameEngine.colliderTypes = {
    circle : 'circle'
}

wrk.GameEngine.BaseCollider = class extends wrk.GameEngine.Entity {
    constructor(name, type, localPosition, localAngle) {
        super(name, localPosition, localAngle);

        this.type = type;

        this.colliding = false;

        this.collideStartCallbacks = new wrk.FunctionGroup();
        this.collideEndCallbacks = new wrk.FunctionGroup();
    }
}