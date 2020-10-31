wrk.GameEngine.PhysicsEntity = class extends wrk.GameEngine.Entity {
    constructor(name, position, size, mass, angle, momentOfIntertia) {
        super(name, position, size, angle);

        this.setMass(mass);
        this.setMomentOfInertia(momentOfIntertia);
    }

    setMass(mass) {
        this.mass = mass;
    }

    setMomentOfInertia(momentOfIntertia) {
        this.momentOfIntertia = momentOfIntertia;
    }
}