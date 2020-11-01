wrk.GameEngine.PhysicsManager = class {
    constructor(fixedPhysicsStep=1/60) {
        this.fixedPhysicsStep = fixedPhysicsStep;

        // Whether it uses deltaTime or whether it uses fixedPhysicsStep
        this.updateIsFixed = false;
    }

    setUpdateMode(updateIsFixed) {
        this.updateIsFixed = this.updateIsFixed;
    }

    fixedUpdate() {
        this.update(this.fixedPhysicsStep);
    }

    update(deltaTime) {

    }
}