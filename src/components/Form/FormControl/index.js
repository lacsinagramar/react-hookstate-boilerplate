import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'

const FormControl = ({ error, inputRef, label, ...rest }) => {
  const hasError = !!error
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...rest}
        ref={inputRef}
        isInvalid={hasError}
      />
      {hasError && (
        <small className="text-danger">{error.message}</small>
      )}
    </Form.Group>
  )
}

FormControl.propTypes = {
  error: PropTypes.object
}

export default FormControl
