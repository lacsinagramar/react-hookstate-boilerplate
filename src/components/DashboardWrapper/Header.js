import React from 'react'

import styles from './styles.module.scss'

const Header = () => {
  return (
    <div className={`${styles.header} py-15`}>
      <div className={`${styles.logoWrapper} pl-30`}>Hi</div>
      <div className={`${styles.contentWrapper} pr-15`}>
        Hello
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header
