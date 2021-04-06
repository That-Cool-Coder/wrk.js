wrk.GameEngine.ParticleEffect = class extends wrk.GameEngine.Entity {
    /*
    Example of particleTemplate:
    {
        textures : [<wrk.GameEngine.Texture>],
        minSize : <wrk.v>,
        maxSize : <wrk.v>,
        minSpeed : <number>,
        maxSpeed : <number>
    }

    Example of emitterData:
    {
        shape : <'circle'||'arc'||'line'>,
        amount : <number>,
        delay : <number> (in milliseconds)
    }
    */

    timer = 0;
    playing = false;

    constructor(name, localPosition, localAngle, particleTemplate, emitterData) {
        super(name, localPosition, localAngle);
        this.particleTemplate = particleTemplate;
        this.emitterData = emitterData;
    }

    play() {
        this.removeChildren();
        this.timer = 0;
        this.playing = true;
    }

    update() {
        if (this.playing) {
            this.moveParticles();
            this.killOldParticles();
        }
    }
}