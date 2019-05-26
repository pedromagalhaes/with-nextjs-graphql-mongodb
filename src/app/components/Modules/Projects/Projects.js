import { Container, Header, Grid } from 'semantic-ui-react'

import ProjectItem from './ProjectItem'
import ProjectsStyles from './Projects.styles'

const Projects = () => (
  <ProjectsStyles>
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column computer='16'>
            <Header as='h3' content='Works' inverted />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer='16'>
            <ProjectItem
              align='right'
              title='Art Basel'
              description='Art Basel is an international art
            fair staged annually in Basel, Switzerland; Miami Beach, Florida; and Hong Kong, selling
            established and emerging artists. Art Basel provides a platform for galleries to show and
            sell their work to buyers.'
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer='16'>
            <ProjectItem
              align='left'
              title='Grand Basel'
              description='Grand Basel is a global
            automobile show that focuses on collectors pieces from the past and present as well as on
            new cars of exceptional value and quality. It is the worlds first and only show to present
            the automobile in contexts of art,
            design, architecture and lifestyle.'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </ProjectsStyles>
)

export default Projects
