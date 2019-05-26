import styled from 'styled-components'

const HeaderStyles = styled.section`
  margin-bottom: 0;

  .ui.segment {
    border-radius: 0;
    padding: 25px 0 25px 0;
    box-shadow: none;
    background: ${props => props.theme.color1};
  }

  .right.menu {
    .item,
    .item button,
    .item i {
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

      &:hover {
        outline: none;
      }
    }

    .item,
    .item button {
      font-size: 15px;
    }
  }

  .left.menu {
    .logo.left.item {
      padding: 0;
      border: 0;
      margin: 0;

      &:hover,
      &:active,
      &:focus {
        background: none;
      }

      svg {
        width: 49px;
        shape-rendering: geometricPrecision;
      }

      span {
        color: ${props => props.theme.color6} !important;
        margin-left: 15px;
      }

      &::before {
        background: none;
      }
    }
  }

  .ui.dropdown > .dropdown.icon {
    margin-left: 10px;
  }

  .ui.secondary.inverted.menu a.item {
    background: none;
    color: ${props => props.theme.color8} !important;

    &.active,
    &:hover {
      color: ${props => props.theme.color6} !important;
      border-radius: 0;
    }

    span {
      display: none;
      margin-right: 10px;
      color: ${props => props.theme.color6} !important;
    }
  }

  .ui.inverted.button,
  .ui.inverted.button {
    color: ${props => props.theme.color10} !important;
    box-shadow: 0 0 0 2px ${props => props.theme.color10} inset !important;
    font-family: ${props => props.theme.bodyFont};
    font-weight: 400;

    &:hover,
    &:active,
    &:focus {
      background: ${props => props.theme.color10};
      color: ${props => props.theme.color1} !important;
    }
  }
`

export default HeaderStyles
