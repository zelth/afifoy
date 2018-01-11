import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { createContainer } from 'meteor/react-meteor-data'
import Jobs from '/imports/api/jobs/jobs'
import JobItem from './JobItem.jsx'

class JobList extends React.Component {

  render() {
    const { jobs } = this.props
    if (jobs && jobs.length === 0) {
      return (
        <div className="section">
          <div className="container">
            <div className="row center">
              <p className="light">
                You dont have post yet, dont wait!!! Jobs are free to post.
              </p>
            </div>
            <div className="row center">
              <a href={FlowRouter.path('jobCreate')} className="btn-large waves-effect waves-light orange">Start New Job Post</a>
            </div>
            <br /><br />
          </div>
        </div>
      )
    }
    return (
      <div className="section job-post">
        <br />
        <div className="row ">
          <div className="col s6 left">
            <h5 className="margin-0 light">My Posted Jobs</h5>
          </div>
          <div className="col s6 right-align">
            <a href={FlowRouter.path('jobCreate')} className="btn waves-effect light-blue accent-4">Create New Job Post</a>
          </div>
        </div>
        {jobs.map(job => <JobItem job={job} key={job._id} />)}
      </div>
    )
  }
}

JobList.propTypes = {
  jobs: React.PropTypes.array
}

JobList.contextTypes = {
  currentUser: React.PropTypes.object
}

export default createContainer(() => {
  Meteor.subscribe('employer.jobs')
  return {
    jobs: Jobs.find().fetch()
  }
}, JobList)
