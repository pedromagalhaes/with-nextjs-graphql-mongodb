/* eslint-disable no-unused-vars */
import { Mutation, withApollo } from 'react-apollo'
import { Button, Container, Form, Grid, Message } from 'semantic-ui-react'
import nanoid from 'nanoid'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import mutation from '@mutations/Login'
import { ModuleTitle, Text, FormFieldError } from '@components'
import redirect from '@utils/redirect'
import Styles from './ForgotPassword.styles'

const initialValues = {
  email: ''
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!')
})

const ForgotPassword = () => (
  <>
    <Styles>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <ModuleTitle as='h1' text='Forgot Password' icon='user secret' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer='10'>
              <Text as='p'>
                Please enter your e-mail address, so we can send to you a confirmation to generate a new password.
              </Text>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Mutation
          mutation={mutation}
          onCompleted={(data) => {
            console.log(data)
          }}
          onError={(error) => {
            console.log(error.graphQLErrors)
          }}
        >
          {(create, { loading, error, data }) => (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              size='large'
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  create({
                    variables: {
                      email: values.email
                    }
                  })
                  resetForm(initialValues)
                  setSubmitting(false)
                }, 500)
              }}
            >
              {(props) => {
                const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props
                return (
                  <form onSubmit={handleSubmit}>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column computer={10}>
                          <Grid>
                            <Grid.Row>
                              <Grid.Column computer={10}>
                                {loading && <p>Loading...</p>}
                                {error && error.graphQLErrors.length > 0 && (
                                  <Message
                                    header='Login was unsuccessful'
                                    negative
                                    size='small'
                                    content={error.graphQLErrors.map(({ message }) => (
                                      <span key={nanoid()}>- {message}</span>
                                    ))}
                                  />
                                )}
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                              <Grid.Column computer={10}>
                                <Form.Input
                                  fluid
                                  label='E-mail address'
                                  name='email'
                                  id='email'
                                  value={values.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.email && touched.email}
                                />
                                {errors.email && touched.email && <FormFieldError>{errors.email}</FormFieldError>}
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                              <Grid.Column computer={10}>
                                <Button color='teal' fluid size='large' type='submit' disabled={isSubmitting}>
                                  Submit
                                </Button>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </form>
                )
              }}
            </Formik>
          )}
        </Mutation>
      </Container>
    </Styles>
  </>
)

ForgotPassword.propTypes = {
  values: PropTypes.object,
  touched: PropTypes.bool,
  errors: PropTypes.object,
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default withApollo(ForgotPassword)
