/* global Bert */
import { Meteor } from 'meteor/meteor'
import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'

export default class JobNotification extends React.Component {

  render() {
    const { job } = this.props
    return (
      <div className="section">
        <div className="container">
          <h1 className="header center orange-text">Thank you!</h1>
          <div className="row center">
            <h5 className="header col s12 light">{job.title}</h5>
            <br />
            <p className="light">
              Your application has been sent to the employer.
            </p>
          </div>
          <div className="row center">
            <a href={FlowRouter.path('home')} className="btn-large waves-effect waves-light orange">Check More Jobs</a>
          </div>
          <br /><br />
        </div>
      </div>
    )
  }
}

JobNotification.propTypes = {
  job: React.PropTypes.object.isRequired
}

JobNotification.contextTypes = {
  currentUser: React.PropTypes.object
}
