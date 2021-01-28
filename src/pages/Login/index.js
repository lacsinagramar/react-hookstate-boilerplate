import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'components/Button'

import styles from './styles.module.scss'
import { useUser } from './hooks'

import { Greeting } from './components/Greeting'

const Login = () => {
  const { getUser, user, isLoading } = useUser()

  return (
    <div className={styles.homePage}>
      <div className={styles.greeting}>
        <Greeting userName={user && user.name} />

        <div className={styles.userButton}>
          <Button onClick={getUser}>
            {isLoading ? 'Fetching...' : 'GET USER'}
            <FontAwesomeIcon icon={faCoffee} />
          </Button>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {}

export default Login
