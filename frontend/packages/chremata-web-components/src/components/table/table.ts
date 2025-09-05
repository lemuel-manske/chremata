import { html, LitElement } from 'lit';

import { customElement, property } from 'lit/decorators.js';
import { styleMap, type StyleInfo } from 'lit/directives/style-map.js';

import styles from './table.styles.js';

type Row = object;

type Column = {
  key: string;
  label: string;
};

@customElement('ch-table')
class Table extends LitElement {
  @property()
  caption: string = 'Table';

  @property()
  columns: Array<Column> = [];

  @property()
  data: Array<Row> = [];

  @property()
  styles?: StyleInfo;

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

  #isEven(index: number) {
    return index % 2 === 0;
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
    return this.#isEven(i) ? 'ch-row-even' : 'ch-row-odd';
  }

  #renderCell(col: Column, row: Row) {
    return html`<td class="ch-cell" role="gridcell">${(row as any)[col.key]}</td>`;
  }

  render() {
    this.styles = {
      gridTemplateColumns: `repeat(${this.#columnsCount()}, minmax(120px, 1fr))`,
    };

    return html`
      <table class="ch-grid" style=${styleMap(this.styles)} role="grid" aria-label=${this.caption}>
        ${this.#renderHeader()} ${this.#renderBody()}
      </table>
    `;
  }
}

export { Table };
