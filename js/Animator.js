(function() {

    function ClassToggler () {
        this._nodes = document.querySelectorAll('[data-toggler]');
        this._elements = [];
    
        this.addListeners();
        
        this.scrollHandler();

        document.addEventListener('scroll', () => {
            this.scrollHandler();
        });
    }

    ClassToggler.prototype.addListeners = function () {

        if(this._nodes) {
            [].forEach.call(this._nodes, (node) => {
                
                this._elements.push(new Element(node));

            });
        }
    }

    ClassToggler.prototype.scrollHandler = function () {
        const top = window.scrollY;

        this._elements.forEach(element => {
            if(top >= element.shortHandedTop && !element.added) {
                const delay = Number(element.delay);

                if(delay !== false && delay > 0) {
                    setTimeout(() => {
                        element.addClass();
                    }, delay * 1000);
                } else {
                    element.addClass();
                }
            } else if (top <  element.top) {
                element.removeClass();
            }
        });
    }

    function Element (node) {
        this.node = node;
        this.top = node.offsetTop - window.screen.height;
        this.className = node.getAttribute('data-toggler');

        const delay = node.getAttribute('data-toggler-delay');

        this.delay = delay ? delay : false; 
        this.shortHandedTop = node.offsetTop - (window.screen.height - window.screen.height / 10);
        this.added = false;
    }

    Element.prototype.addClass = function() {
        this.node.classList.add(this.className);
        this.added = true;
    }

    Element.prototype.removeClass = function() {
        this.node.classList.remove(this.className);
        this.added = false;
    }
    
    const toggler = new ClassToggler();
})();