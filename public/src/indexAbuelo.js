import * as components from './components/indexPadre.js';

//usar el componente
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:4rem; margin-top:2rem; width:full;">
            <card-component title="The Legend of Zelda amiibo" description="Potencia tu juego con los amiibo de la colección The Legend of Zelda." image="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/kj6n1mmv5i3yqjvk6f56" textbutton="Completa tu colección"></card-component>
            <card-component title="Megapromoción 12+2" description="2 meses adicionales al comprar cualquier suscripción de 12 meses." image="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/afdfdrgq8i4dpnere9h5" textbutton="Ver más detalles"></card-component>
            <card-component title="Mando de Nintendo 64" description="Disfruta de los juegos de Nintendo 64 de la forma en que se deben jugar: ¡con un mando inalámbrico de tamaño completo de Nintendo 64!" image="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/lvk7zz3tlmx5gqhpgf5r" textbutton="Comprar"></card-component
            </div>
        `;
    }
}

//definir el componente

customElements.define('app-container', AppContainer);
