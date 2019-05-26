import gql from 'graphql-tag'

export default gql`
  mutation Signup($firstName: String, $lastName: String, $email: String, $password: String) {
    signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
      firstName
      lastName
      email
    }
  }
`
