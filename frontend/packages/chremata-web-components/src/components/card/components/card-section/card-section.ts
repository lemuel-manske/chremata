import { html, LitElement } from 'lit';

import { customElement } from 'lit/decorators.js';

import styles from './card-section.styles.js';

@customElement('ch-card-section')
class CardSection extends LitElement {
  static styles = [styles];

  render() {
    return html`<section class="ch-card__section">
      <slot name="content"></slot>
    </section>`;
  }
}

export { CardSection };
