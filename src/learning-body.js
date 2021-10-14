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
        return html`<div>Body Stuff<slot></slot><div>`;
    }
}
window.customElements.define(LearningBody.tag, LearningBody);