import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as Actions from '../redux/auth/actions'

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Please enter an email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Please enter a password.'
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Please enter a password confirmation.'
  }

  if (values.password !== values.passwordConfirmation) {
    errors.password = 'Passwords do not match'
  }

  return errors
}

const SignUp = ({ authenticationError, signUpUser, handleSubmit }) => {
  const handleFormSubmit = values => signUpUser(values)

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
        <h2 className="text-center">Sign Up</h2>
        { renderAuthenticationError(authenticationError) }
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Field name="email" type="text" component={renderField} label="Email" />
          <Field name="password" type="password" component={renderField} label="Password" />
          <Field name="passwordConfirmation" type="password" component={renderField} label="Password Confirmation" />
          <button action="submit" className="btn btn-primary">Sign up</button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  authenticationError: state.auth.error
})

export default connect(mapStateToProps, Actions)(
  reduxForm({
    form: 'signup',
    validate
  })(SignUp)
)
