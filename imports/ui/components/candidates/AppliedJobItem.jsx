/* global Bert: true */
import { Meteor } from 'meteor/meteor'
import moment from 'moment'
import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import Jobs from '/imports/api/jobs/jobs'

export default class AppliedJobItem extends React.Component {

  constructor(props) {
    super(props)
    this.removeJob = this.removeJob.bind(props.job)
  }

  removeJob() {
    Jobs.remove(this._id, (err) => {
      if (err) {
        Bert.alert(err.message, 'danger', 'fixed-top', 'fa-frown-o')
      } else {
        Bert.alert('Job deleted', 'success', 'fixed-top', 'fa-frown-o')
      }
    })
  }

  render() {
    const { applicant } = this.props
    return (
      <div className="card-panel scale-transition">
        <div className="row margin-0">
          <div className="col s10">
            <h5 className="margin-0">
              {applicant.jobDetails().title || ''}
            </h5>
          </div>
          <div className="col s2 right-align">
            {applicant.status === 'sent' &&
              <span className="new badge job-badge green lighten-2" data-badge-caption="Sent" />
            }
            {applicant.status === 'review' &&
              <span className="new badge job-badge light-blue accent-2" data-badge-caption="On Review" />
            }
            {applicant.status === 'for interview' &&
              <span className="new badge job-badge orange lighten-3" data-badge-caption="For Interview" />
            }
            {applicant.status === 'exam' &&
              <span className="new badge job-badge light-green darken-3" data-badge-caption="For Exam" />
            }
            {applicant.status === 'final interview' &&
              <span className="new badge job-badge cyan accent-1" data-badge-caption="Final Interview" />
            }
            {applicant.status === 'accepted' &&
              <span className="new badge job-badge yellow lighten-2" data-badge-caption="Accepted" />
            }
            {applicant.status === 'declined' &&
              <span className="new badge job-badge red darken-1" data-badge-caption="Declined" />
            }
          </div>
        </div>

        <div className="row margin-0">
          <div className="col s6">
            Posted : {moment(applicant.jobDetails().createdAt).calendar()}
          </div>
          <div className="col s6 right-align">
            Applied: {moment(applicant.createdAt).calendar()}
          </div>
        </div>


      </div>
    )
  }
}

AppliedJobItem.propTypes = {
  applicant: React.PropTypes.object.isRequired
}
