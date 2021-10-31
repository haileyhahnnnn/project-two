// dependencies / things imported
import { LitElement, html, css } from 'lit';
import './learning-body.js';
import './learning-banner.js';

export class LearningCard extends LitElement {
  static get tag() {
    return 'learning-card';
  }

  constructor() {
    super();
    this.myIcon = null;
    this.type = 'science';
  }

  static get properties() {
    return {
      type: { type: String, reflect: true },
      myIcon: { type: String, attribute: 'my-icon' },
      header: { type: String, reflect: true },
      subheader: { type: String, reflect: true },
    };
  }

  // updated fires every time a property defined above changes
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = 'beaker';
        this.header = 'UNIT 1';
        this.subheader = 'CHEM CONNECTION';
      } else if (propName === 'type' && this[propName] === 'idea') {
        this.myIcon = 'lightbulb';
        this.header = 'UNIT 1';
        this.subheader = 'LEARNING OBJECTIVES';
      } else if (propName === 'type' && this[propName] === 'question') {
        this.myIcon = 'question';
        this.header = 'UNIT 1';
        this.subheader = 'DID YOU KNOW?';
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: block;
        width: 600px;
      }

      ul {
        padding: 0px;
      }

      .header {
        color: white;
        font-weight: 100;
        font-size: 30px;
        padding-top: 17px;
      }

      .subheader {
        color: white;
        font-weight: 500;
        font-size: 30px;
      }

      learning-body {
        border: 1px solid black;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <learning-scaffold>
        <learning-banner slot="banner" type=${this.type}>
          <div class="header" slot="header">${this.header}</div>
          <div class="subheader" slot="subheader">${this.subheader}</div>
        </learning-banner>
        <learning-body slot="body">
          <slot></slot>
        </learning-body>
      </learning-scaffold>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return {
      canScale: false,
      canPosition: false,
      canEditSource: true,
      contentEditable: true,
      gizmo: {
        title: 'Learning Card',
        description: 'An element that you have to replace / fix / improve',
        icon: 'credit-card',
        color: 'blue',
        groups: ['Content', 'Presentation', 'Education'],
      },
      settings: {
        configure: [
          {
            property: 'type',
            title: 'Type',
            description: 'Identifies the card',
            inputMethod: 'select',
            options: {
              science: 'Science',
              math: 'Math',
            },
          },
        ],
        advanced: [],
      },
      demoSchema: [
        {
          tag: LearningCard.tag,
          properties: {
            type: 'science',
          },
          content:
            "<p slot='header'>This tag renders in the header</p><ul><li>This renders</li><li>Below the tag</li></ul>",
        },
      ],
    };
  }
}
