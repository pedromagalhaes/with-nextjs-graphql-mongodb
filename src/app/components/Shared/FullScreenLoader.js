import PropTypes from 'prop-types'
import { Dimmer, Loader } from 'semantic-ui-react'
import styled from 'styled-components'

const FullScreenLoader = ({ className, ...props }) => {
  const { active } = props
  return (
    <div className={className}>
      <Dimmer active={active}>
        <Loader size='large' />
      </Dimmer>
    </div>
  )
}

FullScreenLoader.propTypes = {
  props: PropTypes.object,
  className: PropTypes.string,
  active: PropTypes.bool
}

const StyledFullScreenLoader = styled(FullScreenLoader)`
  &.dimmed.dimmable > .ui.animating.dimmer,
  &.dimmed.dimmable > .ui.visible.dimmer,
  &.ui.active.dimmer {
    display: flex !important;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export default StyledFullScreenLoader
