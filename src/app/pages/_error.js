import PropTypes from 'prop-types'
import styled from 'styled-components'

class Error extends React.Component {
  static propTypes = {
    statusCode: PropTypes.number,
    className: PropTypes.string
  }

  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null // eslint-disable-line no-nested-ternary
    // Asks CDNs and others to not to cache the errored page
    if (res) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0')
    }

    return { statusCode }
  }

  render() {
    const { props } = this

    return (
      <StyledContainer>
        {props.statusCode === 404 && (
          <>
            <MainText>
              Page not found.
            </MainText>
            <SecondaryText>
              Please check the link again or go back to the <a href='/'>homepage</a>.
            </SecondaryText>
          </>
        )}
        {props.statusCode !== 404 && (
          <>
            <MainText>
              Sorry, something went wrong.
            </MainText>
            <SecondaryText>
              There was a technical problem. Please try again or go back to the <a href='/'>homepage</a>.
            </SecondaryText>
          </>
        )}
      </StyledContainer>
    )
  }
}

const StyledContainer = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  top: 50%;
`

const MainText = styled.div`
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0;
  font-weight: bold;
  color: #1d2327;
`
const SecondaryText = styled.div`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0;
  color: #444749;

  a {
    color: #444749;
    text-decoration: underline;
  }
`

export default Error
