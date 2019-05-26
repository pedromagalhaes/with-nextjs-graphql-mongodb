import React from 'react'
import { Teaser, AboutMe, Worked, OtherProjects, Projects } from '@components'

import withData from '@hoc/withData'
import checkLoggedIn from '@hoc/checkLoggedIn'

class Index extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)
    console.log(loggedInUser)
    return {
      user: loggedInUser
    }
  }

  render() {
    return (
      <>
        <Teaser />
        <AboutMe />
        <Worked />
        <Projects />
        <OtherProjects />
      </>
    )
  }
}

export default withData(Index)
