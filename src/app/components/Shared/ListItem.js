import { Item, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const ListItem = ({ title, description }) => (
  <Item>
    <Item.Image src='' />
    <Item.Content>
      <Item.Header as='a'>{title}</Item.Header>
      <Item.Meta>
        <span className='cinema'>Union Square 14</span>
      </Item.Meta>
      <Item.Description>{description}</Item.Description>
      <Item.Extra>
        <Label>IMAX</Label>
        <Label icon='globe' content='Additional Languages' />
      </Item.Extra>
    </Item.Content>
  </Item>
)

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default ListItem
