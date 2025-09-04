import { LitElement, svg, html } from 'lit';

import { customElement, property } from 'lit/decorators.js';

const SVG = svg`<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"></path><path stroke="currentColor" stroke-width="1.5" d="M16.473 9.763a5 5 0 1 0 0 4.475"></path><path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M10 6v12m3-12v12"></path>`;

@customElement('ch-coin-icon')
class CoinIcon extends LitElement {
  @property({ type: String })
  fill = 'none';

  @property({ type: String })
  color = 'var(--gs-100)';

  @property({ type: String })
  label = 'Coin icon';

  @property({ type: String })
  width = '24';

  @property({ type: String })
  height = '24';

  @property({ type: String })
  viewBox = '0 0 24 24';

  private readonly labelId = crypto.randomUUID();

  render() {
    return html`
      <svg
        role="img"
        aria-labelledby=${this.labelId}
        width=${this.width}
        height=${this.height}
        fill=${this.fill}
        color=${this.color}
        viewBox=${this.viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="${this.labelId}">${this.label}</title>

        ${SVG}
      </svg>
    `;
  }
}

export { CoinIcon };
