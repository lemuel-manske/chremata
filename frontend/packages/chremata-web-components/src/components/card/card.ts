import { html, LitElement } from 'lit';

import { customElement, property } from 'lit/decorators.js';

import styles from './card.styles.js';

const DEFAULT_PROPS = {
  title: 'Card',
};

type CardProps = {
  /**
   * Card title.
   */
  title: string;
};

@customElement('ch-card')
class Card extends LitElement {
  @property({ type: String })
  title = 'Card';

  labelId = crypto.randomUUID();

  static styles = [styles];

  render() {
    return html`
      <div class="ch-card" role="region" aria-labelledby="${this.labelId}">
        <h2 class="ch-card__title" id=${this.labelId} aria-label="${this.title}">${this.title}</h2>
      </div>
    `;
  }
}

export { DEFAULT_PROPS, type CardProps };
