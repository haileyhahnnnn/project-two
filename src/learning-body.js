import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class LearningBody extends SimpleColors {
  static get tag() {
    return 'learning-body';
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          height: auto;
          min-height: 50px;
          padding-left: 20%;
          padding-right: 10%;
          font-size: 10pt;
          line-height: 15pt;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
window.customElements.define(LearningBody.tag, LearningBody);
