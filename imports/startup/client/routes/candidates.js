import React from 'react'
import { mount } from 'react-mounter'

import { FlowRouter } from 'meteor/kadira:flow-router'

import { CandidateLayout } from '/imports/ui/layouts/'

import DashHome from '/imports/ui/components/candidates/DashHome.jsx'
import AppliedJobs from '/imports/ui/components/candidates/AppliedJobs.jsx'
import DashViewContainer from '/imports/ui/containers/users/DashView.jsx'
import UserProfileComponent from '/imports/ui/components/candidates/ApplicantProfile.jsx'

import Applications from '/imports/ui/containers/applicants/Applications.jsx'



import { ensureUserLoggedIn } from './hooks'

const candidateRoutes = FlowRouter.group({
  prefix: '/candidate',
  name: 'candidate',
  triggersEnter: [ensureUserLoggedIn],
  role: 'jobseeker'
})

candidateRoutes.route('/list', {
  name: 'appliedJobList',
  action() {
    mount(CandidateLayout, {
      content: <Applications component={AppliedJobs} />
    })
  }
})


candidateRoutes.route('/dashboard', {
  name: 'candidateDashboard',
  action() {
    mount(CandidateLayout, {
      content: <DashViewContainer component={DashHome} />
    })
  }
})



candidateRoutes.route('/profile', {
  name: 'candidateProfile',
  action(params) {
    mount(CandidateLayout, {
      content: <DashViewContainer component={UserProfileComponent} {...params} />
    })
  }
})




