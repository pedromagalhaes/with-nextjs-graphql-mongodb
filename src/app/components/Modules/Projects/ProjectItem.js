import PropTypes from 'prop-types'

import { Image, Header, Icon } from 'semantic-ui-react'

const ProjectItem = ({ align, title, description }) => (
  <div className={`grid ${align}`}>
    <div className='project'>
      <div className='container'>
        <Header as='h4' content='Featured Project' inverted />
        <Header as='h5' content={title} inverted />
        <div className='description'>
          <p>
            {description}
          </p>
        </div>
        <ul className='techlist'>
          <li>React</li>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>Microservices</li>
        </ul>
        <div className='links'>
          <a href='' target='_blank'>
            <Icon name='github' />
          </a>
          <a href='' target='_blank'>
            <Icon name='external' />
          </a>
        </div>
      </div>
      <div className='image-container'>
        <div className='image-wrapper'>
          <div />
          <Image src='https://dummyimage.com/580x360/557C83/CCCCCC' fluid />
        </div>
      </div>
    </div>
  </div>
)

ProjectItem.propTypes = {
  align: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default ProjectItem
