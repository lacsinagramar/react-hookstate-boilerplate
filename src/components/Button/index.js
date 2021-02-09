import React from 'react'
import PropTypes from 'prop-types'
import { Button as BSButton } from 'react-bootstrap'

const Button = ({
  type = 'button',
  children,
  onClick,
  ...rest
}) => (
  <BSButton type={type} onClick={onClick} {...rest}>
    {children}
  </BSButton>
)

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Button
