import { Table } from './table';
import type { TableProps } from './table.types';

const usersColumns = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'email', label: 'Email' },
];

const usersData = [
  { name: 'John Doe', age: 28, email: 'johndoe@email.com' },
  { name: 'Jane Smith', age: 34, email: 'janesmith@email.com' },
];

const usersCaption = 'Users';

export function TableWithData(props: TableProps) {
  const {
    columns = usersColumns,
    data = usersData,
    caption = usersCaption,
  } = props;

  return <Table columns={columns} data={data} caption={caption}></Table>;
}
