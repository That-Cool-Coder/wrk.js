wrk.GameEngine.Particle = class extends DrawableEntity {
    // This class is only designed to be used internally by wrk.GameEngine.ParticleEffect

    constructor(name, localPosition, localAngle, texture, size, velocity, effectors) {
        super(name, localPosition, localAngle, texture, size);
        this.addTag('Particle');
        this.velocity = wrk.v.copy(velocity);
        this.effectors = effectors;

        this.acceleration = wrk.v(0, 0);
    }

    update() {
        this.feelEffectors();

        var distToMove = wrk.v.copyMult(this.velocity, wrk.GameEngine.deltaTime);
        wrk.v.add(this.localPosition, distToMove);

        wrk.v.makeZero(this.acceleration);
    }
}