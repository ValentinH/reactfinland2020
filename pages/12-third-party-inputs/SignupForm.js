import React from 'react'
import { Form, Field, useField } from 'react-final-form'
import validate from './validate'
import {
  Paper,
  Grid,
  Button,
  Checkbox,
  InputLabel,
  Radio,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Select,
  TextField,
} from '@material-ui/core'
import onSubmit from '../../common/onSubmit'

const FinalTextField = ({ name, ...rest }) => {
  const { input, meta } = useField(name)
  return (
    <TextField
      {...input}
      {...rest}
      error={meta.touched && meta.error}
      helperText={meta.touched && meta.error}
    />
  )
}

/**
 * Objective: Control this Material-UI form with React Final Form.
 *
 * https://material-ui.com/components/text-fields/
 * https://material-ui.com/components/checkboxes/
 * https://material-ui.com/components/radio-buttons/
 * https://material-ui.com/components/selects/
 * https://material-ui.com/components/buttons/
 *
 * For bonus points, display validation errors using
 * Material-UI's API for displaying errors on text
 * and select fields.
 */
export default function SignupForm() {
  return (
    <Form onSubmit={onSubmit} validate={validate} initialValues={{ tshirtColor: '#ff0000' }}>
      {({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <Paper style={{ padding: 16, maxWidth: 500, margin: '20px auto' }}>
            <Grid container alignItems="flex-start" spacing={4}>
              <Grid item xs={12}>
                <FinalTextField
                  name="firstName"
                  label="First Name"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FinalTextField
                  name="lastName"
                  label="Last Name"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Field name="tshirt" label="T-Shirt?">
                  {({ input, meta, label }) => (
                    <FormControlLabel
                      control={<Checkbox {...input} color="primary" />}
                      label={label}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field name="tshirtSize" label="T-Shirt Size" component="select">
                  {({ input, meta, label }) => (
                    <FormControl fullWidth error={meta.touched && meta.error}>
                      <InputLabel htmlFor="tshirtSize">{label}</InputLabel>
                      <Select {...input} fullWidth disabled={!values.tshirt}>
                        <MenuItem value="xs">Extra Small</MenuItem>
                        <MenuItem value="s">Small</MenuItem>
                        <MenuItem value="m">Medium</MenuItem>
                        <MenuItem value="l">Large</MenuItem>
                        <MenuItem value="xl">Extra Large</MenuItem>
                      </Select>
                      <FormHelperText>{meta.touched && meta.error}</FormHelperText>
                    </FormControl>
                  )}
                </Field>
              </Grid>
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="legend">T-Shirt Color</FormLabel>
                  <RadioGroup row>
                    <Field name="tshirtColor" label="Red" component="radio">
                      {({ input, meta, label }) => (
                        <FormControlLabel
                          label={label}
                          control={<Radio {...input} value="#ff0000" disabled={!values.tshirt} />}
                        />
                      )}
                    </Field>
                    <Field name="tshirtColor" label="Green" component="radio">
                      {({ input, meta, label }) => (
                        <FormControlLabel
                          label={label}
                          control={<Radio {...input} value="#00ff00" disabled={!values.tshirt} />}
                        />
                      )}
                    </Field>
                    <Field name="tshirtColor" label="Blue" component="radio">
                      {({ input, meta, label }) => (
                        <FormControlLabel
                          label={label}
                          control={<Radio {...input} value="#0000ff" disabled={!values.tshirt} />}
                        />
                      )}
                    </Field>
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button variant="contained" color="primary" type="submit" disabled={submitting}>
                Submit
              </Button>
            </Grid>
          </Paper>
          <Paper style={{ padding: 16, maxWidth: 500, margin: '20px auto' }}>
            <pre>{JSON.stringify(values, undefined, 2)}</pre>
          </Paper>
        </form>
      )}
    </Form>
  )
}
