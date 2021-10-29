import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import './learning-icon.js';
import './learning-header.js';

export class LearningBanner extends SimpleColors {
  static get tag() {
    return 'learning-banner';
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String },
    };
  }

  constructor() {
    super();
    this.accentColor = 'blue';
    this.type = null;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'idea') {
        this.accentColor = 'orange';
        this.type = 'idea';
      } else if (propName === 'type' && this[propName] === 'question') {
        this.accentColor = 'blue';
        this.type = 'question';
      } else if (propName === 'type' && this[propName] === 'science') {
        this.accentColor = 'green';
        this.type = 'science';
      }
    });
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
          flex-direction: row;
          background-color: var(--simple-colors-default-theme-accent-1);
          border: 2px solid blue;
        }

        :host([type='idea']) {
          background-color: var(--simple-colors-default-theme-accent-5);
        }
        :host([type='question']) {
          background-color: var(--simple-colors-default-theme-accent-7);
        }
        :host([type='science']) {
          background-color: var(--simple-colors-default-theme-accent-7);
        }

        .banner {
          display: flex;
          width: 700px;
        }

        .iconArea {
          width: 15%;
        }

        .headerArea {
          width: 85%;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="banner">
        <div>
          <learning-icon type="${this.type}"></learning-icon>
        </div>
        <div class="headerArea">
          <slot name="header"></slot>
        </div>
      </div>
    `;
  }
}
window.customElements.define(LearningBanner.tag, LearningBanner);
