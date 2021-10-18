import { html, css } from 'lit';
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import "./learning-icon.js";
import "./learning-header.js";

export class LearningBanner extends SimpleColors {
    static get tag() {
        return 'learning-banner';
    }

    static get properties() {
        return {
            ...super.properties,
        };
    }

    constructor() {
        super();
        this.accentColor = 'purple';
    }

    static get styles() {
        return [
            css`
            :host {
                display: flex;
                background-color: var(--simple-colors-default-theme-accent-4);
                border: 2px solid blue;

            }

            learning-icon{
                width: 15%;

            }

            learning-header{
                width: 85%;
            }
            `
        ];
    }
    render() {
        return html
        `
        <learning-icon></learning-icon>
        <learning-header></learning-header>
        `;
    }
}
window.customElements.define(LearningBanner.tag, LearningBanner);