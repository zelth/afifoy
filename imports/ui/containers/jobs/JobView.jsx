import { Roles } from 'meteor/alanning:roles'
import { Meteor } from 'meteor/meteor'

import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Subs } from '/imports/api/common'

import Jobs from '/imports/api/jobs/jobs'
import Applicants from '/imports/api/applicants/applicants'

import Container from '/imports/ui/containers/Container'

class JobContainer extends Container {

  renderJobNotFound() {
    return (
      <div id="quizFirstPage">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center margin-top-100">
            <div className="alert alert-warning m-b-10" >This Job doesn't exist or not published yet</div>
          </div>
        </div>
      </div>
    )
  }

  renderComponent() {
    const { component } = this.props

    return (
      <div>
        <div id="quizFirstPage">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-8 col-md-8 col-md-offset-2 col-lg-offset-2 m-t-50">
                {React.createElement(component, this.componentProps())}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { subsReady, job } = this.props
    return (
      subsReady ?
        job ? this.renderComponent() : this.renderJobNotFound() :
        this.renderLoading()
    )
  }
}

export default createContainer(({ component, slug }) => {
  Subs.subscribe('public.job', { slug })
  const job = Jobs.findOne({ slug })
  const role = Roles.userIsInRole(Meteor.userId(), ['admin', 'employer'])
  const jobseeker = Roles.userIsInRole(Meteor.userId(), ['jobseeker'])
  Subs.subscribe('jobView.checkApplication', { slug })
  const jobApplied = Applicants.findOne({ owner: Meteor.userId(), slug })
  return {
    component,
    subsReady: Subs.ready(),
    job,
    role,
    jobseeker,
    jobApplied
  }
}, JobContainer)
