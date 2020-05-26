import React from 'react'
import onSubmit from '../../common/onSubmit'

/**
 * Objective: Maintain the values of firstName, lastName and email in
 * local state using `React.useState`, and call `onSubmit` with
 * the two values when the form is submitted.
 *
 * Example submission:
 *   {
 *     firstName: 'Erik',
 *     lastName: 'Rasmussen',
 *     email: 'erik@final-form.org'
 *   }
 */
export default function SignupForm () {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')


  
  return (
    <form onSubmit={ (e) => {
      e.preventDefault()
      onSubmit({firstName, lastName, email})
    }}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={e => {
            setFirstName(e.target.value)
          }}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={e => {
            setLastName(e.target.value)
          }}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Email" 
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
