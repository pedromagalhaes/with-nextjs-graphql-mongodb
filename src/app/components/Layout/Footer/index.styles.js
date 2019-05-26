import styled from 'styled-components'

const FooterStyles = styled.section`
  padding: 0;
  margin: 0;

  .ui.segment {
    background: ${props => props.theme.color1};
    padding: 0;
    margin: 0;
  }

  .ui.inverted.grid {
    &:first-child {
      .row {
        padding: 70px 0 50px 0;

        a.item {
          color: ${props => props.theme.color8};
        }
      }
    }

    &:last-child {
      .row {
        padding: 10px 0 70px 0;
        margin: 0;
        color: rgba(255, 255, 255, 0.5);
        font-size: 13px;

        a {
          color: rgba(255, 255, 255, 0.5);
        }

        span {
          display: inline-block;
          margin: 0 5px;
        }
      }
    }
  }

  h4.ui.header {
    color: #fff;
    font-weight: bold;
  }
`

export default FooterStyles
