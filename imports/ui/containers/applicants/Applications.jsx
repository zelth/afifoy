import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Subs } from '/imports/api/common/subs'
import Jobs from '/imports/api/jobs/jobs'
import Applicants from '/imports/api/applicants/applicants'
// import Curriculas from '/imports/api/curriculas/curriculas'

import Container from '/imports/ui/containers/Container'

export default createContainer(({ component }) => {
  // Subs.subscribe('employer.job', { _id: jobId })
  Subs.subscribe('jobseeker.applications')
  Subs.subscribe('jobs.match', 'test')
  const jobMatches = Jobs.find().fetch()
  const applications = Applicants.find().fetch()
  // const curricula = Curriculas.findOne() || {}
  return {
    component,
    subsReady: Subs.ready(),
    applications,
    jobMatches
  }
}, Container)
