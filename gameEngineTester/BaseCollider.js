wrk.GameEngine.BaseCollider = class {
    constructor(layers, edges) {
        this.layers = layers;
        this.edges = edges;

        this.onCollideCallbacks = [];
    }

    addOnCollideCallback(func) {
        this.onCollideCallbacks.push(func);
    }
}