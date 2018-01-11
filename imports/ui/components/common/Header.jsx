import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'
import { AccountsTemplates } from 'meteor/useraccounts:core'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { createContainer } from 'meteor/react-meteor-data'

const Header = (props, context) => (
  <div>
    <nav className="white" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href={FlowRouter.path('home')} className="brand-logo">JobSpace.ph</a>
        <ul className="right hide-on-med-and-down">
          <li><a href={FlowRouter.path('home')}>Home</a></li>
          <li><a href={FlowRouter.path('companies')}>Companies</a></li>
          {Meteor.userId() && Roles.userIsInRole(Meteor.userId(), ['employer']) &&
            <li>
              <a href={FlowRouter.path('dashboard')} className="btn waves-effect waves-light orange darken-1">Dashboard</a>
            </li>
          }
          {Meteor.userId() && Roles.userIsInRole(Meteor.userId(), ['jobseeker']) &&
            <li>
              <a href={FlowRouter.path('candidateDashboard')} className="btn waves-effect waves-light orange darken-1">My Account</a>
            </li>
          }
          {Meteor.userId() && Roles.userIsInRole(Meteor.userId(), ['admin']) &&
            <li>
              <a href={FlowRouter.path('adminDashboard')} className="btn waves-effect waves-light orange darken-1">Admin</a>
            </li>
          }
          {Meteor.userId() ?
            (<li><a href="javascript:void(0)" onClick={() => AccountsTemplates.logout()}>Logout</a></li>) :
            (<li><a href={FlowRouter.path('login')}>Login</a></li>)
          }

        </ul>

        <ul id="nav-mobile" className="side-nav">
          <li><a href="#">Navbar Link</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
    </nav>
  </div>
)

export default createContainer(() => {
  const loaded = !Meteor.loggingIn() && Meteor.user()
  return {
    loaded: loaded
  }
}, Header)

