class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 20px;
                    margin: 10px 0;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    background-color: #fff;
                }
                .card-title {
                    font-size: 1.5em;
                    margin-bottom: 10px;
                }
                .card-content {
                    font-size: 1em;
                    margin-bottom: 10px;
                }
                ::slotted(img) {
                    max-width: 100%;
                    border-radius: 5px;
                    margin: 10px 0;
                }
                ::slotted(img) {
                    height: 150px;
                    width: 100px;
                }
            </style>
            <div class="card">
                <div class="card-title">
                    <slot name="title">Заголовок по умолчанию</slot>
                </div>
                <div class="card-content">
                    <slot name="content">Текст по умолчанию</slot>
                </div>
                <slot name="footer"></slot>
            </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('card-component', CardComponent);