import { Segment, Container, Header, Button } from 'semantic-ui-react'
import TeaserStyles from './Teaser.styles'

const TeaserComponent = () => (
  <TeaserStyles>
    <Segment textAlign='center' vertical>
      <Container>
        <Header as='h1' content='Hi, my name is' inverted />
        <Header as='h2' content='Pedro Magalhães' inverted />
        <Header as='h3' content='I build things for the web' inverted />
        <div className='description'>
          <p>
              Im a software engineer based in Cambodia, specializing in building (and occasionally designing)
              exceptional, high-quality websites and applications.
          </p>
        </div>
        <Button primary inverted size='big'>
            Get In Touch
        </Button>
      </Container>
    </Segment>
  </TeaserStyles>
)

export default TeaserComponent
