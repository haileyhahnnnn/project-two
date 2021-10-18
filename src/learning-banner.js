import { html, css } from 'lit';
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

export class LearningBanner extends SimpleColors {
    static get tag() {
        return 'learning-banner';
    }
    constructor () {
        super();
    }
    static get styles() {
        return [
            css`
            :host {
                display: block;
                background-color: var(--simple-colors-default-theme-accent-4);
            }
            `
        ];
    }
    render() {
        return html`<div>Banner Stuff<slot></slot><div>`;
    }
}
window.customElements.define(LearningBanner.tag, LearningBanner);