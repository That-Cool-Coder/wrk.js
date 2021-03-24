wrk.MouseWatcher = class {
    constructor(elem=document) {
        this.elem = elem;

        this.position = wrk.v(0, 0);

        this.pointerDown = false;
        this.mouseDown = false;
        this.touchDown = false;

        this.onMouseMove = new wrk.FunctionGroup();
        this.elem.addEventListener('mousemove', e => {
            var rect = e.target.getBoundingClientRect();
            this.position.x = e.x - rect.left;
            this.position.y = e.y - rect.top;
            this.onMouseMove.call(this.position, e);
        });
        
        this.onMouseDown = new wrk.FunctionGroup();
        this.elem.addEventListener('mousedown', e => {
            this.mouseDown = true;
            this.onMouseDown.call(this.position, e);
        });

        this.onMouseUp = new wrk.FunctionGroup();
        this.elem.addEventListener('mouseup', e => {
            this.mouseDown = false;
            this.onMouseUp.call(this.position, e);
        });

        this.onTouchStart = new wrk.FunctionGroup();
        this.elem.addEventListener('touchstart', e => {
            this.touchDown = true;
            this.onTouchStart.call(this.position, e);
        });

        this.onTouchEnd = new wrk.FunctionGroup();
        this.elem.addEventListener('touchend', e => {
            this.touchDown = false;
            this.onTouchEnd.call(this.position, e);
        });

        this.onPointerDown = new wrk.FunctionGroup();
        this.elem.addEventListener('pointerdown', e => {
            this.pointerDown = true;
            this.onPointerDown.call(this.position, e);
        });

        this.onPointerUp = new wrk.FunctionGroup();
        this.elem.addEventListener('pointerup', e => {
            this.pointerDown = false;
            this.onPointerUp.call(this.position, e);
        });
    }
}