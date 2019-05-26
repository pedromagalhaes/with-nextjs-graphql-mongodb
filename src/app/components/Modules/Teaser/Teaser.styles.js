import styled from 'styled-components'

const TeaserStyles = styled.section`
  margin: 0;

  .ui.segment {
    padding: 50px 0 67px 0;
    text-align: left;
    background: ${props => props.theme.color1};
  }

  h1.ui.header {
    font-size: 17px;
    font-family: ${props => props.theme.bodyFont};
    font-weight: 400;
    margin: 0 0 5px 5px;
    color: ${props => props.theme.color10};
  }

  h2.ui.header {
    font-size: 65px;
    line-height: 1.1;
    margin: 0;
    color: ${props => props.theme.color6};
    font-family: ${props => props.theme.bodyFont};
  }

  h3.ui.header {
    font-size: 65px;
    line-height: 1.1;
    color: ${props => props.theme.color4};
    margin: 0 0 35px 0;
    font-family: ${props => props.theme.bodyFont};
  }

  .description {
    margin-bottom: 50px;
    max-width: 510px;

    p {
      font-size: 18px;
      color: ${props => props.theme.color4};
      font-family: ${props => props.theme.bodyFont};
    }
  }

  .ui.inverted.primary.button,
  .ui.inverted.primary.buttons .button {
    color: ${props => props.theme.color10} !important;
    box-shadow: 0 0 0 2px ${props => props.theme.color10} inset !important;
    font-family: ${props => props.theme.bodyFont};
    font-weight: 400;

    &:hover,
    &:active,
    &:focus {
      background: ${props => props.theme.color9};
      color: ${props => props.theme.color6} !important;
    }
  }
`

export default TeaserStyles
