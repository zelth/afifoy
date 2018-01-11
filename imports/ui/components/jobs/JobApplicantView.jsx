import React from 'react'
import moment from 'moment'
import ProfilePreview from '/imports/ui/components/candidates/ProfilePreview.jsx'
import Applicants from '/imports/api/applicants/applicants'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Form, Field } from 'simple-react-form'
import Select from 'simple-react-form-material-ui/lib/select'
import DatePicker from 'simple-react-form-material-ui/lib/date-picker'


class JobApplicantView extends React.Component {
  constructor(props) {
    super(props)
    this.onSuccess = this.onSuccess.bind(this)
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  onSuccess() {
    Bert.alert('Applicant status updated', 'success', 'fixed-top', 'fa-check')
  }


  render() {
    const { job, applicant, curricula } = this.props
    return (
      <div>
        <br />
        <div className="row">
          <div className="col s12" >
            {!applicant.owner &&
              <ul className="collection with-header">
                <li className="collection-header blue-grey lighten-5">
                  <div className="row">
                    <div className="col s6">
                      <h4 className="task-card-title">{applicant.firstName} {applicant.lastName}</h4>
                      <p className="task-card-date">Date Applied: {moment(applicant.createdAt).calendar()}</p>
                    </div>
                    <div className="col s6">
                      <Form doc={applicant} collection={Applicants} type="update" onSuccess={this.onSuccess} onChange={this.onChange}>
                        <div className="row">
                          <div className="col s6">
                            <Field fieldName="status" name="status" type={Select} label="Status" />
                          </div>
                          <div className="col s3 right-align">
                            <br />
                            <button className="btn btn-primary " type="submit"> Update </button>
                            <br />

                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </li>
                <li className="collection-item avatar">
                  <i className="material-icons circle">email</i>
                  <span className="title">Email</span>
                  <p>{applicant.email}</p>
                </li>
                <li className="collection-item avatar">
                  <i className="material-icons circle green">insert_chart</i>
                  <span className="title">Location</span>
                  <p>{applicant.location}</p>
                </li>
                <li className="collection-item avatar">
                  <i className="material-icons circle red">phone</i>
                  <span className="title">Contact</span>
                  <p>{applicant.contact}</p>
                </li>
                <li className="collection-item avatar">
                  <i className="material-icons circle red">phone</i>
                  <span className="title">Cover Letter</span>
                  <br />
                  <br />
                  <div dangerouslySetInnerHTML={{ __html: applicant.coverLetter }} />
                </li>
                <li className="collection-item avatar">
                  <i className="material-icons circle green">pageview</i>
                  <span className="title">Uploaded Resume</span>
                  <p>
                  {applicant.resumeUrl &&
                    <a href={applicant.resumeUrl} target="_blank">{applicant.resumeUrl}</a>
                  }
                  </p>
                </li>
              </ul>
            }

            {applicant.owner &&
              <div>
                <ul className="collection with-header">
                  <li className="collection-header blue-grey lighten-5">
                    <div className="row">
                      <div className="col s6">
                        <h4 className="task-card-title">{applicant.firstName} {applicant.lastName}</h4>
                        <p className="task-card-date">Date Applied: {moment(applicant.createdAt).calendar()}</p>
                      </div>
                      <div className="col s6">
                        <Form doc={applicant} collection={Applicants} type="update" onSuccess={this.onSuccess} onChange={this.onChange}>
                          <div className="row">
                            <div className="col s6">
                              <Field fieldName="status" name="status" type={Select} label="Status" />
                            </div>
                            <div className="col s3 right-align">
                              <br />
                              <button className="btn btn-primary " type="submit"> Update </button>
                              <br />

                            </div>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </li>
                </ul>

                <ProfilePreview curricula={curricula} />
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

JobApplicantView.propTypes = {
  job: React.PropTypes.object,
  applicant: React.PropTypes.object,
  curricula: React.PropTypes.object
}

JobApplicantView.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

// JobApplicantView.childContextTypes = {
//   muiTheme: React.PropTypes.object.isRequired
// }

export default JobApplicantView
