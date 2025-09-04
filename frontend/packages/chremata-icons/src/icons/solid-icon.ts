import { LitElement, html, css, svg, nothing } from 'lit';
import { property } from 'lit/decorators.js';

enum IconSize {
  SMALL = '24',
  MEDIUM = '32',
  LARGE = '48',
}

abstract class SolidIcon extends LitElement {
  @property({ type: String })
  label = '';

  @property({ type: IconSize })
  size = IconSize.SMALL;

  @property({ type: String })
  color = 'currentColor';

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.5rem;

      line-height: 0;
    }

    svg {
      color: inherit;

      display: block;

      width: 100%;
      height: 100%;
    }
  `;

  protected abstract get paths(): ReturnType<typeof svg>;

  render() {
    const labelId = crypto.randomUUID();

    return html`
      <svg
        role="img"
        aria-labelledby=${this.label ? labelId : nothing}
        aria-hidden=${!this.label}
        width=${this.size}
        height=${this.size}
        fill="none"
        stroke=${this.color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        ${this.label ? html`<title id=${labelId}>${this.label}</title>` : nothing} ${this.paths}
      </svg>

      <slot name="label"></slot>
    `;
  }
}

export { SolidIcon, IconSize };
