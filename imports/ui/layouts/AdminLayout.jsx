import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { ActiveRoute } from 'meteor/zimme:active-route'

import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { AppSubs } from '/imports/api/common'

import LayoutContainer from '../containers/LayoutContainer'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'


class AdminLayout extends LayoutContainer {
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
                <a href={FlowRouter.path('adminDashboard')} className={ActiveRoute.name(new RegExp('adminDashboard')) ? 'collection-item active' : 'collection-item'}>Dashboard</a>
                <a href={FlowRouter.path('adminJobList')} className={ActiveRoute.name(new RegExp('adminJobList')) ? 'collection-item active' : 'collection-item'}>Jobs</a>
                <a href={FlowRouter.path('adminUsers')} className={ActiveRoute.name(new RegExp('adminUsers')) ? 'collection-item active' : 'collection-item'}>Users</a>
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
}, AdminLayout)
