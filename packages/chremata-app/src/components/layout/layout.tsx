import { Navbar, GridLayout } from '@chremata/components';

export function Layout() {
  return (
    <GridLayout
      areas='"sidebar header header" "sidebar main main" "sidebar main main"'
      columns="250px 1fr 1fr"
      rows="1fr 3fr 3fr"
      rowGap="panel"
      columnGap="none"
      padding="none">
      <GridLayout.Area areaName="sidebar">
        <Navbar>
          <Navbar.Header title="Chremata" />

          <Navbar.Body>
            <Navbar.Item label="Home" />
          </Navbar.Body>

          <Navbar.Footer>
            <Navbar.Item label="Settings" />
          </Navbar.Footer>
        </Navbar>
      </GridLayout.Area>
      
      <GridLayout.Area areaName="header">
        
      </GridLayout.Area>

      <GridLayout.Area areaName="main">
        
      </GridLayout.Area>
    </GridLayout>
  )
}