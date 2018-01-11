/* global Bert: true */
// import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'

import React from 'react'
import { Form, Field } from 'simple-react-form'
import Text from 'simple-react-form-material-ui/lib/text'
import ObjectComponent from 'simple-react-form-material-ui/lib/object'
import ArrayComponent from 'simple-react-form-material-ui/lib/array'
import DatePicker from 'simple-react-form-material-ui/lib/date-picker'
import Textarea from 'simple-react-form-material-ui/lib/textarea'
import Select from 'simple-react-form-material-ui/lib/select'
// import Tags from 'simple-react-form-material-ui/lib/tags'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Dropzone from '/imports/lib/fields/UserDropzone'
import CVDropzone from '/imports/lib/fields/Dropzone'
import VideoDropzone from '/imports/lib/fields/VideoDropzone'
// import FroalaEditor from '/imports/lib/fields/FroalaEditor'
import Curriculas from '/imports/api/curriculas/curriculas'

import ProfilePreview from '/imports/ui/components/candidates/ProfilePreview.jsx'

class ApplicantProfileComponent extends React.Component {

  constructor(props) {
    super(props)
    const curricula = this.props.curricula
    if (!curricula.works) {
      curricula.works = [{
        position: '',
        company: ''
      }]
    }
    if (!curricula.educations) {
      curricula.educations = [{
        school: ''
      }]
    }
    if (!curricula.skills) {
      curricula.skills = [{
        skillName: ''
      }]
    }

    this.state = {
      curricula: this.props.curricula
    }
    this.onChange = this.onChange.bind(this)
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  onChange(curricula) {
    this.setState({ curricula })
  }

  onSuccess() {
    Bert.alert('Profile updated!', 'success', 'fixed-top', 'fa-check')
    FlowRouter.go('candidateProfile')
  }

  render() {
    const { curricula } = this.state

    return (
      <div className="section">

        <div className="row">
          <div className="col s6" >
            <div className="card-tabs">
              <ul className="tabs tabs-fixed-width">
                <li className="tab"><a className="active" href="#contact">Contact</a></li>
                <li className="tab"><a href="#work">Work</a></li>
                <li className="tab"><a href="#education">Education</a></li>
                <li className="tab"><a href="#skills">Skills</a></li>
              </ul>
            </div>
            <div className="card-content">
              <div id="contact">
                <p>Contact Info</p>
                <div className="row margin-0">
                  <Form doc={curricula} className="clear-form" collection={Curriculas} type="update" onChange={this.onChange} onSuccess={this.onSuccess}>
                    <Field fieldName="contact" showLabel={false} type={ObjectComponent}>
                      <Field fieldName="avatar" type={Dropzone} label="Profile Picture" accept="image/*" instructions="jpg | png" />
                      <div className="row margin-0">
                        <div className="col s6" >
                          <Field fieldName="firstName" name="firstName" type={Text} autoComplete="off" label="First Name" />
                        </div>
                        <div className="col s6" >
                          <Field fieldName="lastName" name="lastName" type={Text} autoComplete="off" label="Last Name" />
                        </div>
                      </div>
                      <Field fieldName="position" name="position" autoComplete="off" label="Position" type={Text} />
                      <Field fieldName="country" name="country" autoComplete="off" label="Country" type={Text} />
                      <div className="row margin-0">
                        <div className="col s6" >
                          <Field fieldName="city" name="city" type={Text} autoComplete="off" label="City" />
                        </div>
                        <div className="col s6" >
                          <Field fieldName="postal" name="postal" type={Text} autoComplete="off" label="Post Code" />
                        </div>
                      </div>

                      <div className="row margin-0">
                        <div className="col s6" >
                          <Field fieldName="gender" name="gender" type={Text} autoComplete="off" label="Gender" />
                        </div>
                        <div className="col s6" >
                          <Field fieldName="phone" name="phone" type={Text} autoComplete="off" label="Phone" />
                        </div>
                      </div>
                      <br />
                      <Field fieldName="resumeUrl" type={CVDropzone} label="Upload Resume/CV" accept="file/*" instructions="pdf | doc" />
                      <br />
                      <Field fieldName="videoUrl" type={VideoDropzone} label="Upload Video Profile" accept="file/*" instructions="avi | mov | wmv | mp4" />
                    </Field>
                    <div className="row margin-0">
                      <div className="col s8" />
                      <div className="col s4" >
                        <button className="waves-effect waves-light btn pink accent-2" type="submit"> Update </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>

              <div id="work">
                <div className="row margin-0">
                  <Form doc={curricula} className="clear-form" collection={Curriculas} type="update" onChange={this.onChange} onSuccess={this.onSuccess}>
                    <Field fieldName="works" className="clear-form" label="" type={ArrayComponent}>
                      <Field fieldName="position" name="position" autoComplete="off" label="Job Title" type={Text} />
                      <Field fieldName="company" name="company" autoComplete="off" label="Company" type={Text} />
                      <div className="row margin-0">
                        <div className="col s6" >
                          <Field fieldName="from" name="from" type={DatePicker} autoComplete="off" label="From" />
                        </div>
                        <div className="col s6" >
                          <Field fieldName="to" name="to" type={DatePicker} autoComplete="off" label="To" />
                        </div>
                      </div>
                      <Field fieldName="description" name="description" autoComplete="off" label="Desciption of work" type={Textarea} />
                    </Field>
                    <div className="row margin-0">
                      <div className="col s8" />
                      <div className="col s4" >
                        <button className="waves-effect waves-light btn pink accent-2" type="submit"> Update </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>

              <div id="education">
                <div className="row margin-0">
                  <Form doc={curricula} className="clear-form" collection={Curriculas} type="update" onChange={this.onChange} onSuccess={this.onSuccess}>
                    <Field fieldName="educations" className="clear-form" label="" type={ArrayComponent}>
                      <Field fieldName="attainment" name="attainment" type={Select} label="Level" />
                      <Field fieldName="school" name="school" autoComplete="off" label="School Name" type={Text} />
                      <div className="row margin-0">
                        <div className="col s6" >
                          <Field fieldName="from" name="from" type={DatePicker} autoComplete="off" label="From" />
                        </div>
                        <div className="col s6" >
                          <Field fieldName="to" name="to" type={DatePicker} autoComplete="off" label="To" />
                        </div>
                      </div>
                      <Field fieldName="accomplishment" name="accomplishment" autoComplete="off" label="Accomplishment" type={Textarea} />
                    </Field>
                    <div className="row margin-0">
                      <div className="col s8" />
                      <div className="col s4" >
                        <button className="waves-effect waves-light btn pink accent-2" type="submit"> Update </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>

              <div id="skills">
                <div className="row margin-0">
                  <Form doc={curricula} className="clear-form" collection={Curriculas} type="update" onChange={this.onChange} onSuccess={this.onSuccess}>
                    <Field fieldName="skills" className="clear-form" label="" type={ArrayComponent}>
                      <Field fieldName="skillName" name="skillName" autoComplete="off" label="Skill Name" type={Text} />
                      <Field fieldName="description" name="description" autoComplete="off" label="Description" type={Textarea} />
                    </Field>
                    <div className="row margin-0">
                      <div className="col s8" />
                      <div className="col s4" >
                        <button className="waves-effect waves-light btn pink accent-2" type="submit"> Update </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>

            </div>

          </div>
          <div className="col s6" >
            <ProfilePreview curricula={curricula} />
          </div>
        </div>
      </div>
    )
  }
}

ApplicantProfileComponent.propTypes = {
  curricula: React.PropTypes.object
}

ApplicantProfileComponent.contextTypes = {
  currentUser: React.PropTypes.object
}

ApplicantProfileComponent.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}


export default ApplicantProfileComponent
