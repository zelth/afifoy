import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
// import { createContainer } from 'meteor/react-meteor-data'
// import Applicants from '/imports/api/applicants/applicants'
import AppliedJobItem from './AppliedJobItem.jsx'

class AppliedJobs extends React.Component {

  render() {
    const { applications, jobMatches } = this.props
    console.log('mathicng', jobMatches)
    if (applications && applications.length === 0) {
      return (
        <div className="section">
          <div className="container">
            <h1 className="header center orange-text">Hi there!</h1>
            <div className="row center">
              <h5 className="header col s12 light">Start browsing jobs that you may find suits you.</h5>
              <br />
              <p className="light">
                Lorem ipsum lorem ipsum lorem ipsum loremipsum loremipsum loremipsum lorem
              </p>
            </div>
            <div className="row center">
              <a href={FlowRouter.path('home')} className="btn-large waves-effect waves-light orange">Get Started</a>
            </div>
            <br /><br />
          </div>
        </div>
      )
    }
    return (
      <div className="section job-post">
        <div className="row ">
          <div className="col s6 left">
            <h5 className="margin-0 light">Job Applications</h5>
          </div>
          <div className="col s6 right-align">
            <a href={FlowRouter.path('home')} className="btn waves-effect light-blue accent-4">Browse Jobs</a>
          </div>
        </div>
        {applications.map(job => <AppliedJobItem applicant={job} key={job._id} />)}
      </div>
    )
  }
}

AppliedJobs.propTypes = {
  applications: React.PropTypes.array,
  jobMatches: React.PropTypes.array
}

AppliedJobs.contextTypes = {
  currentUser: React.PropTypes.object
}

export default AppliedJobs
