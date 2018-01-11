import React from 'react'
// import { Meteor } from 'meteor/meteor'
// import { Roles } from 'meteor/alanning:roles'
import moment from 'moment'

import { FlowRouter } from 'meteor/kadira:flow-router'
import ApplicantCreate from '/imports/ui/components/candidates/ApplicantCreate'

class JobPreview extends React.Component {
  constructor(props) {
    super(props)

    this.applyJob = this.applyJob.bind(this)
  }
  applyJob() {
    const { job } = this.props
    Meteor.call('jobApply', job._id, job.slug, (err) => {
      if (err) {
        Bert.alert(err.message, 'danger', 'fixed-top', 'fa-frown-o')
      } else {
        Meteor.call('updateJobStats', job._id, 'completed', 1)
        FlowRouter.go('jobNotification', { slug: job.slug })
      }
    })
  }

  render() {
    const { job, preview, jobseeker, jobApplied } = this.props

    return (
      <div className="section">
        <div className="card-panel">
          <div className="row">
            <div className="col s12">
              <h2>{job.title}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col s3">
              {job.company &&
                <div>
                  <i className="tiny material-icons">business</i> {job.company}
                </div>
              }
            </div>
            <div className="col s3">
              {job.location &&
                <div>
                  <i className="tiny material-icons">location_on</i> {job.location}
                </div>
              }
            </div>
            <div className="col s6 right-align">
              {job.url &&
                <div>
                  <i className="tiny material-icons">launch</i> &nbsp;
                  <a href={job.url} rel="noopener noreferrer" target="_blank" >{job.url}</a>
                </div>
              }
            </div>
          </div>
          <hr />
          <br />
          <div className="row">
            <div className="col s3">

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

              {job.contact &&
                <div>
                  <hr />
                  <i className="tiny material-icons">email</i> {job.contact}
                </div>
              }


              {job.createdAt &&
                <div>
                  <hr />
                  <i className="tiny material-icons">assignment</i> Posted on {moment(job.createdAt).calendar()}
                </div>
              }

              {job.isFeatured &&
                <div>
                  <hr />
                  <i className="tiny material-icons">new_releases</i> Featured until 8/3/16
                </div>
              }
            </div>
            <div className="col s9">
              <div dangerouslySetInnerHTML={{ __html: job.description }} />
              {!preview && !jobseeker &&

                <div className="row margin-0">
                  <div className="col s12">
                    <ApplicantCreate job={job} />
                  </div>
                </div>
              }

              {jobseeker && !jobApplied &&
                <div className="row margin-0">
                  <div className="col s12">
                    <button className="btn btn-primary" onClick={this.applyJob} type="button"> Apply this Job </button>
                  </div>
                </div>
              }
              {jobseeker && jobApplied &&
                <div className="row margin-0">
                  <div className="col s12">
                    <div className="card-panel lime lighten-5 center">
                      <i className="tiny material-icons">info_outline</i> You already applied for this job. <br /> Applied Date : {moment(jobApplied.createdAt).calendar()}
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

JobPreview.propTypes = {
  job: React.PropTypes.object.isRequired,
  preview: React.PropTypes.bool,
  jobseeker: React.PropTypes.bool,
  jobApplied: React.PropTypes.object
}

export default JobPreview
