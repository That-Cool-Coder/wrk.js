wrk.GameEngine = class {
    constructor() {
        this.crntScene = null;
        this.managers = [];
    }

    addManager(manager) {
        this.manager.push(scene);
    }

    selectScene(scene) {
        // If scene is null then no scene will be drawn

        var oldScene = this.crntScene;
        if (oldScene != null) {
            oldScene.deselect();
        }

        this.crntScene = scene;
        if (this.crntScene != null) {
            this.crntScene.select();
        }
    }
}