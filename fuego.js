const Fuego = {
    components: {},
    Register: function (name, component) {
        this.components[name] = component;
    }
};

class FuegoComponent extends HTMLElement {
    connectedCallback() {
        const componentName = this.getAttribute("name");
        const component = Fuego.components[componentName];
        if (component) {
            this.render(component);
        } else {
            console.error(`Component '${componentName}' is not registered.`);
        }
    }

    render(component) {
        const root = this.attachShadow({ mode: "open" });
        this.update = () => {
            const container = document.createElement("div");
            container.innerHTML = component();
            root.innerHTML = "";
            root.appendChild(container);
        };
        this.update();
    }

    attributeChangedCallback() {
        if(this.update) {
            this.update();
        }
    }

    static get observedAttributes() {
        return [];
    }
}

customElements.define("fuego-component", FuegoComponent);

window.Fuego = Fuego;