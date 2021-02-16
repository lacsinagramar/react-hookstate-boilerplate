import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { getLocationPathname } from 'utils/html/window'

import Anchor from 'components/Anchor'

import styles from './styles.module.scss'

const NavLink = ({ icon, title, to }) => {
  const pathname = getLocationPathname()
  const isActive = pathname === to ? styles.active : ''

  return (
    <Anchor
      href={to}
      className={`${styles.navLink} ${isActive} d-block text-white px-25 py-12`}
    >
      <div className="d-flex">
        <div className={`${styles.iconWrapper} mr-15`}>
          {icon}
        </div>
        <div>{title}</div>
      </div>
    </Anchor>
  )
}

NavLink.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

const LeftNav = ({ links }) => {
  return (
    <div
      className={`${styles.leftMenu} bg-primary pt-15 flex-xs-2`}
    >
      {links.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          title={link.title}
          icon={<FontAwesomeIcon icon={faCoffee} />}
        />
      ))}
    </div>
  )
}

LeftNav.propTypes = {
  links: PropTypes.array.isRequired
}

export default LeftNav
