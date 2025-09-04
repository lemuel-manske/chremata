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
  label: string = DEFAULT_PROPS.label;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = DEFAULT_PROPS.disabled;

  static styles = [styles];

  #handleClick() {
    if (this.disabled) return;

    this.dispatchEvent(
      new CustomEvent('ch-button:click', {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button class="ch-button" aria-label=${this.label} ?disabled=${this.disabled} @click=${this.#handleClick}>
        <slot>${this.label}</slot>
      </button>
    `;
  }
}

export { DEFAULT_PROPS, Button, type ButtonProps };
