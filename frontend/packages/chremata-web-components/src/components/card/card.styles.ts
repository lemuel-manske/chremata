import { css } from 'lit';

export default css`
  .ch-card {
    box-shadow: var(--shadow-elevation-medium);

    border-radius: var(--radius-regular);
    border: 1px solid var(--gs-15);

    padding: 8px 12px;

    display: flex;
    flex-direction: column;

    max-width: 100%;
    max-height: 100%;

    min-height: var(--font-size-large);
  }
`;
