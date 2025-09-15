import { classNames } from '@chremata/utils';

import { useTable } from './use-table';

import { type TableProps } from './table.types';

import { TableCaption } from './table-caption/table-caption';
import { TableHeader } from './table-header/table-header';
import { TableBody } from './table-body/table-body';

import './index.css';

export function Table(props: TableProps) {
  const { columns, data, caption } = useTable(props);

  const classes = classNames({
    'ch-table': true,
  });

  const role = 'grid';

  return (
    <table
      role={role}
      className={classes}
      aria-label={caption}>
      {caption && <TableCaption caption={caption} />}

      <TableHeader columns={columns} />

      <TableBody
        columns={columns}
        data={data}
      />
    </table>
  );
}
