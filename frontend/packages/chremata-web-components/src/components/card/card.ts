import { html, LitElement } from 'lit';

import { customElement } from 'lit/decorators.js';

import './components';

import styles from './card.styles.js';

@customElement('ch-card')
class Card extends LitElement {
  static styles = [styles];

  render() {
    return html`<article class="ch-card">
      <slot name="header"></slot>

      <main>
        <slot name="body"></slot>
      </main>
    </article>`;
  }
}
