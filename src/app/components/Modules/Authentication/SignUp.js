/* eslint-disable no-unused-vars */

import { Mutation, withApollo } from 'react-apollo'
import { Button, Container, Form, Grid, Message } from 'semantic-ui-react'
import nanoid from 'nanoid'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import mutation from '@mutations/Signup'
import { ModuleTitle, Text, FormFieldError } from '@components'
import Styles from './SignUp.styles'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsCondition: false
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required!'),
  lastName: Yup.string().required('Last name is required!'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  password: Yup.string()
    .required('Password is required!')
    .min(7, 'Password must be at least 7 characters long.')
    .matches(
      /^(?=.*[A-Z]).{7,}$/,
      'Your password must be at least 7 characters and contain at least one uppercase character.'
    ),
  confirmPassword: Yup.string()
    .required('This field is required!')
    .oneOf([Yup.ref('password'), null], 'Passwords don\'t match'),
  termsCondition: Yup.string().oneOf(['true'], 'This field is required!')
})

const SignUp = () => (
  <>
    <Styles>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <ModuleTitle as='h1' text='Create an Account' icon='signup' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer='10'>
              <Text as='p'>
                As a registered user you will be able to save your favorite artworks, galleries, artists and events. You
                can also access exclusive features and subscribe to our newsletters.
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
                      firstName: values.firstName,
                      lastName: values.lastName,
                      email: values.email,
                      password: values.password
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
                          <Message
                            icon='mail'
                            color='teal'
                            size='small'
                            header='Your registration was submitted successfully'
                            content={<p>Please confirm your account by clicking the activation email link</p>}
                          />
                          <Grid>
                            <Grid.Row>
                              <Grid.Column computer={16}>
                                {loading && <p>Loading...</p>}
                                {error && error.graphQLErrors.length > 0 && (
                                  <Message
                                    header='There was some errors with your submission:'
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
                              <Grid.Column computer='8'>
                                <Form.Input
                                  fluid
                                  label='First name'
                                  name='firstName'
                                  id='firstName'
                                  value={values.firstName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.firstName && touched.firstName}
                                />
                                {errors.firstName && touched.firstName && (
                                  <FormFieldError>{errors.firstName}</FormFieldError>
                                )}
                              </Grid.Column>
                              <Grid.Column computer='8'>
                                <Form.Input
                                  fluid
                                  label='Last name'
                                  name='lastName'
                                  id='lastName'
                                  value={values.lastName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.lastName && touched.lastName}
                                />
                                {errors.lastName && touched.lastName && (
                                  <FormFieldError>{errors.lastName}</FormFieldError>
                                )}
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                              <Grid.Column computer={16}>
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
                              <Grid.Column computer={8}>
                                <Form.Input
                                  fluid
                                  name='password'
                                  label='Password'
                                  id='password'
                                  type='password'
                                  value={values.password}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.password && touched.password}
                                />
                                {errors.password && touched.password && (
                                  <FormFieldError>{errors.password}</FormFieldError>
                                )}
                              </Grid.Column>
                              <Grid.Column computer={8}>
                                <Form.Input
                                  fluid
                                  name='confirmPassword'
                                  label='Confirm password'
                                  id='confirmPassword'
                                  type='password'
                                  value={values.confirmPassword}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.confirmPassword && touched.confirmPassword}
                                />
                                {errors.confirmPassword && touched.confirmPassword && (
                                  <FormFieldError>{errors.confirmPassword}</FormFieldError>
                                )}
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                              <Grid.Column computer='16'>
                                <Form.Checkbox
                                  label='I agree to the Terms and Conditions'
                                  id='termsCondition'
                                  name='termsCondition'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.termsCondition && touched.termsCondition}
                                  checked={values.termsCondition}
                                />
                                {errors.termsCondition && touched.termsCondition && (
                                  <FormFieldError>{errors.termsCondition}</FormFieldError>
                                )}
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                              <Grid.Column computer='16'>
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

SignUp.propTypes = {
  values: PropTypes.object,
  touched: PropTypes.bool,
  errors: PropTypes.object,
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default withApollo(SignUp)
