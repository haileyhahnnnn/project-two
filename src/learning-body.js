import { html, css } from 'lit';

export class LearningBody {
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
    return html`<div>
      <slot></slot>
      <div></div>
    </div>`;
  }
}
window.customElements.define(LearningBody.tag, LearningBody);
