import React from 'react'
import moment from 'moment'
import { FlowRouter } from 'meteor/kadira:flow-router'

const JobPublicItem = (props) => {
  const { job } = props
  return (
    <div className={job.isFeatured ? 'card-panel lime lighten-3 scale-transition' : 'card-panel scale-transition'}>
      <div className="row margin-0">
        <div className="col s8">
          <h5 className="margin-0">
            <a href={FlowRouter.path('jobView', { slug: job.slug })}>{job.title}</a>
          </h5>
        </div>
        <div className="col s4 right-align ">
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

        </div>
      </div>

      <div className="row margin-0">
        <div className="col s8">
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

      </div>
    </div>
  )
}

JobPublicItem.propTypes = {
  job: React.PropTypes.object.isRequired
}

export default JobPublicItem
