import styled from 'styled-components'

const WorkedStyles = styled.section`
  background: ${props => props.theme.color12};
  padding: 45px 0 67px 0;

  .ui.vertical.tabular.menu .active.item,
  .ui.segment {
    background: none !important;
  }

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
  }

  h4.ui.header {
    color: ${props => props.theme.color7};
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 5px;

    span {
      font-size: 22px;
      font-weight: 500;
    }
  }

  h5.ui.header {
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 0.5px;
    color: ${props => props.theme.color7};
    margin-bottom: 30px;

    span {
      font-size: 13px;
      font-weight: normal;
      letter-spacing: 0.5px;
      color: ${props => props.theme.color7};
    }
  }

  .stretched.twelve.wide.column {
    padding: 0;
    margin: 7px 0 0;
  }

  ul {
    font-size: 18px;
    padding: 0;
    margin: 0;
    list-style: none;
    max-width: 70%;

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      color: ${props => props.theme.color7};
      font-size: 15px;

      &::before {
        content: "▹";
        position: absolute;
        left: 0;
        color: ${props => props.theme.color10} !important;
        line-height: 20px;
      }
    }
  }

  .ui.attached.segment,
  .ui.vertical.tabular.menu .active.item,
  .ui.vertical.tabular.menu {
    border-left: 2px solid ${props => props.theme.color2};
    border-right: none !important;
    border-radius: 0 !important;
  }

  .ui.vertical.tabular.menu .active.item {
    border-left: 2px solid  ${props => props.theme.color10} !important;
    border-top: none !important;
    border-bottom: none !important;
    border-right: none !important;
    background: ${props => props.theme.color1} !important;
    color: ${props => props.theme.color10} !important;
    position: relative;
    left: -2px;
    text-indent: 2px;
    text-shadow: none !important;
    font-weight: normal;
  }

  .ui.attached.segment,
  .hDQpYG .ui.vertical.tabular.menu .active.item,
  .hDQpYG .ui.vertical.tabular.menu {
    border: none !important;
  }

  .ui.vertical.tabular.menu .item {
    color: ${props => props.theme.color7};
  }

  .company {
    a {
      color: ${props => props.theme.color10} !important;
    }
  }
`

export default WorkedStyles
