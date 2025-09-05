import { css } from 'lit';

export default css`
  .ch-grid {
    color: var(--font-color-regular);

    font-family: var(--font-family);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-regular);

    display: grid;
  }

  .ch-rowgroup {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: inherit;
    grid-auto-flow: column;
  }

  .ch-row {
    display: grid;
    grid-column: 1 / -1;
    grid-auto-flow: column;
    grid-template-columns: inherit;

    border-radius: var(--radius-regular);
  }

  .ch-cell {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    align-items: center;

    padding: 8px 16px;

    box-sizing: border-box;
    position: relative;

    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ch-cell:not(:last-child) {
    border-inline-end: 2px solid var(--color-10);
  }

  .ch-row-even {
    background-color: var(--color-5);
  }

  .ch-columnheader {
    display: flex;

    justify-content: flex-start;
    align-items: flex-start;
    text-align: start;

    font-weight: var(--font-weight-bold);
  }
`;
