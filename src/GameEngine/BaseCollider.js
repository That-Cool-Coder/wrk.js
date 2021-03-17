wrk.GameEngine.colliderTypes = {
    circle : 'circle'
}

wrk.GameEngine.BaseCollider = class extends wrk.GameEngine.Entity {
    constructor(name, localPosition, localAngle) {
        super(name, localPosition, localAngle);

        this.colliding = false;

        this.collideStartCallbacks = new wrk.FunctionGroup();
        this.collideEndCallbacks = new wrk.FunctionGroup();
    }
}