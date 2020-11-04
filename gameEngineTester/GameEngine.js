wrk.GameEngine = class {
    constructor(canvasSize, globalScale, backgroundColor=0x000000) {
        this.setGlobalScale(globalScale);

        this.createPixiApp(canvasSize, backgroundColor);

        this.deselectScene();
    }

    // Pixi stuff and canvas stuff
    // ---------------------------

    createPixiApp(canvasSize, backgroundColor) {
        this.pixiApp = new PIXI.Application({
            width : 1,
            height : 1,
            backgroundColor : backgroundColor,
            resolution : window.devicePixelRatio || 1
        });
        document.body.appendChild(this.pixiApp.view);

        this.setCanvasSize(canvasSize);
    }

    setCanvasSize(size) {
        this.canvasSize = wrk.v.copy(size);

        this.pixiApp.view.width = this.canvasSize.x * this.globalScale;
        this.pixiApp.view.height = this.canvasSize.y * this.globalScale;
    }

    setGlobalScale(scale) {
        this.globalScale = scale;
    }

    removeChildrenFromPixiApp() {
        while(this.pixiApp.children.length > 0) { 
            this.pixiApp.removeChild(this.app.children[0]);
        }
    }

    // Scenes
    // ------

    selectScene(scene) {
        this.deselectCrntScene();
        
        this.crntScene = scene;
        
        scene.select(this.pixiApp);
    }

    deselectCrntScene() {
        if (this.crntScene != null) {
            this.crntScene.deselect();
        }

        this.removeChildrenFromPixiApp();

        this.crntScene = null;
    }

    // Main method
    // -------------

    update() {
        if (this.crntScene != null) {
            this.crntScene.draw();
        }
    }
}