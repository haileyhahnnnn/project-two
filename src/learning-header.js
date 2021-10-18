import { html, css } from 'lit';
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

export class LearningHeader extends SimpleColors {
    static get tag() {
        return 'learning-header';
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
                border: 2px solid green;
            }
            `
        ];
    }
    render() {
        return html`<div>Header Stuff<slot></slot><div>`;
    }
}
window.customElements.define(LearningHeader.tag, LearningHeader);