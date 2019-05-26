import gql from 'graphql-tag'

export default (context, apolloClient) => apolloClient
  .query({
    query: gql`
        query user {
          user {
            id
            firstName
            lastName
            email
          }
        }
      `
  })
  .then(({ data }) => ({ loggedInUser: data }))
  .catch(() => ({ loggedInUser: {} }))
