/* global Bert */
import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'

import React from 'react'
import { Form, Field } from 'simple-react-form'
import Text from 'simple-react-form-material-ui/lib/text'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MultipleCheckbox from 'simple-react-form-material-ui/lib/multiple-checkbox'
import { _ } from 'meteor/underscore'

import { Customer } from '/imports/api/users/schema'
import ProfilePreview from '/imports/ui/components/users/ProfilePreview'
import JobseekerPreview from '/imports/ui/components/candidates/ProfilePreview.jsx'

class UserEditComponent extends React.Component {

  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
    }
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  onSubmit(doc) {
    const { userId } = this.props

    Meteor.call('updateUserAdmin', userId, doc, (err) => {
      if (err) {
        Bert.alert(err.message, 'danger', 'fixed-top', 'fa-frown-o')
      } else {
        Bert.alert('User updated', 'success', 'fixed-top', 'fa-smile-o')
        FlowRouter.go('adminUsers')
      }
    })
  }

  render() {
    const { user, subUser, curricula } = this.props
    const isAdmin = _.contains(user.roles, 'admin')
    const isEmployer = _.contains(user.roles, 'employer')
    const isJobseeker = _.contains(user.roles, 'jobseeker')
    console.log(isJobseeker)
    return (
      <div className="section">
        <div className="row">
          <div className="col s5" >
            <Form doc={user} schema={Customer} type="function" onSubmit={this.onSubmit} >
              <Field fieldName="name" type={Text} label="Name" />
              <Field fieldName="email" type={Text} label="Email Address" />
              <Field fieldName="roles" type={MultipleCheckbox} label="Roles" />
              <button className="btn btn-primary" type="submit">Save User</button>
            </Form>
          </div>
          <div className="col s7" >
            { isEmployer &&
              <ProfilePreview user={subUser} />
            }
            { isJobseeker &&
              <JobseekerPreview curricula={curricula} />
            }
          </div>
        </div>
      </div>
    )
  }
}

UserEditComponent.propTypes = {
  userId: React.PropTypes.string,
  user: React.PropTypes.object,
  subUser: React.PropTypes.object,
  curricula: React.PropTypes.object

}

UserEditComponent.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

UserEditComponent.defaultProps = {

}

export default UserEditComponent
