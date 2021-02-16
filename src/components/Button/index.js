import React from 'react'
import { Button as BSButton } from 'react-bootstrap'

export const Button = ({
  type = 'button',
  children,
  onClick,
  ...rest
}) => (
  <BSButton type={type} onClick={onClick} {...rest}>
    {children}
  </BSButton>
)
