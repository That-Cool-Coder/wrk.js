wrk.MouseWatcher = class {
    constructor(elem=document) {
        this.elem = elem;

        this.position = wrk.v(0, 0);
        
        this.elem.addEventListener('mousemove', e => {
            var rect = e.target.getBoundingClientRect();
            this.position.x = e.x - rect.left;
            this.position.y = e.y - rect.top;
        });
    }
}