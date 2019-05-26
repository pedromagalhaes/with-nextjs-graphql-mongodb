import PropTypes from 'prop-types'
import { Icon, Header } from 'semantic-ui-react'

const ModuleTitle = ({ as, icon, text, dividing }) => (
  <Header as={as} dividing={dividing}>
    <Icon name={icon} />
    <Header.Content>{text}</Header.Content>
  </Header>
)

ModuleTitle.propTypes = {
  as: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  dividing: PropTypes.bool
}

export default ModuleTitle
