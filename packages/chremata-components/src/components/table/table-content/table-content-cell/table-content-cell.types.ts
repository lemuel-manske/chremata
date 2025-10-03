import * as React from 'react';

type TableContentCellAttributes = {
  children: React.ReactNode;

  colSpan?: number;

  width?: number;
};

export type TableContentCellProps = TableContentCellAttributes;
