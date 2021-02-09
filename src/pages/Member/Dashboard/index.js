import React from 'react'
import { isEmpty } from 'lodash'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import DashboardWrapper from 'components/DashboardWrapper'
import FormControl from 'components/Form/FormControl'
import Button from 'components/Button'

import { ROUTES } from '../constants'

import { useToDos } from './hooks'

const MemberDashboard = () => {
  const {
    toDos,
    addToDoLoading,
    addToDo,
    addedData
  } = useToDos()
  const { register, handleSubmit } = useForm()
  const hasToDos = !isEmpty(toDos)

  const addTaskFormSubmit = data => {
    const { task } = data
    addToDo({ userId: 1, title: task, completed: false })
  }

  return (
    <DashboardWrapper links={ROUTES}>
      <h2>
        User Todos (Sample HTTP POST Request and useMutation)
      </h2>
      {hasToDos && toDos.map(toDo => <li>{toDo.title}</li>)}
      <Form onSubmit={handleSubmit(addTaskFormSubmit)}>
        <FormControl
          inputRef={register}
          type="string"
          name="task"
          placeholder="Enter a task"
        />
        <Button block type="submit" variant="primary">
          {addToDoLoading ? 'Adding...' : 'Add task'}
        </Button>
        {addedData && (
          <div>
            <div>Added Data</div>
            <pre>{JSON.stringify(addedData)}</pre>
          </div>
        )}
      </Form>
    </DashboardWrapper>
  )
}

MemberDashboard.propTypes = {}

export default MemberDashboard
