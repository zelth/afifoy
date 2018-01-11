import React from 'react'
import jQuery from 'jquery'
import { FlowRouter } from 'meteor/kadira:flow-router'

export default class GettingStarted extends React.Component {
  componentDidMount() {
    jQuery('.button-collapse').sideNav()
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s6">
              <div className="section">
                <div className="card-panel">
                  <h1 className="header center orange-text">Looking for a Job?</h1>
                  <div className="row center">
                    <h5 className="header col s12 light">The place where you can mange your job post and applicants</h5>
                    <br />
                    <p className="light">
                      Jobs are free to post. Your job post will remain on this site for 90 days. After 90 days the post will no longer appear to visitors. You can have your job post featured on the home page for 30 days for $100 buy purchasing the upgrade after creating your post.
                    </p>
                  </div>
                  <div className="row center">
                    <a href={FlowRouter.path('jobSeekerSignup')} className="btn-large waves-effect waves-light orange">Sign up as JobSeeker</a>
                  </div>
                  <br /><br />
                </div>
              </div>
            </div>
            <div className="col s6">
              <div className="section">
                <div className="card-panel">
                  <h1 className="header center orange-text">Want to post a Job?</h1>
                  <div className="row center">
                    <h5 className="header col s12 light">The place where you can mange your job post and applicants</h5>
                    <br />
                    <p className="light">
                      Jobs are free to post. Your job post will remain on this site for 90 days. After 90 days the post will no longer appear to visitors. You can have your job post featured on the home page for 30 days for $100 buy purchasing the upgrade after creating your post.
                    </p>
                  </div>
                  <div className="row center">
                    <a href={FlowRouter.path('employerSignup')} className="btn-large waves-effect waves-light orange">I am an Employer, I will post a Job</a>
                  </div>
                  <br /><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
