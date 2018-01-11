import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { createContainer } from 'meteor/react-meteor-data'
import Jobs from '/imports/api/jobs/jobs'
import JobItem from './JobItem.jsx'

class JobList extends React.Component {

  render() {
    const { jobs } = this.props

    return (
      <div className="section job-post">
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
  Meteor.subscribe('admin.jobs')

  return {
    jobs: Jobs.find().fetch()
  }
}, JobList)
