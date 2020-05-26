import React from 'react'
import { Form, Field } from 'react-final-form'
import onSubmit from '../../common/onSubmit'
import isEmail from 'sane-email-validation'

/**
 * Objective: Add record-level validation to <Form>
 *
 * Requirements:
 *  - It should call `onSubmit` when the form is submitted.
 *  - The form should not submit if the values are invalid
 *    (React Final Form will handle this for you)
 *  - Errors should be displayed next to the inputs in a `<span>`
 */
export default function SignupForm() {
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {}

        if (!values.firstName) {
          errors.firstName = 'Required'
        }
        if (!values.lastName) {
          errors.lastName = 'Required'
        }
        if (!values.email) {
          errors.email = 'Required'
        } else if (!isEmail(values.email)) {
          errors.email = 'Invalid email'
        }

        return errors
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstName">
            {({ input, meta }) => (
              <div>
                <label htmlFor="firstName">First Name</label>
                <input {...input} type="text" id="firstName" placeholder="First Name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="lastName">
            {({ input, meta }) => (
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input {...input} type="text" id="lastName" placeholder="Last Name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <label htmlFor="email">Email</label>
                <input {...input} type="text" id="email" placeholder="Email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  )
}
