import { Image, Container, Header, Grid } from 'semantic-ui-react'

import AboutMeStyles from './About.styles'

const AboutMe = () => (
  <AboutMeStyles>
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column computer='16'>
            <Header as='h3' content='About Me' inverted />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer='9'>
            <div className='bio'>
              <p>
                Hello! Im Pedro, a software engineer based in Cambodia, who enjoys building things that live on the
                internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user
                interfaces with efficient and modern backends.
              </p>
              <p>
                Shortly after graduating from{' '}
                <a href='http://dminc.com/' target='blank'>
                  Instituto Superior da Maia
                </a>
                , I joined the engineering team at
                <a href='https://www.ismai.pt/' target='blank'>
                  {' '}
                  Digital Management
                </a>{' '}
                where I work on a wide variety of interesting and meaningful projects on a daily basis.
              </p>
              <p>Heres a few technologies Ive been working with recently:</p>
            </div>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Mongo DB</li>
              <li>GraphQL</li>
              <li>Jest</li>
              <li>React Native</li>
              <li>HTML & CSS</li>
            </ul>
          </Grid.Column>
          <Grid.Column computer='2' />
          <Grid.Column computer='5'>
            <Image src='https://dummyimage.com/500x500/27363b/dfdfdf' fluid />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </AboutMeStyles>
)

export default AboutMe
