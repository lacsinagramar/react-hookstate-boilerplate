import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'

import { ReactComponent as IconNotification } from 'assets/icons/notifications.svg'

import styles from './styles.module.scss'

const Header = ({ title }) => {
  return (
    <Row className={`${styles.header} py-15 align-items-center`}>
      <Col xs={2} className="d-flex justify-content-center">
        Company Logo
      </Col>
      <Col
        xs={8}
        className={`${styles.headerTitle} font-weight-bold pl-40`}
      >
        {title}
      </Col>
      <Col xs={2} className={`${styles.headerMenu}`}>
        <IconNotification />
      </Col>
    </Row>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
