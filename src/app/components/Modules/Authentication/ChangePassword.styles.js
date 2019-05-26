import styled from 'styled-components'

const SignUpStyles = styled.section`
  margin: 0;
  background: ${props => props.theme.color7};
  padding: 60px 0 100px 0;

  h3.ui.header {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    font-size: 30px;
    margin: 10px 0 0;
    color: ${props => props.theme.color6};
    font-weight: bold;

    &::before {
      counter-increment: section 1;
      content: '0' counter(section) '.';
      margin-right: 15px;
      font-weight: normal;
      color: ${props => props.theme.color6};
      font-size: 20px;
      position: relative;
      bottom: 0;
      display: none;
    }

    &::after {
      content: '';
      height: 1px;
      width: 100%;
      background-color: ${props => props.theme.color6};
      position: relative;
      top: 2px;
      display: none;
    }
  }
`

export default SignUpStyles
