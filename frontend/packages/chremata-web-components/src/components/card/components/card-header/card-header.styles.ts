import { css } from 'lit';

export default css`
  .ch-card__header {
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-between;

    height: 100%;
    min-height: var(--font-size-large);

    padding: 1rem 1.575rem 1rem 0.675rem;
  }

  .ch-card__title {
    color: var(--font-color-regular);

    font-family: var(--font-family);
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);

    letter-spacing: 0.2px;

    padding: 0;
    margin: 0;
  }

  .ch-card__subtitle {
    color: var(--font-color-regular);

    font-family: var(--font-family);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-regular);

    letter-spacing: 0.2px;

    padding: 0;
    margin: 0;
  }
`;
