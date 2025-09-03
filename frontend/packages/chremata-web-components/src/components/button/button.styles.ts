import { css } from 'lit';

export default css`
  .ch-button {
    cursor: pointer;

    color: var(--font-color-light);

    font-family: var(--font-family);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-regular);

    letter-spacing: 0.2px;

    background: var(--color-50);

    display: inline-flex;

    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    align-content: center;
    text-align: center;

    height: fit-content;
    width: max-content;

    padding: 12px 16px;

    border-radius: var(--radius-silent);

    border: none;
  }

  .ch-button:hover {
    background: var(--color-55);
  }

  .ch-button:focus {
    outline: 4px solid var(--color-35);
    outline-offset: 1px;
  }

  .ch-button:active {
    background: var(--color-60);
  }

  .ch-button:disabled {
    background: var(--color-55);
  }
`;
