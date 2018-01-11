import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Subs } from '/imports/api/common/subs'
import Jobs from '/imports/api/jobs/jobs'
import Categories from '/imports/api/categories/categories'

import Container from '/imports/ui/containers/Container'

export default createContainer(({ component, jobId }) => {
  Subs.subscribe('employer.job', { _id: jobId })
  Subs.subscribe('categories')
  const job = Jobs.findOne(jobId)
  const categories = Categories.find().fetch()
  return {
    component,
    subsReady: Subs.ready(),
    job,
    categories
  }
}, Container)
