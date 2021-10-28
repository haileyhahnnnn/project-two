import { html, css } from 'lit';
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

export class LearningScaffold extends SimpleColors {
    static get tag() {
        return 'learning-scaffold';
    }

    static get properties() {
        return {
            ...super.properties,
        };
    }

    constructor () {
        super();
    }

    static get styles() {
        return [...super.styles,
            css`
            :host {
                display: block;
                background-color: transparent;
                border: 2px solid orange;
            }
            `
        ];
    }
    render() {
        return html`
        <div class="banner">
            <slot name="banner"></slot>
        </div>
        <div class="body">
            <slot name="body"></slot>
        </div>
        `;
    }
}

window.customElements.define(LearningScaffold.tag, LearningScaffold);