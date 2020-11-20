wrk.GameEngine = class {
    static pixiApp;
    static canvasSize;
    
    static globalPosition;
    static globalAngle;
    static globalScale;

    static crntScene;

    static init(canvasSize, globalScale, backgroundColor=0x000000) {
        wrk.internalWarn('wrk.GameEngine is an undocumented, untested festure. Use with caution');
        
        // Set these so the children know where they are
        this.globalPosition = wrk.v(0, 0);
        this.globalAngle = 0;

        this.setGlobalScale(globalScale);

        this.createPixiApp(canvasSize, backgroundColor);

        this.deselectCrntScene();

        this.keyboard = new wrk.KeyWatcher();
        this.mouse = new wrk.MouseWatcher(this.pixiApp.view);
    }

    // Pixi stuff and canvas stuff
    // ---------------------------

    static createPixiApp(canvasSize, backgroundColor) {
        this.pixiApp = new PIXI.Application({
            width : canvasSize.x * this.globalScale,
            height : canvasSize.y * this.globalScale,
            backgroundColor : backgroundColor,
            resolution : window.devicePixelRatio || 1
        });
        document.body.appendChild(this.pixiApp.view);

        this.pixiApp.ticker.add(() => this.update());

        this.setCanvasSize(canvasSize);
    }

    static setCanvasSize(size) {
        this.canvasSize = wrk.v.copy(size);

        this.pixiApp.view.width = this.canvasSize.x * this.globalScale;
        this.pixiApp.view.height = this.canvasSize.y * this.globalScale;
    }

    static setGlobalScale(scale) {
        this.globalScale = scale;
    }

    static removeChildrenFromPixiApp() {
        while(this.pixiApp.stage.children.length > 0) { 
            this.pixiApp.stage.removeChild(this.pixiApp.stage.children[0]);
        }
    }

    // Scenes
    // ------

    static selectScene(scene) {
        this.deselectCrntScene();
        
        this.crntScene = scene;
        
        if (scene != null) {
            scene.select(this.pixiApp);
            scene.setParent(this);
        }
    }

    static deselectCrntScene() {
        if (this.crntScene != null) {
            this.crntScene.deselect();
            this.removeChildrenFromPixiApp();
        }

        this.crntScene = null;
    }

    // Main method
    // -------------

    static update() {
        if (this.crntScene != null) {
            this.crntScene.internalUpdate();
        }
    }
}