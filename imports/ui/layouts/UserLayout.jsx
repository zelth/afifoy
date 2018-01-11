import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { ActiveRoute } from 'meteor/zimme:active-route'

import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { AppSubs } from '/imports/api/common'

import LayoutContainer from '../containers/LayoutContainer'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'


class UserLayout extends LayoutContainer {
  renderLayout() {
    const { content } = this.props
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row margin-0">
            <div className="col s2 navPanel">
              <br />
              <div className="collection">
                <a href={FlowRouter.path('dashboard')} className={ActiveRoute.name(new RegExp('dashboard')) ? 'collection-item active' : 'collection-item'}>Dashboard</a>
                <a href={FlowRouter.path('jobList')} className={ActiveRoute.name(new RegExp('jobList|jobCreate|jobEdit|jobPublish')) ? 'collection-item active' : 'collection-item'}>Posted Jobs</a>
                <a href={FlowRouter.path('userProfile')} className={ActiveRoute.name(new RegExp('userProfile')) ? 'collection-item active' : 'collection-item'}>Company Profile</a>
              </div>
            </div>
            <div className="col s10 contentPanel">
              { content }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default createContainer(() => {
  const appReady = !Meteor.loggingIn() && AppSubs.ready()

  return {
    currentUser: Meteor.user(),
    appReady
  }
}, UserLayout)
