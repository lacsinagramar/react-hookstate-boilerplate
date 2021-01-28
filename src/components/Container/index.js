import React from 'react'
import { Container as BSContainer } from 'react-bootstrap'

const Container = ({ children }) => {
  return <BSContainer>{children}</BSContainer>
}

Container.propTypes = {}

export default Container
