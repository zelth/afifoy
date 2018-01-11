import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { createContainer } from 'meteor/react-meteor-data'
import Jobs from '/imports/api/jobs/jobs'
import JobPublicItem from './JobPublicItem.jsx'

class JobPublicList extends React.Component {

  render() {
    const { jobs } = this.props
    if (!jobs) {
      return (
        <div className="section">
          <p>Loading Jobs...</p>
        </div>
      )
    }
    return (
      <div>
        {jobs.map(job => <JobPublicItem job={job} key={job._id} />)}
      </div>
    )
  }
}

JobPublicList.propTypes = {
  jobs: React.PropTypes.array
}

JobPublicList.contextTypes = {
  currentUser: React.PropTypes.object
}

export default createContainer(() => {
  Meteor.subscribe('public.jobs', {}, { limit: 10 })
  return {
    jobs: Jobs.find().fetch()
  }
}, JobPublicList)
