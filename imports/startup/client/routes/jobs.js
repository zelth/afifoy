import React from 'react'
import { mount } from 'react-mounter'

import { FlowRouter } from 'meteor/kadira:flow-router'

import { UserLayout, PageLayout } from '/imports/ui/layouts/'

import JobContainer from '/imports/ui/containers/jobs/Job.jsx'
import ApplicantContainer from '/imports/ui/containers/applicants/Applicant.jsx'
import JobApplicantsContainer from '/imports/ui/containers/jobs/JobApplicants.jsx'
import JobViewContainer from '/imports/ui/containers/jobs/JobView.jsx'

import JobList from '/imports/ui/components/jobs/JobList.jsx'
import JobCreate from '/imports/ui/components/jobs/JobCreate.jsx'
import JobPublish from '/imports/ui/components/jobs/JobPublish.jsx'
import JobApplicants from '/imports/ui/components/jobs/JobApplicants.jsx'
import JobApplicantView from '/imports/ui/components/jobs/JobApplicantView.jsx'
import JobEdit from '/imports/ui/components/jobs/JobEdit.jsx'
import JobView from '/imports/ui/components/jobs/JobView.jsx'
import JobNotification from '/imports/ui/components/jobs/JobNotification.jsx'
import DashViewContainer from '/imports/ui/containers/users/DashView.jsx'

import { ensureUserLoggedIn } from './hooks'

const jobRoutes = FlowRouter.group({
  prefix: '/post',
  name: 'jobs',
  triggersEnter: [ensureUserLoggedIn],
  role: 'employer'
})

jobRoutes.route('/list', {
  name: 'jobList',
  action() {
    mount(UserLayout, {
      content: <DashViewContainer component={JobList} />
    })
  }
})

jobRoutes.route('/create', {
  name: 'jobCreate',
  action() {
    mount(UserLayout, {
      content: <DashViewContainer component={JobCreate} />
    })
  }
})

jobRoutes.route('/:jobId/edit', {
  name: 'jobEdit',
  action(params) {
    mount(UserLayout, {
      content: <JobContainer component={JobEdit} {...params} />
    })
  }
})

jobRoutes.route('/:jobId/publish', {
  name: 'jobPublish',
  action(params) {
    mount(UserLayout, {
      content: <JobApplicantsContainer component={JobPublish} {...params} />
    })
  }
})

jobRoutes.route('/:jobId/applicants', {
  name: 'jobEmpApplicants',
  action(params) {
    mount(UserLayout, {
      content: <JobApplicantsContainer component={JobApplicants} {...params} />
    })
  }
})

jobRoutes.route('/:jobId/:applicantId/applicant', {
  name: 'jobEmpApplicant',
  action(params) {
    mount(UserLayout, {
      content: <ApplicantContainer component={JobApplicantView} {...params} />
    })
  }
})


const jobViewsRoutes = FlowRouter.group({
  prefix: '/jobs',
  name: 'jobs'
})


jobViewsRoutes.route('/:slug', {
  name: 'jobView',
  action(params) {
    mount(PageLayout, {
      content: <JobViewContainer component={JobView} {...params} />
    })
  }
})

jobViewsRoutes.route('/:slug/notification', {
  name: 'jobNotification',
  action(params) {
    mount(PageLayout, {
      content: <JobViewContainer component={JobNotification} {...params} />
    })
  }
})
