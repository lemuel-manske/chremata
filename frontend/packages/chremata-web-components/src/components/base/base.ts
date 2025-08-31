class ChremataComponent extends HTMLElement {
  root: ShadowRoot;

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  /**
   * Inject styles into the shadow DOM.
   *
   * @param shadowRoot The shadow root to inject styles into.
   * @param styles The styles to inject.
   */
  injectStyles(styles: string) {
    const style = document.createElement('style');
    style.textContent = styles;

    this.getShadowRoot().appendChild(style);
  }

  /**
   * Get the shadow root of the component.
   *
   * @returns The shadow root of the component.
   */
  getShadowRoot() {
    return this.root;
  }
}

export { ChremataComponent };
