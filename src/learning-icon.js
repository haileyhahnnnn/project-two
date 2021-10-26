import { html, css } from 'lit';
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

export class LearningIcon extends SimpleColors {
    static get tag() {
        return 'learning-icon';
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
                background-color: var(--simple-colors-default-theme-accent-1);
                border: 2px solid orange;
            }
            `
        ];
    }
    render() {
        return html`<div>Icon Stuff<slot></slot><div>`;
    }
}
window.customElements.define(LearningIcon.tag, LearningIcon);