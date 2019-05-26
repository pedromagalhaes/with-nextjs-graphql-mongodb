import PropTypes from 'prop-types'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'

import theme from '../../../theme/vars'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import layoutStyles from './index.styles'

const { useEffect } = React

const Layout = ({ children, ...props }) => {
  const GlobalStyles = layoutStyles(theme)
  const { user } = props
  console.log(props)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => NProgress.start())
    Router.events.on('routeChangeComplete', () => NProgress.done())
    Router.events.on('routeChangeError', () => NProgress.done())
  })

  return (
    <main>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Head />
          <GlobalStyles />
          <Header {...user} />
          {children}
          <Footer />
        </React.Fragment>
      </ThemeProvider>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object
}

export default Layout
