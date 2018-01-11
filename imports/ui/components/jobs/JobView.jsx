/* global Bert */
import { Meteor } from 'meteor/meteor'
import React from 'react'
import JobPreview from '/imports/ui/components/jobs/JobPreview'

export default class JobView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
    const { job } = this.props
    Meteor.call('updateJobStats', job._id, 'visits', 1)
  }

  render() {
    const { job, role, jobseeker, jobApplied } = this.props
    return (
      <div>
        <JobPreview job={job} preview={role} jobseeker={jobseeker} jobApplied={jobApplied} />
      </div>
    )
  }
}

JobView.propTypes = {
  job: React.PropTypes.object.isRequired,
  role: React.PropTypes.bool,
  jobseeker: React.PropTypes.bool,
  jobApplied: React.PropTypes.object
}

JobView.defaultProps = {
  preview: false
}

JobView.contextTypes = {
  currentUser: React.PropTypes.object
}
