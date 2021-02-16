import React from 'react'
import PropTypes from 'prop-types'
import { find } from 'lodash'

import { getLocationPathname } from 'utils/html/window'

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
  links = defaultLinks
}) => {
  const activeLink = find(
    links,
    link => link.to === getLocationPathname()
  )
  return (
    <div className={styles.dashboardWrapper}>
      <Header title={activeLink.title} />
      <div className={styles.contentWrapper}>
        <LeftNav links={links} />
        <div
          className={`${styles.body} bg-gray p-40 flex-xs-10`}
        >
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
