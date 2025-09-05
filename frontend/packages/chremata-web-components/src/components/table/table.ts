import { html, LitElement } from 'lit';

import { customElement, property } from 'lit/decorators.js';
import { styleMap, type StyleInfo } from 'lit/directives/style-map.js';

import styles from './table.styles.js';
import { isEven } from '@chremata-foundation/utils';

const DEFAULT_PROPS = {
  caption: 'Table',
  columns: [],
  data: [],
};

type Row = object;

type Column = {
  key: string;
  label: string;
};

@customElement('ch-table')
class Table extends LitElement {
  @property()
  caption: string = DEFAULT_PROPS.caption;

  @property()
  columns: Array<Column> = DEFAULT_PROPS.columns;

  @property()
  data: Array<Row> = DEFAULT_PROPS.data;

  static styles = [styles];

  #columnsCount() {
    return this.columns.length;
  }

  #renderHeader() {
    const cols = this.columns.map((c) => html`<th class="ch-cell ch-columnheader" role="columnheader">${c.label}</th>`);

    return html`<thead class="ch-rowgroup ch-thead" role="rowgroup">
      <tr class="ch-row" role="row">
        ${cols}
      </tr>
    </thead>`;
  }

  #renderBody() {
    const rows = this.data.map(
      (row, i) => html`<tr class="ch-row ${this.#resolveRowParity(i)}" role="row">
        ${this.columns.map((col) => this.#renderCell(col, row))}
      </tr>`
    );

    return html`<tbody class="ch-rowgroup ch-tbody" role="rowgroup">
      ${rows}
    </tbody>`;
  }

  #resolveRowParity(i: number): unknown {
    return isEven(i) ? 'ch-row-even' : 'ch-row-odd';
  }

  #renderCell(col: Column, row: Row) {
    return html`<td class="ch-cell" role="gridcell">${(row as any)[col.key]}</td>`;
  }

  render() {
    const dynamicStyles = {
      gridTemplateColumns: `repeat(${this.#columnsCount()}, minmax(120px, 1fr))`,
    };

    return html`
      <table class="ch-grid" style=${styleMap(dynamicStyles)} role="grid" aria-label=${this.caption}>
        ${this.#renderHeader()} ${this.#renderBody()}
      </table>
    `;
  }
}

export { Table };
