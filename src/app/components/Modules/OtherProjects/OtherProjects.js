import { Container, Header, Grid } from 'semantic-ui-react'

import OtherProjectItem from './OtherProjectItem'
import Styles from './OtherProjects.styles'

const CardComponent = () => (
  <Styles>
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column computer='16'>
            <Header as='h3' content='Other Projects' inverted />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer='16'>
            <div className='project-grid'>
              <OtherProjectItem title='React Starter App' />
              <OtherProjectItem title='GraphQL Music Playlist' />
              <OtherProjectItem title='Next.js Boostrap' />
              <OtherProjectItem title='Google Weather App' />
              <OtherProjectItem title='GraphQL Music Playlist' />
              <OtherProjectItem title='Semantic UI Startkit' />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Styles>
)

export default CardComponent
