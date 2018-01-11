/* global Bert: true */
import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'

import React from 'react'
import { Form, Field } from 'simple-react-form'
import Text from 'simple-react-form-material-ui/lib/text'
import ObjectComponent from 'simple-react-form-material-ui/lib/object'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Dropzone from '/imports/lib/fields/UserDropzone'
import FroalaEditor from '/imports/lib/fields/FroalaEditor'
import VideoDropzone from '/imports/lib/fields/VideoDropzone'

import ProfilePreview from '/imports/ui/components/users/ProfilePreview.jsx'

class UserProfileComponent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      user: this.props.user
    }
    this.onChange = this.onChange.bind(this)
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  onChange(user) {
    this.setState({ user })
  }

  onSuccess() {
    Bert.alert('Profile updated!', 'success', 'fixed-top', 'fa-check')
    FlowRouter.go('userProfile')
  }

  render() {
    const { user } = this.state
    return (
      <div className="section">
        <div className="row">
          <div className="col s5" >
            <div className="row">
              <Form doc={user} collection={Meteor.users} type="update" onChange={this.onChange} onSuccess={this.onSuccess}>
                <Field fieldName="profile" showLabel={false} type={ObjectComponent}>
                  <div className="row margin-0">
                    <div className="col s6" >
                      <Field fieldName="firstName" name="firstName" type={Text} autoComplete="off" label="First Name" />
                    </div>
                    <div className="col s6" >
                      <Field fieldName="lastName" name="lastName" type={Text} autoComplete="off" label="Last Name" />
                    </div>
                  </div>
                  <Field fieldName="companyLogo" type={Dropzone} label="Company Logo" accept="image/*" instructions="png | jpg" />
                  <Field fieldName="companyName" name="companyName" autoComplete="off" label="Company Name" type={Text} />
                  <Field fieldName="companyUrl" name="companyUrl" autoComplete="off" label="Company Url" type={Text} />
                  <Field fieldName="phone" name="phone" label="Phone" autoComplete="off" type={Text} />
                  <Field fieldName="mobile" name="mobile" label="Mobile" autoComplete="off" type={Text} />
                  <Field fieldName="twitterUrl" name="twitterUrl" autoComplete="off" label="Twitter" type={Text} />
                  <Field fieldName="facebookUrl" name="facebookUrl" autoComplete="off" label="Facebook" type={Text} />
                  <Field fieldName="linkedInUrl" name="linkedInUrl" autoComplete="off" label="LinkedIn" type={Text} />
                  <br />
                  <br />
                  <Field fieldName="bio" type={FroalaEditor} label="Company Information" />
                  <Field fieldName="address" className="clear-form" showLabel={false} type={ObjectComponent}>
                    <Field fieldName="country" name="country" autoComplete="off" label="Country" type={Text} />
                    <div className="row margin-0">
                      <div className="col s6" >
                        <Field fieldName="state" name="state" type={Text} autoComplete="off" label="State" />
                      </div>
                      <div className="col s6" >
                        <Field fieldName="zip" name="zip" type={Text} autoComplete="off" label="Zip Code" />
                      </div>
                    </div>

                  </Field>
                  <br />
                  <Field fieldName="videoUrl" type={VideoDropzone} label="Upload Video Company Profile" accept="file/*" instructions="avi | mov | wmv" />

                </Field>
                <br />
                <br />
                <br />
                <button className="btn btn-primary" type="submit"> Update </button>
              </Form>
            </div>
          </div>
          <div className="col s7" >
            <ProfilePreview user={user} />
          </div>
        </div>
      </div>
    )
  }
}

UserProfileComponent.propTypes = {
  user: React.PropTypes.object
}

UserProfileComponent.contextTypes = {
  currentUser: React.PropTypes.object
}

UserProfileComponent.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}


export default UserProfileComponent
