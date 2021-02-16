import React from 'react'
import * as yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from 'components/Button'
import FormControl from 'components/Form/FormControl'

import styles from './styles.module.scss'
import { useUser } from './hooks'

const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('This is not a valid email')
    .required('Please enter your email'),
  password: yup.string().required('Please enter your password')
})

const Login = () => {
  const { getUser, isLoading } = useUser()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginFormSchema)
  })

  const loginFormOnSubmit = data => {
    // For form validation example
    // eslint-disable-next-line
    console.log({ data })
    getUser()
  }
  return (
    <div className={styles.homePage}>
      <Form onSubmit={handleSubmit(loginFormOnSubmit)}>
        <FormControl
          inputRef={register}
          type="string"
          name="email"
          label="Email"
          placeholder="Enter email"
          error={errors.email}
        />

        <FormControl
          inputRef={register}
          type="password"
          name="password"
          label="Password"
          placeholder="Enter password"
          error={errors.password}
        />
        <Button block type="submit" variant="primary">
          {isLoading ? 'Logging In...' : 'Login'}
          <FontAwesomeIcon icon={faCoffee} />
        </Button>
      </Form>
    </div>
  )
}

Login.propTypes = {}

export default Login
