import { ChremataComponent } from '../base/base.js';
import buttonStyles from './button.styles.js';

class ChButton extends ChremataComponent {
  constructor() {
    super();
    this.injectStyles(buttonStyles);

    const template = this._create();

    this.getShadowRoot().appendChild(template.cloneNode(true));
  }

  static get observedAttributes() {
    return ['disabled'];
  }

  _create() {
    const template = document.createElement('template');

    template.innerHTML = `
      <button class="ch-button"></button>
    `;

    const content = template.content;

    const isDisabled = this._isDisabled();

    const button = content.querySelector('button');

    if (button) {
      button.textContent = this.textContent;
      button.disabled = isDisabled;
    }

    return content;
  }

  _isDisabled() {
    return this.resolveBooleanAttr('disabled');
  }
}

customElements.define('ch-button', ChButton);
