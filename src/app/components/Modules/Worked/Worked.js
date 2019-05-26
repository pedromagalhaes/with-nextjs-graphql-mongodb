import { Tab, Container, Header, Grid } from 'semantic-ui-react'
import WorkedStyles from './Worked.styles'

const panes = [
  {
    menuItem: 'Digital Management, LLC',
    render: () => (
      <Tab.Pane>
        <Header as='h4' inverted>
          <span>Senior Software Engineer</span>
          <span className='company'>
            <a href='https://www.dminc.com/' target='_blank' rel='nofollow noopener noreferrer'>
              &nbsp;@ Digital Management
            </a>
          </span>
        </Header>
        <Header as='h5' inverted>
          <span>July - Dec 2015</span>
        </Header>
        <div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</li>
          </ul>
        </div>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Golden Gekko',
    render: () => (
      <Tab.Pane>
        <Header as='h4' inverted>
          <span>Lead Frontend Engineer</span>
          <span className='company'>
            <a href='https://www.dminc.com/' target='_blank' rel='nofollow noopener noreferrer'>
              &nbsp;@ Golden Gekko
            </a>
          </span>
        </Header>
        <Header as='h5' inverted>
          <span>July - Dec 2015</span>
        </Header>
        <div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</li>
          </ul>
        </div>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Omnibees',
    render: () => (
      <Tab.Pane>
        <Header as='h4' inverted>
          <span>Lead Frontend Engineer</span>
          <span className='company'>
            <a href='https://www.dminc.com/' target='_blank' rel='nofollow noopener noreferrer'>
              &nbsp;@ Omnibees
            </a>
          </span>
        </Header>
        <Header as='h5' inverted>
          <span>July - Dec 2015</span>
        </Header>
        <div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</li>
          </ul>
        </div>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Visualforma',
    render: () => (
      <Tab.Pane>
        <Header as='h4' inverted>
          <span>Senior Frontend Engineer</span>
          <span className='company'>
            <a href='https://www.dminc.com/' target='_blank' rel='nofollow noopener noreferrer'>
              &nbsp;@ Visualforma
            </a>
          </span>
        </Header>
        <Header as='h5' inverted>
          <span>July - Dec 2015</span>
        </Header>
        <div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</li>
          </ul>
        </div>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Porto City Hall',
    render: () => (
      <Tab.Pane>
        <Header as='h4' inverted>
          <span>Full Stack Developer</span>
          <span className='company'>
            <a href='https://www.dminc.com/' target='_blank' rel='nofollow noopener noreferrer'>
              &nbsp;@ Porto City Hall
            </a>
          </span>
        </Header>
        <Header as='h5' inverted>
          <span>July - Dec 2015</span>
        </Header>
        <div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</li>
          </ul>
        </div>
      </Tab.Pane>
    )
  }
]

const CardComponent = () => (
  <WorkedStyles>
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column computer='16'>
            <Header as='h3' content="Where I've Worked" inverted />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer='16'>
            <div className='tabs'>
              <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </WorkedStyles>
)

export default CardComponent
