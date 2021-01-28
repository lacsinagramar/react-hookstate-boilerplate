import React from 'react'

import DashboardWrapper from 'components/DashboardWrapper'

import { ROUTES } from '../constants'

const MemberDashboard = () => {
  return (
    <DashboardWrapper links={ROUTES}>
      Member Dashboard
    </DashboardWrapper>
  )
}

MemberDashboard.propTypes = {}

export default MemberDashboard
