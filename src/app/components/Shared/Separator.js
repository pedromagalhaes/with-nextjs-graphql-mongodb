import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Divider, Grid } from 'semantic-ui-react'
import classNames from 'classnames'

const mID = 'separator'

const Separator = ({ className, isRow, cssClass, id }) => (
  <>
    {isRow ? (
      <Grid.Row className={className}>
        <Grid.Column className={mID}>
          <hr />
        </Grid.Column>
      </Grid.Row>
    ) : (
      <Container as='section' id={id} className={classNames(className)}>
        <Divider className={cssClass} />
      </Container>
    )}
  </>
)

Separator.propTypes = {
  className: PropTypes.string,
  isRow: PropTypes.bool,
  cssClass: PropTypes.string,
  id: PropTypes.number
}

const StyledComponent = styled(Separator)`
  .rm-separator {
    &.ui.divider {
      margin-top: 0;
      border-top: none;
      border-bottom: 1px solid #ccc;
      width: 100%;
    }
  }

  &.row {
    padding: 0 !important;

    hr {
      background: #ccc;
      height: 1px;
      margin: 0;
      border: none;
    }
  }
`
export default StyledComponent
