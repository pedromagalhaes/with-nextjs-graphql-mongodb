import styled from 'styled-components'

const Styles = styled.section`
  margin: 0;
  background: ${props => props.theme.color9};
  padding: 40px 0 80px 0;

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

  h5.ui.header {
    margin: 0 0 10px;
    font-size: 22px;
    color: ${props => props.theme.color6};
  }

  .project-grid {
    display: grid;
    grid-gap: 15px;
    position: relative;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  }

  .project-inner {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 25px;
    height: 100%;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: ${props => props.theme.color1};
  }

  .project {
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus {
      outline: 0;

      .project-inner {
        transform: translateY(-5px);
      }
    }
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-items: flex-end;
    margin-bottom: 30px;
  }

  .folder {
    color: #64ffda;

    svg {
      width: 40px;
      height: 40px;
      fill: ${props => props.theme.color10};
    }
  }

  .links {
    margin-right: -10px;
    color: #a8b2d1;
  }

  .icon-link {
    padding: 10px;
    position: relative;
    top: -5px;

    i {
      font-size: 18px;
      color: ${props => props.theme.color8};
    }
  }

  .project-description {
    font-size: 14px;
    margin-top: 20px;
    color: ${props => props.theme.color4};

    p {
      line-height: 20px;
    }

    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      cursor: pointer;

      &:hover,
      &:focus,
      &:active {
        color: #64ffda;
        outline: 0;

        &::after {
          width: 100%;
        }
      }

      &::after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: #64ffda;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }

  .tech-list {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 0;
    margin: 35px 0 0;
    list-style: none;

    li {
      display: list-item;
      margin: 0;
      padding: 0;
      list-style: none;
      font-family: ${props => props.theme.bodyFont};
      font-size: 12px;
      color: ${props => props.theme.color4};
      line-height: 1.75;
      margin-right: 35px;
      margin-left: 0;
      padding-left: 0;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  .show-more-button {
    margin: 100px auto 0;
  }
`

export default Styles
