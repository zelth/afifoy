import React from 'react'
import { mount } from 'react-mounter'

import { FlowRouter } from 'meteor/kadira:flow-router'

import { PageLayout, BlankLayout } from '/imports/ui/layouts/'

import HomePage from '/imports/ui/pages/HomePage.jsx'
import WelcomePage from '/imports/ui/pages/WelcomePage.jsx'
import PricingPage from '/imports/ui/pages/PricingPage.jsx'
import CompaniesPage from '/imports/ui/pages/CompaniesPage.jsx'
import GettingStarted from '/imports/ui/pages/GettingStarted.jsx'
import JobSeekerSignup from '/imports/ui/pages/JobSeekerSignup.jsx'
import EmployerSignup from '/imports/ui/pages/EmployerSignup.jsx'
import LoginPage from '/imports/ui/pages/LoginPage.jsx'

import NotFoundPage from '/imports/ui/pages/NotFoundPage.jsx'

// import ChatContainer from '/imports/ui/containers/chat/ChatView.jsx'

import EmployersContainer from '/imports/ui/containers/users/Employers.jsx'


import { nonAuthenticated, ensureUserLoggedIn } from './hooks'

FlowRouter.route('/', {
  name: 'welcome',
  action() {
    mount(BlankLayout, {
      content: <WelcomePage />
    })
  }
})

FlowRouter.route('/home', {
  name: 'home',
  action() {
    mount(BlankLayout, {
      content: <HomePage />
    })
  }
})

FlowRouter.route('/pricing', {
  name: 'pricing',
  action() {
    mount(PageLayout, {
      content: <PricingPage />
    })
  }
})

FlowRouter.route('/getting-started', {
  name: 'gettingStarted',
  action() {
    mount(PageLayout, {
      content: <GettingStarted />
    })
  }
})

FlowRouter.route('/signup-job-seeker', {
  name: 'jobSeekerSignup',
  action() {
    mount(PageLayout, {
      content: <JobSeekerSignup />
    })
  }
})

FlowRouter.route('/signup-employer', {
  name: 'employerSignup',
  action() {
    mount(PageLayout, {
      content: <EmployerSignup />
    })
  }
})

FlowRouter.route('/login', {
  name: 'login',
  action() {
    mount(PageLayout, {
      content: <LoginPage />
    })
  },
  triggersEnter: [nonAuthenticated]
})



FlowRouter.route('/companies', {
  name: 'companies',
  action() {
    mount(PageLayout, {
      content: <EmployersContainer component={CompaniesPage} />
    })
  }
})

FlowRouter.notfound = {
  action() {
    mount(NotFoundPage)
  }
}

