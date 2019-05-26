import PropTypes from 'prop-types'
import { Fragment } from 'react'
import styled from 'styled-components'

const createStyledText = (as, props) => styled(as, props)`
  font-size: ${props.isSmall ? '16px' : null};
  line-height: ${props.isSmall ? '24px' : null};
  font-weight: ${props.isStrong ? 'bold' : null};
`

const Text = ({ ...props }) => {
  const { as, isHtml, className, children } = props
  const Element = createStyledText(as || 'div', props)
  return (
    <Fragment>
      {isHtml ? (
        <Element
          className={className}
          dangerouslySetInnerHTML={{
            __html: children
          }}
        />
      ) : (
        <Element className={className}>{children}</Element>
      )}
    </Fragment>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  as: PropTypes.string,
  isHtml: PropTypes.bool
}

export default Text
