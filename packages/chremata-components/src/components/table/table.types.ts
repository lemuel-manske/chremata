export type Column = {
  key: string;
  label: string;
};

export type Row = Record<string, unknown>;

export type TableProps = {
  /**
   * Table caption. Required.
   */
  caption: string;

  /**
   * Columns configuration. Required.
   */
  columns: Column[];

  /**
   * Data to be displayed in the table. Required.
   */
  data: Row[];
};
