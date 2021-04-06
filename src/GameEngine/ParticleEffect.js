wrk.GameEngine.ParticleEffect = class extends wrk.GameEngine.Entity {
    /*
    Example of particleTemplate:
    {
        textures : [<wrk.GameEngine.Texture>, <wrk.GameEngine.Texture>],
        minSize : <wrk.v>,
        maxSize : <wrk.v>,
        minSpeed : <number>,
        maxSpeed : <number>,
        minTimeToLive : <number>, (seconds)
        maxTimeToLive : <number>, (seconds)
        effectorStrengths : {
            gravity : <number>,
            gravityDirection : <number> (radians)
        }
    }

    Example of emitterData:
    {
        shape : <'circle'||'arc'||'line'>,
        amount : <number>,
        delay : <number>, (in seconds)
        interval : <number>, (in seconds)
        minAngle : <number>, (only needed for shape:'arc')
        maxAngle : <number> (only needed for shape:'arc')
    }
    */

    timer = 0;
    playing = false;
    particlesRemaining = false;

    constructor(name, localPosition, localAngle, particleTemplate, emitterData) {
        super(name, localPosition, localAngle);
        this.particleTemplate = particleTemplate;
        this.emitterData = emitterData;
    }

    play() {
        this.removeChildren();
        this.timer = this.emitterData.delay || 0;
        this.playing = true;
        this.particlesRemaining = this.emitterData.amount;
    }

    /** Internal method - don't use*/
    addParticle() {
        var position = wrk.v(0, 0);
        var size = wrk.v.random(this.particleTemplate.minSize,
            this.particleTemplate.maxSize);
        var timeToLive = wrk.randflt(this.particleTemplate.minTimeToLive,
            this.particleTemplate.maxTimeToLive);

        var angle = 0;
        var velocity = wrk.v(0, 0);
        switch (this.emitterData.shape) {
            case 'circle':
                angle = wrk.randflt(0, wrk.PI * 2);
                velocity = wrk.v(0, wrk.randflt(this.particleTemplate.minSpeed,
                    this.particleTemplate.maxSpeed));
                wrk.v.rotate(velocity, angle);
                break;
            case 'arc':
                angle = wrk.randflt(this.emitterData.minAngle, this.emitterData.maxAngle);
                velocity = wrk.v(0, wrk.randflt(this.particleTemplate.minSpeed,
                    this.particleTemplate.maxSpeed));
                wrk.v.rotate(velocity, angle);
                break;
            case 'line':
                void 0; // do nothing - line isn't planned yet
                break;
        }

        var particle = new wrk.GameEngine.Particle('particle', position, angle,
            wrk.arr.choose(this.particleTemplate.textures), size,
            velocity, timeToLive, this.particleTemplate.effectorStrengths);
        this.particlesRemaining --
        this.addChild(particle);

        // If effect is instantaneous, then don't wait for next frame
        if (this.emitterData.interval == 0 && this.particlesRemaining > 0) {
            this.addParticle();
        }
    }

    update() {
        if (this.playing) {
            if (this.particlesRemaining > 0) {
                this.timer -= wrk.GameEngine.deltaTime;
                if (this.timer < 0) {
                    this.addParticle();
                    this.timer = this.emitterData.interval;
                }
            }
        }
    }
}