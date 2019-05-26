import React from 'react'
import { Profile } from '@components'

import withData from '@hoc/withData'
import checkLoggedIn from '@hoc/checkLoggedIn'
import redirect from '@utils/redirect'

class Index extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)
    if (!loggedInUser.user) {
      redirect(context, '/')
    }
    return {
      user: loggedInUser
    }
  }

  render() {
    return (
      <>
        <Profile />
      </>
    )
  }
}

export default withData(Index)
