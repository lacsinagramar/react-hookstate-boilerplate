import React from 'react'
import PropTypes from 'prop-types'
import { find } from 'lodash'
import { Col, Row } from 'react-bootstrap'

import { getLocationPathname } from 'utils/html/window'

import Container from 'components/Container'

import styles from './styles.module.scss'
import Header from './Header'
import LeftNav from './LeftNav'

const defaultLinks = [
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Test',
    to: '/test'
  }
]

const DashboardWrapper = ({
  children,
  links = defaultLinks,
  hasNoRightMenu,
  rightMenuContent
}) => {
  const activeLink = find(
    links,
    link => link.to === getLocationPathname()
  )
  return (
    <Container className={`${styles.dashboardWrapper}`}>
      <Header title={activeLink.title} />
      <Row className={styles.contentWrapper}>
        <LeftNav links={links} />
        <Col
          xs={hasNoRightMenu ? 10 : 8}
          className="p-40 bg-gray"
        >
          {children}
        </Col>
        {!hasNoRightMenu && (
          <Col
            xs={2}
            className={`${styles.rightMenu} p-35 bg-gray`}
          >
            {rightMenuContent}
          </Col>
        )}
      </Row>
    </Container>
  )
}

DashboardWrapper.propTypes = {
  children: PropTypes.node,
  links: PropTypes.array,
  rightMenuContent: PropTypes.node
}

export default DashboardWrapper
