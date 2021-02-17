import React from 'react'
import { Container as BSContainer } from 'react-bootstrap'

import styles from './styles.module.scss'

const Container = ({ children, className, ...rest }) => {
  return (
    <BSContainer
      {...rest}
      className={`${styles.container} ${className}`}
    >
      {children}
    </BSContainer>
  )
}

Container.propTypes = {}

export default Container
