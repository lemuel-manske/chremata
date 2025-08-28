import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('hello-world')
class HelloWorld extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
  `;

  render() {
    return html`<p>Hello, World!</p>`;
  }
}

export { HelloWorld };
