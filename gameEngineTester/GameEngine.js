wrk.GameEngine = class {
    constructor() {

        this.scenes = [];
        this.crntScene = null;

        this.layers = [];
    }

    addScene(scene) {
        this.scenes.push(scene);
    }

    selectScene(scene) {
        // If scene is null then no scene will be drawn

        var oldScene = this.crntScene;
        if (oldScene != null) {
            oldScene.deselect();
        }

        this.crntScene = scene;
        this.crntScene.select();
    }
}