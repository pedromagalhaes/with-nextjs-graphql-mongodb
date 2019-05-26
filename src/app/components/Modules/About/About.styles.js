import styled from 'styled-components'

const AboutMeStyles = styled.section`
  margin: 0;
  background: ${props => props.theme.color2};
  padding: 40px 0 50px 0;

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

  .bio {
    p {
      font-size: 17px;
      color: ${props => props.theme.color6};

      a {
        color: ${props => props.theme.color10};
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: minmax(140px, 200px) minmax(140px, 200px);
    overflow: hidden;
    list-style: none;
    margin: 20px 0 0;
    padding: 0;

    li {
      position: relative;
      margin-bottom: 5px;
      padding-left: 20px;
      font-size: 14px;
      color: ${props => props.theme.color6};

      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${props => props.theme.color10};
        font-size: 14px;
        line-height: 12px;
        top: 5px;
      }
    }
  }
`

export default AboutMeStyles
