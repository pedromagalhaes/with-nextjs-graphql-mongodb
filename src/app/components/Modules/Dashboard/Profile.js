/* eslint-disable no-unused-vars */
import { Button, Container, Form, Grid, Message } from 'semantic-ui-react'
import nanoid from 'nanoid'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import { ModuleTitle, Text, FormFieldError } from '@components'
import Styles from './Profile.styles'

const Profile = () => (
  <>
    <Styles>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <ModuleTitle as='h1' text='Dashboard' icon='dashboard' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer='10'>
              <Text as='p'>
                As a logged user you will be able to save your favorite artworks, galleries, artists and events. You can
                also access exclusive features and subscribe to our newsletters.
              </Text>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Styles>
  </>
)

export default Profile
