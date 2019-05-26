import { Header, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const OtherProjectItem = ({ title }) => (
  <div className='project'>
    <div className='project-inner'>
      <div>
        <div className='project-header'>
          <div className='folder'>
            <Icon size='big' name='folder open outline' />
          </div>
          <div className='links'>
            <a
              className='icon-link'
              href=''
              target='_blank'
              rel='nofollow noopener noreferrer'
              aria-label='Github Link'
            >
              <Icon name='github' />
            </a>

            <a
              className='icon-link'
              href=''
              target='_blank'
              rel='nofollow noopener noreferrer'
              aria-label='External Link'
            >
              <Icon name='external alternate' />
            </a>
          </div>
        </div>
        <div>
          <Header as='h5' content={title || ''} inverted />
        </div>
        <div className='project-description'>
          <p>
            Custom wordpress theme and e-commerce site built with Timber and WooCommerce for blistabloc, a start-up
            selling the only reactive shoe insert that prevents blisters from forming.
          </p>
        </div>
      </div>
      <div>
        <ul className='tech-list'>
          <li>React</li>
          <li>NextJS</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
  </div>
)

OtherProjectItem.propTypes = {
  title: PropTypes.string
}

export default OtherProjectItem
