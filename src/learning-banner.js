import { html, css } from 'lit';
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import "./learning-icon.js";
import "./learning-header.js";

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
                border: 2px solid blue;
            }
            `
        ];
    }
    render() {
        return html
        `
        <slot></slot>
        <learning-icon></learning-icon>
        <learning-header></learning-header>

        `;
    }
}
window.customElements.define(LearningBanner.tag, LearningBanner);