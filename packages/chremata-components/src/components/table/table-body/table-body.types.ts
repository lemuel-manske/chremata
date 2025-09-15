import { type Column, type Row } from '../table.types';

export type TableBodyProps = {
  /**
   * Columns to display.
   */
  columns: Column[];

  /**
   * Data to display.
   */
  data: Row[];
};
