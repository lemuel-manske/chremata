export type Column = {
  key: string;
  label: string;
};

export type Row = Record<string, unknown>;

export type TableProps = {
  caption?: string;
  columns: Column[];
  data: Row[];
};
