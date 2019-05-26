import { Menu, Container, Segment, Icon, Button } from 'semantic-ui-react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import { Auth as AuthService } from '@services'
import Logo from '@static/logo.svg'
import redirect from '@utils/redirect'
import HeaderStyles from './index.styles'

const Header = ({ router, ...props }) => {
  console.log(props)
  const { user } = props
  const isActive = url => !!(router.asPath === url)

  const handleSignOutSubmit = (e) => {
    e.preventDefault()
    AuthService.signOut()
      .then(() => {
        redirect({}, '/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <HeaderStyles className='site-header'>
        <Segment inverted>
          <Menu inverted secondary>
            <Container>
              <Menu.Menu position='left'>
                <Link href='/' as='/'>
                  <Menu.Item className='logo' position='left'>
                    <Logo />
                  </Menu.Item>
                </Link>
              </Menu.Menu>
              <Menu.Menu position='right'>
                <>
                  <Link href='/public/about' as='/about'>
                    <Menu.Item name='about' active={isActive('/about')}>
                      <span>02.</span> About
                    </Menu.Item>
                  </Link>
                  <Link href='/public/projects' as='/projects'>
                    <Menu.Item name='projects' active={isActive('/projects')}>
                      <span>03.</span> Projects
                    </Menu.Item>
                  </Link>
                  <Link href='/public/services' as='/services'>
                    <Menu.Item name='services' active={isActive('/services')}>
                      <span>04.</span> Services
                    </Menu.Item>
                  </Link>
                  <Link href='/public/blog' as='/blog'>
                    <Menu.Item name='blog' active={isActive('/blog')}>
                      <span>05.</span> Blog
                    </Menu.Item>
                  </Link>
                  <Link href='/public/contact' as='/contact'>
                    <Menu.Item name='contact' active={isActive('/contact')}>
                      <span>06.</span> Contact
                    </Menu.Item>
                  </Link>
                </>
              </Menu.Menu>
              <Menu.Menu position='right'>
                {/*
                <Menu.Item>
                  <Dropdown trigger={trigger} options={options} />
                </Menu.Item>
                */}
                <Menu.Item>
                  <Icon size='large' name='search' />
                </Menu.Item>
                {!user ? (
                  <>
                    <Link href='/public/authentication/login' as='/login'>
                      <Menu.Item>
                        <Button inverted basic color='grey'>
                          Log In
                        </Button>
                      </Menu.Item>
                    </Link>
                    <Link href='/public/authentication/register' as='/register'>
                      <Menu.Item>
                        <Button inverted>Sign Up</Button>
                      </Menu.Item>
                    </Link>
                  </>
                ) : (
                  <>
                    <Menu.Item>{`${user.firstName} ${user.lastName}`}</Menu.Item>
                    <Menu.Item onClick={e => handleSignOutSubmit(e)}>
                      <Button inverted>Log Out</Button>
                    </Menu.Item>
                  </>
                )}
              </Menu.Menu>
            </Container>
          </Menu>
        </Segment>
      </HeaderStyles>
    </>
  )
}

Header.propTypes = {
  router: PropTypes.object,
  user: PropTypes.object
}

export default withRouter(Header)
