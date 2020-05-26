import React from 'react'
import { Form, Field } from 'react-final-form'
import isEmail from 'sane-email-validation'
import onSubmit from '../../common/onSubmit'

const required = (value) => (value ? undefined : 'Required')
const validEmail = (value) => (isEmail(value) ? undefined : 'Invalid Email')
const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined)

const renderInput = ({ input, meta, label, ...other }) => (
  <div className={meta.active && 'active'}>
    <label htmlFor={other.id}>{label}</label>
    <input {...input} {...other} placeholder={label} />
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
)

/**
 * Objective: Refactor to use a single render function, and put a
 * className="active" on the <div/> when the field it contains is
 * active.
 *
 * Requirements:
 *  - The `placeholder` prop should be given to `<Field/>` and
 *    used in both the `<label/>` and the `<input/>` components.
 */
export default function SignupForm() {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            validate={required}
            id="firstName"
            type="text"
            label="First name"
            render={renderInput}
          ></Field>
          <Field
            name="lastName"
            validate={required}
            id="lastName"
            type="text"
            label="Last name"
            render={renderInput}
          ></Field>
          <Field
            name="email"
            validate={composeValidators(required, validEmail)}
            id="email"
            type="email"
            label="Email"
            render={renderInput}
          ></Field>

          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  )
}
