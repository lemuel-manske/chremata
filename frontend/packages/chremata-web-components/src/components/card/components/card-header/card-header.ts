import { html, LitElement } from 'lit';

import { customElement, property } from 'lit/decorators.js';

import styles from './card-header.styles.js';

@customElement('ch-card-header')
class CardHeader extends LitElement {
  @property({ type: String })
  title = '';

  @property({ type: String })
  subtitle = '';

  static styles = [styles];

  render() {
    return html`
      <header class="ch-card__header">
        <section>
          <h1 class="ch-card__title" aria-label="${this.title}">${this.title}</h1>
          <p class="ch-card__subtitle">${this.subtitle}</p>
        </section>

        <section>
          <slot name="icon"></slot>
        </section>
      </header>
    `;
  }
}

export { CardHeader };
