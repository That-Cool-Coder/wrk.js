wrk.GameEngine.Particle = class extends wrk.GameEngine.DrawableEntity {
    // This class is only designed to be used internally by wrk.GameEngine.ParticleEffect

    static airFrictionMult = 0.001;

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
        if (this.effectorStrengths.airFriction) {
            var dragAmount = wrk.v.mag(this.velocity);
            dragAmount *= dragAmount;
            dragAmount *= this.effectorStrengths.airFriction *
                wrk.GameEngine.Particle.airFrictionMult;

            var dragVector = wrk.v.copy(this.velocity);
            wrk.v.normalize(dragVector);
            wrk.v.mult(dragVector, dragAmount);
            wrk.v.sub(this.acceleration, dragVector);
        }
    }

    update() {
        if (this.timeToLive < 0) this.parent.removeChild(this);

        if (this.effectorStrengths) this.feelEffectors();

        wrk.v.mult(this.acceleration, wrk.GameEngine.deltaTime);
        wrk.v.add(this.velocity, this.acceleration);

        var distToMove = wrk.v.copyMult(this.velocity, wrk.GameEngine.deltaTime);
        wrk.v.add(this.localPosition, distToMove);

        wrk.v.makeZero(this.acceleration);

        this.timeToLive -= wrk.GameEngine.deltaTime;
    }
}