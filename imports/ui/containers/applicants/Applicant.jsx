import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Subs } from '/imports/api/common/subs'
import Jobs from '/imports/api/jobs/jobs'
import Applicants from '/imports/api/applicants/applicants'
import Curriculas from '/imports/api/curriculas/curriculas'

import Container from '/imports/ui/containers/Container'

export default createContainer(({ component, jobId, applicantId }) => {
  Subs.subscribe('employer.job', { _id: jobId })
  Subs.subscribe('employer.applicants', { _id: applicantId, jobId })
  const job = Jobs.findOne(jobId)
  const applicant = Applicants.findOne(applicantId)
  const curricula = Curriculas.findOne() || {}
  return {
    component,
    subsReady: Subs.ready(),
    job,
    applicant,
    curricula
  }
}, Container)
