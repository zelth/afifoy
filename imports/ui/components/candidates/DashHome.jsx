import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'

class DashHome extends React.Component {

  render() {
    return (
      <div className="section">
        <div className="container">
          <h1 className="header center orange-text">Welcome to your Dashboard Jobseeker</h1>
          <div className="row center">
            <h5 className="header col s12 light">The place where you can mange your job post and applicants</h5>
            <br />
            <p className="light">
              Jobs are free to post. Your job post will remain on this site for 90 days. After 90 days the post will no longer appear to visitors. You can have your job post featured on the home page for 30 days for $100 buy purchasing the upgrade after creating your post.
            </p>
          </div>
          <div className="row center">
            <a href={FlowRouter.path('jobCreate')} className="btn-large waves-effect waves-light orange">Get Started</a>
          </div>
          <br /><br />
        </div>
      </div>
    )
  }
}


export default DashHome
