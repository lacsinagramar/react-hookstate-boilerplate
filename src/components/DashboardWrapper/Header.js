import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const Header = ({ title }) => {
  return (
    <div className={`${styles.header} py-15`}>
      <div className={`${styles.logoWrapper} pl-30 flex-xs-2`}>
        Peak Icon
      </div>
      <div
        className={`${styles.contentWrapper} pr-15 flex-xs-10`}
      >
        <div className="d-flex justify-content-around flex-xs-12">
          <div className={`${styles.headerTitle} flex-xs-10`}>
            {title}
          </div>
          <div className={`${styles.headerMenu} flex-xs-2`}>
            User Details
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
