import { ForgotPassword } from '@components'

import withData from '@hoc/withData'
import checkLoggedIn from '@hoc/checkLoggedIn'
import redirect from '@utils/redirect'

class ForgotPasswordPage extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)
    if (loggedInUser.user) {
      redirect(context, '/dashboard')
    }
    return {
      user: loggedInUser
    }
  }

  render() {
    return (
      <>
        <ForgotPassword />
      </>
    )
  }
}

export default withData(ForgotPasswordPage)
