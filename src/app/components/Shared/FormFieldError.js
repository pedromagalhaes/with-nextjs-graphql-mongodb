import PropTypes from 'prop-types'

const FormFieldError = ({ children }) => (
  <p>{children}</p>
)

FormFieldError.propTypes = {
  children: PropTypes.node
}

export default FormFieldError
