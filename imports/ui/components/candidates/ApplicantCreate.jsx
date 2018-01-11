import { Meteor } from 'meteor/meteor'
import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Form, Field } from 'simple-react-form'
import moment from 'moment'

import Applicants from '/imports/api/applicants/applicants'
import Dropzone from '/imports/lib/fields/Dropzone'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Text from 'simple-react-form-material-ui/lib/text'
import FroalaEditorPublic from '/imports/lib/fields/FroalaEditorPublic'


class ApplicantCreate extends React.Component {
  constructor(props) {
    super(props)
    this.onSuccess = this.onSuccess.bind(this)
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  onSuccess() {
    const { job } = this.props
    Meteor.call('updateJobStats', job._id, 'completed', 1)
    FlowRouter.go('jobNotification', { slug: job.slug })
  }

  setCoverLetter() {
    const { job } = this.props
    const today = moment().format('LLLL')
    return `
      <div><p>Dear Sir/Madam,</p>
        <p>Hello and good day!</p>
        <p>This letter is in response to your ${job.title} on ${today} .</p>

        <p>[ Short description of your achievements and contact information here ]</p>
        <p>
          <br />
        </p>
        <p>Thank you very much.</p>
        <p>Sincerely yours,</p>
        <p>
          <br />
        </p>
        <p>[ your name ]</p>
      </div>`
  }

  render() {
    const { job } = this.props
    const applicant = { jobId: job._id, slug: job.slug, coverLetter: this.setCoverLetter(), status: 'sent' }
    return (
      <div className="section card-panel grey lighten-5">
        <div className="row">
          <div className="col s12" >
            <div className="row">
              <Form doc={applicant} collection={Applicants} type="insert" onSuccess={this.onSuccess} >
                <div className="row margin-0">
                  <div className="col s6" >
                    <Field fieldName="firstName" name="firstName" type={Text} autoComplete="off" label="First Name" />
                  </div>
                  <div className="col s6" >
                    <Field fieldName="lastName" name="lastName" type={Text} autoComplete="off" label="Last Name" />
                  </div>
                </div>
                <Field fieldName="email" name="email" autoComplete="off" type={Text} label="Email" />
                <Field fieldName="location" name="location" autoComplete="off" type={Text} label="Location" />
                <Field fieldName="contact" name="contact" autoComplete="off" type={Text} label="Contact" />
                <br />
                <br />
                <Field fieldName="coverLetter" type={FroalaEditorPublic} label="Cover Letter" />
                <br />
                <br />
                <Field fieldName="resumeUrl" type={Dropzone} label="Upload Resume/CV" accept="image/*" instructions="Doc | Pdf" />
                <br />
                <button className="btn btn-primary" type="submit"> Apply Now </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ApplicantCreate.propTypes = {
  job: React.PropTypes.object.isRequired
}

ApplicantCreate.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default ApplicantCreate

