import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Subs } from '/imports/api/common/subs'
import Jobs from '/imports/api/jobs/jobs'
// import Categories from '/imports/api/categories/categories'
import Applicants from '/imports/api/applicants/applicants'

import Container from '/imports/ui/containers/Container'

export default createContainer(({ component, jobId }) => {
  Subs.subscribe('employer.jobApplicants', { _id: jobId })
  const job = Jobs.findOne(jobId)
  const applicants = Applicants.find({ jobId }).fetch()
  return {
    component,
    subsReady: Subs.ready(),
    job,
    applicants
  }
}, Container)
