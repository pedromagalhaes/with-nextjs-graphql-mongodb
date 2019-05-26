import { Container, Grid, Header, List, Segment } from 'semantic-ui-react'

import FooterStyles from './index.styles'

const Footer = () => (
  <FooterStyles className='site-footer'>
    <>
      <Segment inverted vertical>
        <Container>
          <Grid inverted columns={5}>
            <Grid.Row>
              <Grid.Column>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header inverted as='h4' content='Projects' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header inverted as='h4' content='Blog' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header inverted as='h4' content='Contact' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid inverted>
            <Grid.Row>
              <Grid.Column computer={12}>
                <p>© 2019 Pedro Magalhaes. Trademarks and brands are the property of their respective owners.</p>
              </Grid.Column>
              <Grid.Column textAlign='right' computer={4}>
                <p><a>Legal</a> <span>|</span> <a>Terms</a> <span>|</span> <a>Privacy</a></p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  </FooterStyles>
)

export default Footer
