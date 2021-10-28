import { html, css } from 'lit';
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

export class LearningBody extends SimpleColors {
    static get tag() {
        return 'learning-body';
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
                border: 2px solid red;
                text-align: center;
                height: auto;
                min-height: 50px;
            }
            `
        ];
    }
    render() {
        return html`<div><slot></slot><div>`;
    }
}
window.customElements.define(LearningBody.tag, LearningBody);