import React from 'react'
import { mount } from 'react-mounter'

import { FlowRouter } from 'meteor/kadira:flow-router'

import { AdminLayout } from '/imports/ui/layouts/'

import DashHome from '/imports/ui/components/admin/DashHome.jsx'
import JobList from '/imports/ui/components/admin/jobs/JobList.jsx'
import JobPublish from '/imports/ui/components/admin/jobs/JobPublish.jsx'

import JobContainer from '/imports/ui/containers/jobs/JobAdmin.jsx'

import UsersContainer from '/imports/ui/containers/admin/users/Users.jsx'
import UserContainer from '/imports/ui/containers/admin/users/User.jsx'
import UserListComponent from '/imports/ui/components/admin/users/UserList.jsx'
// import UserCreateComponent from '/imports/ui/components/admin/users/UserCreate.jsx'
import UserEditComponent from '/imports/ui/components/admin/users/UserEdit.jsx'

import DashViewContainer from '/imports/ui/containers/users/DashView.jsx'
import UserProfileComponent from '/imports/ui/components/users/UserProfile.jsx'



import { ensureUserLoggedIn } from './hooks'

const adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [ensureUserLoggedIn],
  role: 'admin'
})

adminRoutes.route('/jobs', {
  name: 'adminJobList',
  action() {
    mount(AdminLayout, {
      content: <DashViewContainer component={JobList} />
    })
  }
})


adminRoutes.route('/dashboard', {
  name: 'adminDashboard',
  action() {
    mount(AdminLayout, {
      content: <DashViewContainer component={DashHome} />
    })
  }
})



adminRoutes.route('/profile', {
  name: 'adminProfile',
  action(params) {
    mount(AdminLayout, {
      content: <DashViewContainer component={UserProfileComponent} {...params} />
    })
  }
})

adminRoutes.route('/:jobId/publish', {
  name: 'adminJobPublish',
  action(params) {
    mount(AdminLayout, {
      content: <JobContainer component={JobPublish} {...params} />
    })
  }
})

adminRoutes.route('/users', {
  name: 'adminUsers',
  action(params) {
    mount(AdminLayout, {
      content: <UsersContainer component={UserListComponent} {...params} />
    })
  }
})

adminRoutes.route('/user/edit/:userId', {
  name: 'adminUserEdit',
  action(params) {
    mount(AdminLayout, {
      content: <UserContainer component={UserEditComponent} {...params} />
    })
  }
})
