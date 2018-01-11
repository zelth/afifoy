import React from 'react'
import { mount } from 'react-mounter'

import { FlowRouter } from 'meteor/kadira:flow-router'

import { UserLayout } from '/imports/ui/layouts/'

import DashHome from '/imports/ui/components/users/DashHome.jsx'
import DashViewContainer from '/imports/ui/containers/users/DashView.jsx'
import UserProfileComponent from '/imports/ui/components/users/UserProfile.jsx'



import { nonAuthenticated, ensureUserLoggedIn } from './hooks'

const userRoutes = FlowRouter.group({
  prefix: '/user',
  name: 'user',
  triggersEnter: [ensureUserLoggedIn],
  role: 'employer'
})

userRoutes.route('/dashboard', {
  name: 'dashboard',
  action() {
    mount(UserLayout, {
      content: <DashViewContainer component={DashHome} />
    })
  }
})

userRoutes.route('/profile', {
  name: 'userProfile',
  action(params) {
    mount(UserLayout, {
      content: <DashViewContainer component={UserProfileComponent} {...params} />
    })
  }
})




