wrk.GameEngine.Particle = class extends wrk.GameEngine.DrawableEntity {
    // This class is only designed to be used internally by wrk.GameEngine.ParticleEffect

    constructor(name, localPosition, localAngle, texture, size,
            velocity, timeToLive, effectorStrengths) {
        super(name, localPosition, localAngle, texture, size);
        this.addTag('Particle');
        this.velocity = wrk.v.copy(velocity);
        this.timeToLive = timeToLive;
        this.effectorStrengths = effectorStrengths;

        this.acceleration = wrk.v(0, 0);
    }

    feelEffectors() {
        if (this.effectorStrengths.gravity) {
            var forceVector = wrk.v(0, this.effectorStrengths.gravity);
            wrk.v.rotate(forceVector, this.effectorStrengths.gravityDirection);
            wrk.v.add(this.acceleration, forceVector);
        }
    }

    update() {
        if (this.timeToLive < 0) this.parent.removeChild(this);

        this.feelEffectors();

        wrk.v.mult(this.acceleration, wrk.GameEngine.deltaTime);
        wrk.v.add(this.velocity, this.acceleration);

        var distToMove = wrk.v.copyMult(this.velocity, wrk.GameEngine.deltaTime);
        wrk.v.add(this.localPosition, distToMove);

        wrk.v.makeZero(this.acceleration);

        this.timeToLive -= wrk.GameEngine.deltaTime;
    }
}