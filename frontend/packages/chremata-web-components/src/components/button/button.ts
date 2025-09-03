import { LitElement, html } from 'lit';

import { customElement, property } from 'lit/decorators.js';

import styles from './button.styles.js';

const DEFAULT_PROPS = {
  label: 'Button',
  disabled: false,
};

type Events = {
  /**
   * Dispatched when button is clicked.
   */
  onClick: () => void;
};

type ButtonProps = Events & {
  /**
   * Button label.
   */
  label: string;

  /**
   * Whether the button is enabled or not.
   */
  disabled: boolean;
};

@customElement('ch-button')
class Button extends LitElement {
  @property({ type: String })
  label: string = 'Button';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  static styles = [styles];

  private _handleClick() {
    this.dispatchEvent(
      new CustomEvent('onClick', {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button
        class="ch-button"
        aria-label=${this.label}
        aria-disabled="${this.disabled}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        ${this.label}
      </button>
    `;
  }
}

export { DEFAULT_PROPS, type ButtonProps };
