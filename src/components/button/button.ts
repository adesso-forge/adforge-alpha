// alpha-button — Tier 3 extension of forge-button with client-specific behavior
import '@adesso-forge/core-ds';
import { LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';

const ForgeButton = customElements.get('forge-button')!;

export class AlphaButton extends (ForgeButton as unknown as typeof LitElement) {
  static css = [
    ...(Array.isArray((ForgeButton as any).css)
      ? (ForgeButton as any).css
      : (ForgeButton as any).css
        ? [(ForgeButton as any).css]
        : []),
    css`
      /* Alpha corporate button refinements */
      :host {
        --wa-button-font-family: var(--wa-font-family-sans);
      }
    `,
  ];

  @property({ type: String })
  tier: 'standard' | 'premium' = 'standard';

  connectedCallback() {
    super.connectedCallback();
    if (this.tier === 'premium') {
      this.setAttribute('variant', 'brand');
    }
  }
}

customElements.define('alpha-button', AlphaButton as unknown as CustomElementConstructor);
