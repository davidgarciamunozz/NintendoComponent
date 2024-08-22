class Card extends HTMLElement {
  
     // Atributos
    static get observedAttributes() {
        return ['title', 'description', 'image', 'textbutton'];
    }
 
    // Propiedades
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    // Connected Callback

    connectedCallback() {
        this.render();
    }

    // Render
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
            this.render();
        }
    }

    // Render

    render() {
        this.shadowRoot.innerHTML = `
            <div style="display:flex; gap:1rem; border-radius:10px; background-color:white; height:14rem; width:28rem;">
                <div style="padding-top.5rem; padding-left:1.5rem; max-width:15rem;">
                    <h2 style="margin-top:1rem; margin-bottom:.5rem;">${this.title}</h2>
                    <p style="margin:0;">${this.description}</p>
                    <button style="border:none;padding:.2rem 0; background-color:white; font-weight:600;font-size:1rem;" >${this.textbutton}</button>
                </div>
                <div style=" width:8rem;">
                    <img style="height:14rem;" src="${this.image}" alt="">
                </div>
            </div>
        `;
    }

}

// Definir el componente

customElements.define('card-component', Card);

//exportar 
export default Card;