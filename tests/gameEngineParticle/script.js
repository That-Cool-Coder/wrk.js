wrk.GameEngine.init(wrk.v(800, 500), 1, 0x000000);

var mainScene = new wrk.GameEngine.Scene('Main scene');

var particleTemplate = {
    textures : [wrk.GameEngine.Texture.fromUrl('boom.png')],
    minSize : wrk.v(30, 30),
    maxSize : wrk.v(60, 60),
    minSpeed : 20,
    maxSpeed : 300,
    minTimeToLive : 1,
    maxTimeToLive : 3,
    effectorStrengths : {
        gravity : 120,
        gravityDirection : 0
    }
}

var emitterData = {
    shape : 'circle',
    amount : 5000,
    interval : 0,
    delay : 1
}

var effect = new wrk.GameEngine.ParticleEffect('particle effect',
    wrk.v.copyDiv(wrk.GameEngine.canvasSize, 2), 0,
    particleTemplate, emitterData);

mainScene.addChild(effect);

wrk.GameEngine.selectScene(mainScene);
effect.play();