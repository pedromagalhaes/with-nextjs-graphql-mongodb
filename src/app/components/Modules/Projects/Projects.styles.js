import styled from 'styled-components'

const ProjectsStyles = styled.section`
  margin: 0;
  background: ${props => props.theme.color1};
  padding: 40px 0 30px 0;

  .grid {
    position: relative;

    &.left {
      .image-container {
        grid-column: 6 / -1;
        grid-row: 1 / -1;
      }

      .container {
        text-align: left;
        grid-column: 1 / 7;
        grid-row: 1 / -1;
      }

      .techlist {
        justify-content: flex-start;

        li:first-child {
          margin-left: 0;
        }
      }

      .links {
        text-align: left;

        a i {
          margin-left: 0;
          margin-right: 20px;
        }
      }
    }

    &.right {
      .container {
        text-align: right;
      }
    }
  }

  .ui.container {
    max-width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }

  h3.ui.header {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    font-size: 30px;
    margin: 10px 0 0;
    font-weight: bold;
  }

  h4.ui.header {
    font-size: 13px;
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 7px;
    padding: 0;
    color: ${props => props.theme.color10};
  }

  h5.ui.header {
    font-size: 28px;
    font-weight: 600;
    margin: 0 0 20px;
  }

  .image-container {
    grid-column: 1 / 8;
    position: relative;
    z-index: 1;
    grid-row: 1 / -1;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
    }

    .image-wrapper {
      position: relative;
      overflow: hidden;

      div {
        width: 100%;
        padding-bottom: 62.5%;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .project {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 10px 10px;
    margin-bottom: 40px;

    .container {
      position: relative;
      z-index: 2;
      grid-row: 1 / -1;
      display: block;
      grid-column: 7 / -1;
    }
  }

  .description {
    background-color: ${props => props.theme.color12};
    font-size: 16px;
    padding: 20px;
    color: ${props => props.theme.color7};
  }

  .techlist {
    justify-content: flex-end;
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 5px;
    padding: 0;
    list-style: none;

    li {
      margin-left: 20px;
      font-size: 13px;
      color: ${props => props.theme.color8};
      margin-right: 20px;
      margin-bottom: 15px;
      white-space: nowrap;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  .links {
    text-align: right;

    i {
      padding: 0;
      margin: 0 0 0 20px;
      font-weight: normal;
      font-size: 18px;
      color: ${props => props.theme.color8};
    }
  }
`

export default ProjectsStyles
