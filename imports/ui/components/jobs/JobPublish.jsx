import React from 'react'


import JobPreview from './JobPreview'

class JobPublish extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { job } = this.props
    if (!job) {
      return (<div>loading...</div>)
    }

    return (
      <div>
        <div className="section">
          {job.status === 'active' &&
            <div className="card-panel green accent-4">
              <i className="tiny material-icons">info_outline</i> This post is active. It can accept job applicants. Not Editable by owner until the post expires.
            </div>
          }
          {(!job.status || job.status === 'pending') &&
            <div className="card-panel lime lighten-5">
              <i className="tiny material-icons">info_outline</i> This post is awaiting admin approval. It will be reviewed shortly and then become live on the site.
            </div>
          }
          {job.status === 'flagged' &&
            <div className="card-panel red darken-1">
              <i className="tiny material-icons">info_outline</i> This post is flagged. It has invalid content and user is advice to edit so it can be pusblished.
            </div>
          }
          {job.status === 'inactive' &&
            <div className="card-panel grey lighten-2">
              <i className="tiny material-icons">info_outline</i> This post is inactive. Post published date has expired.
            </div>
          }
        </div>


        <div className="row">
          <div className="col s12" >
            <JobPreview job={job} preview />
          </div>
        </div>


      </div>
    )
  }
}

JobPublish.propTypes = {
  job: React.PropTypes.object
}

export default JobPublish
