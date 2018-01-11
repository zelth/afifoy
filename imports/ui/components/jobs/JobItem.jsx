/* global Bert: true */
import { Meteor } from 'meteor/meteor'
import moment from 'moment'
import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import Jobs from '/imports/api/jobs/jobs'

export default class JobItem extends React.Component {

  constructor(props) {
    super(props)
    this.removeJob = this.removeJob.bind(props.job)
  }

  removeJob() {
    const { job } = this.props
    if (job.status === 'active') {
      Bert.alert('Cant be deleted while its active!', 'danger', 'fixed-top', 'fa-frown-o')
    } else {
      Jobs.remove(this._id, (err) => {
        if (err) {
          Bert.alert(err.message, 'danger', 'fixed-top', 'fa-frown-o')
        } else {
          Bert.alert('Job deleted', 'success', 'fixed-top', 'fa-frown-o')
        }
      })
    }
  }

  render() {
    const { job } = this.props

    return (
      <div className={job.isFeatured ? 'card-panel lime lighten-3 scale-transition' : 'card-panel scale-transition'}>
        <div className="row margin-0">
          <div className="col s7">
            <h5 className="margin-0">
              {job.title}
            </h5>

          </div>
          <div className="col s4 right-align ">
            {job.status === 'active' &&
              <span className="new badge job-badge green accent-4" data-badge-caption="Status: Active"><i className="tiny material-icons">language</i></span>
            }
            {(!job.status || job.status === 'pending') &&
              <span className="new badge job-badge yellow darken-4" data-badge-caption="Status: Admin Approval" />
            }
            {job.status === 'flagged' &&
              <span className="new badge job-badge red darken-1" data-badge-caption="Status: Flagged"><i className="tiny material-icons">language</i></span>
            }
            {job.status === 'inactive' &&
              <span className="new badge job-badge grey lighten-2" data-badge-caption="Status: Flagged"><i className="tiny material-icons">language</i></span>
            }

            { /*
            {(job.jobTypes || []).map((name, i) =>
              <span className="new badge job-badge blue darken-4" key={i} data-badge-caption={name}><i className="tiny material-icons">schedule</i></span>
            )}
            {job.remoteBased &&
              <span className="new badge job-badge green darken-1" data-badge-caption="Remote"><i className="tiny material-icons">language</i></span>
            }
            {job.officeBased &&
              <span className="new badge job-badge light-blue darken-4" data-badge-caption="Office Based"><i className="tiny material-icons">language</i></span>
            }

            {job.isFeatured &&
              <span className="new badge job-badge red darken-1" data-badge-caption="Featured"><i className="tiny material-icons">new_releases</i></span>
            }
            */ }

          </div>
          <div className="col s1">
            {job.status && job.status === 'pending' &&
              <ul>
                <li><a className="btn-floating yellow darken-1" href={FlowRouter.path('jobEdit', { jobId: job._id })}><i className="material-icons">mode_edit</i></a></li>
                <li><a className="btn-floating red" href="#" onClick={this.removeJob}><i className="material-icons">delete</i></a></li>
              </ul>
            }

          </div>

        </div>

        <div className="row margin-0">
          <div className="col s7">
            <p className="light margin-0">
              <i className="tiny material-icons">assignment</i> {moment(job.createdAt).calendar()}
            </p>
          </div>
          <div className="col s4 right-align">
            <p className="light margin-0">
              <i className="tiny material-icons">business</i> {job.company}
              -
              <i className="tiny material-icons">location_on</i> {job.location}
            </p>
          </div>
          <div className="col s1" />
        </div>
        <div className="row margin-0">
          <div className="col s6 light">
              Visits : <strong>{job.stats.visits}</strong>
          </div>
          <div className="col s5 light right-align">
            <a href={FlowRouter.path('jobEmpApplicants', { jobId: job._id })}>Applicants: <strong>{job.stats.completed}</strong></a>
          </div>
          <div className="col s1" >
            <a className="btn-floating orange darken-4" href={FlowRouter.path('jobPublish', { jobId: job._id })}><i className="material-icons">insert_chart</i></a>
          </div>
        </div>
      </div>
    )
  }
}

JobItem.propTypes = {
  job: React.PropTypes.object.isRequired
}
