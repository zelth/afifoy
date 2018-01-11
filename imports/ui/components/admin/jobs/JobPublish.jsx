import React from 'react'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Form, Field } from 'simple-react-form'
import Select from 'simple-react-form-material-ui/lib/select'
import DatePicker from 'simple-react-form-material-ui/lib/date-picker'
import Toggle from 'simple-react-form-material-ui/lib/toggle'

import Jobs from '/imports/api/jobs/jobs'

import JobPreview from '/imports/ui/components/jobs/JobPreview'

class JobPublish extends React.Component {

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  onSuccess() {
    Bert.alert('Job updated', 'success', 'fixed-top', 'fa-check')
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

          <div className="row">
            <div className="col s12">
              <div className="card-panel">
                <Form doc={job} collection={Jobs} type="update" onSuccess={this.onSuccess} onChange={this.onChange}>
                  <div className="row">
                    <div className="col s3">
                      <Field fieldName="status" name="status" type={Select} label="Status" />
                    </div>
                    <div className="col s3">
                      <Field fieldName="publishedAt" name="publishedAt" type={DatePicker} label="Publish Date" />
                    </div>
                    <div className="col s3">
                      <br />
                      <br />
                      <Field fieldName="isFeatured" name="isFeatured" type={Toggle} label="Featured" />
                    </div>
                    <div className="col s3 right-align">
                      <br />
                      <br />
                      <button className="btn btn-primary " type="submit"> Update </button>
                      <br />

                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
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

JobPublish.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default JobPublish
