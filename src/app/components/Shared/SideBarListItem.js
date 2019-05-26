import { List } from 'semantic-ui-react'

const SideBarListItem = () => (
  <List.Item>
    <List.Icon name='github' size='large' verticalAlign='middle' />
    <List.Content>
      <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
      <List.Description as='a'>Updated 20 mins ago</List.Description>
    </List.Content>
  </List.Item>
)

export default SideBarListItem
