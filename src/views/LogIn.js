import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AuthActions } from '../redux/actions'

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Please enter an email.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Please enter a password.'
  }

  return errors
}

const Login = ({ AuthActions, authenticationError, handleSubmit }) => {
  const handleFormSubmit = values => AuthActions.signInUser(values)

  const renderField = ({ input, label, type, meta: { touched, error } }) =>
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} className="form-control" type={type} />
        {touched && error && <div className="help-block">{error}</div>}
      </div>
    </fieldset>

  const renderAuthenticationError = (error) =>
    error && <div className="alert alert-danger">{ error }</div>

  return (
    <div className="container">
      <div className="col-md-6 col-md-offset-3">
        <h2 className="text-center">Log In</h2>
        { renderAuthenticationError(authenticationError) }
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Field name="email" component={renderField} className="form-control" type="text" label="Email" />
          <Field name="password" component={renderField} className="form-control" type="password" label="Password" />
          <button action="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  authenticationError: state.auth.error
})

const mapDispatchToProps = dispatch => ({
  AuthActions: bindActionCreators(AuthActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'login',
    validate
  })(Login)
)
