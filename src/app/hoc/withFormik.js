/* eslint-disable react/prop-types, react/destructuring-assignment */
import { withFormik } from 'formik'

const withSemanticUIFormik = props => WrappedComponent => withFormik(props)(class extends React.Component {
  handleBlur = (e) => {
    e.persist()
    if (e.target && e.target.name) {
      this.props.setFieldValue(e.target.name, e.target.value)
      this.props.setFieldTouched(e.target.name)
    }
  }

  handleChange = (e, data) => {
    if (data && data.name) {
      this.props.setFieldValue(data.name, data.value)
    }
    if (data.type === 'checkbox') {
      this.props.setFieldValue(data.name, data.checked)
    }
  }

  render() {
    return (
      <WrappedComponent
        {...this.props}
        handleBlur={this.handleBlur}
        handleChange={this.handleChange}
      />
    )
  }
})

export default withSemanticUIFormik
