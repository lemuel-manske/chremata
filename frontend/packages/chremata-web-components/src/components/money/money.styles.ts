import { css } from 'lit';

export default css`
  .ch-money {
    font-family: var(--font-family);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-regular);
  }

  .ch-money__positive {
    color: var(--color-signal-green);
  }

  .ch-money__negative {
    color: var(--color-signal-red);
  }
`;
