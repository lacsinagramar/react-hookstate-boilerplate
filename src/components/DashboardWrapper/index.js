import React from 'react'
import PropTypes from 'prop-types'

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

const DashboardWrapper = ({ children, links }) => {
  return (
    <div className={styles.dashboardWrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <LeftNav links={links || defaultLinks} />
        <div className={`${styles.body} bg-gray p-40`}>
          {children}
        </div>
      </div>
    </div>
  )
}

DashboardWrapper.propTypes = {
  children: PropTypes.node,
  links: PropTypes.array
}

export default DashboardWrapper
