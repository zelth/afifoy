import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Subs } from '/imports/api/common/subs'
import Applicants from '/imports/api/applicants/applicants'

import Container from '/imports/ui/containers/Container'

export default createContainer(({ component }) => {
  // Subs.subscribe('employer.job', { _id: jobId })
  // Subs.subscribe('employer.applicants', { _id: applicantId, jobId })
  const user = Meteor.user()
  const selector = {
    owner: Meteor.userId()
  }
  // Meteor.subscribe('candidate.applied', selector)
  // const applicants = Applicants.find().fetch()
  const applicants = []
  return {
    component,
    subsReady: Subs.ready(),
    user,
    applicants
  }
}, Container)
