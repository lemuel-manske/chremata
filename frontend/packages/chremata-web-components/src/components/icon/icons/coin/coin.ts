import { svg, type SVGTemplateResult } from 'lit';

import { customElement, property } from 'lit/decorators.js';

import { AbstractIcon, type SVGOptions } from '../svg.js';

const SVG = svg`<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"></path><path stroke="currentColor" stroke-width="1.5" d="M16.473 9.763a5 5 0 1 0 0 4.475"></path><path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M10 6v12m3-12v12"></path>`;

@customElement('ch-coin-icon')
class CoinIcon extends AbstractIcon {
  @property({ type: String })
  color = '--color-icon-regular';

  getIcon(): [SVGTemplateResult, SVGOptions] {
    const opts = {
      label: 'Coin Icon',
      color: this.color,
    };

    return [SVG, opts];
  }
}

export { CoinIcon };
