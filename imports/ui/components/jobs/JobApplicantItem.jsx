/* global Bert: true */
import { Meteor } from 'meteor/meteor'
import moment from 'moment'
import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import Jobs from '/imports/api/jobs/jobs'

export default class JobApplicantItem extends React.Component {

  constructor(props) {
    super(props)
    // this.removeJob = this.removeJob.bind(props.job)
  }

  removeJob() {

  }

  render() {
    const { applicant } = this.props

    return (
      <tr>
        <td>{applicant.firstName}</td>
        <td>{applicant.lastName}</td>
        <td>{applicant.email}</td>
        <td>{applicant.location}</td>
        <td>{applicant.contact}</td>
        <td>{moment(applicant.createdAt).calendar()}</td>
        <td>
          {applicant.owner &&
            <span className="new badge job-badge blue darken-1" data-badge-caption="Member" />
          }
          {!applicant.owner &&
            <span className="new badge job-badge gray darken-1" data-badge-caption="Non-Member" />
          }
        </td>
        <td>
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
        </td>
        <td>
          <a className="btn-floating red" href={FlowRouter.path('jobEmpApplicant', { jobId: applicant.jobId, applicantId: applicant._id })} ><i className="material-icons">description</i></a>
        </td>
      </tr>
    )
  }
}

JobApplicantItem.propTypes = {
  applicant: React.PropTypes.object.isRequired
}
