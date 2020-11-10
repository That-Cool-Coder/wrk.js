// Initialize some handy things for quick testing
var v = wrk.v(0, 0);
var a = wrk.attitude(0, 0, 0);

// Game engine stuff

wrk.GameEngine.init(wrk.v(500, 500), 1, 0x000000);

var mainScene = new wrk.GameEngine.Scene('main scene', wrk.v(0, 0), 0, wrk.v(0.5, 0.5));

var texture = PIXI.Texture.from('assets/characterIdle.png');
var person = new wrk.GameEngine.DrawableEntity('person', wrk.v(250, 250), 0, texture, wrk.v(20, 100));

mainScene.addChild(person);
wrk.GameEngine.selectScene(mainScene);
