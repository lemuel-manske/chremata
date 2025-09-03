import { css } from 'lit';

export default css`
  .ch-card {
    box-shadow: var(--shadow-elevation-medium);

    border-radius: var(--radius-silent);

    padding: 8px 12px;

    display: flex;
    flex-direction: row;

    max-width: 100%;
    max-height: 100%;

    min-height: var(--font-size-large);
  }

  .ch-card__title {
    color: var(--font-color-regular);

    font-family: var(--font-family);
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);

    letter-spacing: 0.2px;
  }
`;
