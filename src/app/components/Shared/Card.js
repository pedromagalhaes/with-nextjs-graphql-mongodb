import { Grid, Image, Card, Container } from 'semantic-ui-react'
import CardStyles from './Card.styles'

const CardComponent = () => (
  <CardStyles>
    <Container>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column computer={16}>
            <Card fluid>
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
              </Card.Content>
              <Image
                style={{ maxHeight: '333px' }}
                src='https://dummyimage.com/1127x333/27363b/dfdfdf'
                fluid
              />
              <Card.Content>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </CardStyles>
)

export default CardComponent
