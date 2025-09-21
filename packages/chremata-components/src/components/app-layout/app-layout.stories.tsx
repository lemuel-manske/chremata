import { type Meta, type StoryObj } from '@storybook/react';

import {
  Navbar,
  GridLayout,
  Card,
  Label,
  Table,
  type Column,
  type Row,
} from '../..';
import { Banner } from '../banner/banner';

const columns: Column[] = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'amount',
    label: 'Amount',
  },
];

const data: Row[] = [
  {
    id: 1,
    amount: 155.42,
  },
  {
    id: 2,
    amount: 12.2,
  },
];

function App() {
  function renderNavbar() {
    return (
      <Navbar>
        <Navbar.Header title="Chremata" />

        <Navbar.Body>
          <Navbar.Item label="Home" />
        </Navbar.Body>

        <Navbar.Footer>
          <Navbar.Item label="Settings" />
        </Navbar.Footer>
      </Navbar>
    );
  }

  function renderHeader() {
    return (
      <Banner>
        <Label
          size="xlarge"
          variant="emphasis">
          Dashboard
        </Label>
      </Banner>
    );
  }

  function renderMainLayout() {
    return (
      <GridLayout
        areas='
          "card-left card-right"
          "table table"
          "table table"
        '
        columns="1fr 1fr"
        rows="1fr 1fr 1fr"
        rowGap="panel"
        columnGap="panel"
        padding="medium">
        <GridLayout.Area
          areaName="card-left"
          padding="small">
          <Card title="Expenses">
            <Card.Header />

            <Card.Body>
              <Label>Card</Label>
            </Card.Body>
          </Card>
        </GridLayout.Area>

        <GridLayout.Area
          areaName="card-right"
          padding="small">
          <Card title="Revenues">
            <Card.Header />

            <Card.Body>
              <Label>Card</Label>
            </Card.Body>
          </Card>
        </GridLayout.Area>

        <GridLayout.Area
          areaName="table"
          padding="small">
          <Card title="Transactions">
            <Card.Header />

            <Card.Body>
              <Table
                caption="Transactions"
                columns={columns}
                data={data}
              />
            </Card.Body>
          </Card>
        </GridLayout.Area>
      </GridLayout>
    );
  }

  return (
    <GridLayout
      areas='
        "sidebar header header"
        "sidebar main main"
        "sidebar main main"
      '
      columns="250px 1fr 1fr"
      rows="1fr 3fr 3fr"
      rowGap="panel"
      columnGap="none"
      padding="none">
      <GridLayout.Area areaName="sidebar">{renderNavbar()}</GridLayout.Area>

      <GridLayout.Area areaName="header">{renderHeader()}</GridLayout.Area>

      <GridLayout.Area areaName="main">{renderMainLayout()}</GridLayout.Area>
    </GridLayout>
  );
}

export default {
  id: 'App',
  title: 'App',

  component: App,
} satisfies Meta<typeof App>;

export const Default: StoryObj<typeof App> = {
  render: () => <App />,
};
