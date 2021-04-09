wrk.GameEngine.init(wrk.v(800, 500), 1, 0x000000);

var mainScene = new wrk.GameEngine.Scene('Main scene');

var particleTemplate = {
    texture : wrk.GameEngine.Texture.fromUrl('boom.png'),
    minSize : wrk.v(30, 30),
    maxSize : wrk.v(60, 60),
    minSpeed : 20,
    maxSpeed : 300,
    minTimeToLive : 1,
    maxTimeToLive : 3,
    effectorStrengths : {
        gravity : 400,
        gravityDirection : 0,
        airFriction : 4
    }
}

var emitterData = {
    particleTemplate : particleTemplate,
    shape : 'circle',
    amount : 50,
    interval : 0,
    delay : 0.25
}

var effect = new wrk.GameEngine.ParticleEffect('particle effect',
    wrk.v.copyDiv(wrk.GameEngine.canvasSize, 2), 0, emitterData);

mainScene.addChild(effect);

wrk.GameEngine.selectScene(mainScene);
effect.play();