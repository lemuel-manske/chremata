import { html, LitElement } from 'lit';

import { customElement } from 'lit/decorators.js';

import styles from './card.styles.js';

import './components';

@customElement('ch-card')
class Card extends LitElement {
  static styles = [styles];

  render() {
    return html`<article class="ch-card">
      <slot name="header"></slot>
    </article>`;
  }
}

export { Card };
