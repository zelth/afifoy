import React from 'react'
import jQuery from 'jquery'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Form, Field } from 'simple-react-form'
import Text from 'simple-react-form-material-ui/lib/text'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { User } from '/imports/api/users/users'

class JobSeekerSignup extends React.Component {

  constructor() {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  componentDidMount() {
    jQuery('.button-collapse').sideNav()
  }
  onSubmit(user) {
    Meteor.call('registerJobSeeker', user, (err) => {
      if (err) {
        Bert.alert(err.message, 'danger', 'fixed-top', 'fa-frown-o')
      } else {
        Meteor.loginWithPassword(user.email, user.password, (error) => {
          if (error) {
            this.setState({ disabled: false })
            Bert.alert(error.message, 'danger', 'fixed-top', 'fa-frown-o')
          } else {
            Bert.alert('Account created', 'success', 'fixed-top', 'fa-smile-o')
            FlowRouter.go('candidateDashboard')
          }
        })
      }
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row center">
            <div className="col s3" />
            <div className="col s6">
              <div className="section">
                <div>
                  <div className="row">
                    <h3 className="orange-text col s12">Job Seeker Registration</h3>
                    <p className="header col s12 light">Track updates on your application and create your online CV</p>
                    <Form collection={User} onSubmit={this.onSubmit}>
                      <div className="row margin-0">
                        <div className="col s6" >
                          <Field fieldName="firstName" name="firstName" type={Text} autoComplete="off" label="First Name" required />
                        </div>
                        <div className="col s6" >
                          <Field fieldName="lastName" name="lastName" type={Text} autoComplete="off" label="Last Name" required />
                        </div>
                      </div>
                      <Field fieldName="email" name="email" autoComplete="off" label="Email" type={Text} />
                      <Field fieldName="password" name="password" autoComplete="off" label="Password" fieldType="password" type={Text} />
                      <br />
                      <br />
                      <button className="btn-large waves-effect waves-light orange" type="submit"> Sign up </button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

JobSeekerSignup.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default JobSeekerSignup
