import { css, html, LitElement, type SVGTemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

type SVGOptions = {
  color?: string;
  label?: string;
  width?: string;
  height?: string;
  fill?: string;
  viewBox?: string;
};

const wrapIcon = (vector: SVGTemplateResult, opts: SVGOptions) => {
  const {
    color = '--color-icon-regular',
    label = 'Icon',
    width = '24',
    height = '24',
    fill = 'none',
    viewBox = '0 0 24 24',
  } = opts;

  const labelId = crypto.randomUUID();

  return html`
    <svg
      role="img"
      color="var(${color})"
      aria-labelledby="${labelId}"
      width="${width}"
      height="${height}"
      fill="${fill}"
      viewBox="${viewBox}"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="${labelId}">${label}</title>

      ${vector}
    </svg>
  `;
};

abstract class AbstractIcon extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        line-height: 0;
        vertical-align: middle;
      }

      svg {
        display: block;
      }
    `,
  ];

  abstract getIcon(): [SVGTemplateResult, SVGOptions?];

  render() {
    const [icon, opts = {}] = this.getIcon();

    return wrapIcon(icon, opts);
  }
}

export { AbstractIcon, type SVGOptions };
