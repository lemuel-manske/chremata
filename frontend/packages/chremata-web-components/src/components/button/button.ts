import { ChremataComponent } from '../base/base.js';

import buttonStyles from './button.styles.js';

class ChButton extends ChremataComponent {
  constructor() {
    super();

    this.injectStyles(buttonStyles);

    const button = this.createButton();

    this.assignEvents(button);

    this.getShadowRoot().appendChild(button);
  }

  static get observedAttributes() {
    return ['label'];
  }

  private createButton() {
    const button = document.createElement('button');

    button.classList.add('ch-button');
    button.textContent = this.getLabel();

    button.ariaLabel = this.getLabel();

    return button;
  }

  private assignEvents(button: HTMLElement) {
    button.addEventListener('click', () => {
      button.dispatchEvent(this.newClickEvent());
    });
  }

  private newClickEvent() {
    return new CustomEvent('ch-button:click', {
      bubbles: true,
      composed: true,
    });
  }

  private getLabel() {
    return this.getAttribute('label') || '';
  }
}

customElements.define('ch-button', ChButton);
