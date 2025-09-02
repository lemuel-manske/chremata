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
   * Resolves a boolean attribute.
   *
   * @param attr The name of the attribute to resolve.
   *
   * @returns True if the attribute is present, false otherwise.
   */
  resolveBooleanAttr(attr: string) {
    return this.hasAttribute(attr);
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
