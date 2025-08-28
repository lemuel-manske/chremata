import { fixture, html } from '@open-wc/testing';

import './button';

describe('button', () => {
  it('should be clicked', async () => {
    const el = await fixture(html` <ch-button></ch-button> `);
  });
});
