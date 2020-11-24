wrk.MouseWatcher = class {
    constructor(elem=document) {
        this.elem = elem;

        this.position = wrk.v(0, 0);

        this.pointerDown = false;
        this.mouseDown = false;
        this.touchDown = false;
        
        this.elem.addEventListener('mousemove', e => {
            var rect = e.target.getBoundingClientRect();
            this.position.x = e.x - rect.left;
            this.position.y = e.y - rect.top;
        });

        this.elem.addEventListener('mousedown', e => {
            this.mouseDown = true;
        });

        this.elem.addEventListener('mouseup', e => {
            this.mouseDown = false;
        });

        this.elem.addEventListener('touchstart', e => {
            this.touchDown = true;
        });

        this.elem.addEventListener('touchend', e => {
            this.touchDown = false;
        });

        this.elem.addEventListener('pointerdown', e => {
            this.pointerDown = true;
        });

        this.elem.addEventListener('pointerup', e => {
            this.pointerDown = false;
        });
    }
}