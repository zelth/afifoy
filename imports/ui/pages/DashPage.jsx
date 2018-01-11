import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'

const DashPage = () => (
  <div className="container">
    <div className="row margin-0">
      <div className="col s3 navPanel">
        <br />
        <div className="collection">
          <a href="#!" className="collection-item active">Dashboard</a>
          <a href="#!" className="collection-item">Posted Jobs</a>
          <a href="#!" className="collection-item">Company Profile</a>
        </div>
      </div>
      <div className="col s9 contentPanel">
        <div className="section job-post">
            <div className="row ">
              <div className="col s6 left">
                <h5 className="margin-0 light">Recent Jobs</h5>
              </div>
              <div className="col s6 right-align">
                <a href="test" id="download-button" className="btn waves-effect waves-light red">Create New Job Post</a>
              </div>
            </div>

            <div className="card-panel lime lighten-3">
              <div className="row margin-0">
                <div className="col s8">
                  <h2 className="margin-0">
                    <a href={FlowRouter.path('jobsD')}>Meteor, React, Redux and </a>
                  </h2>
                </div>
                <div className="col s4 right-align ">
                  <span className="new badge job-badge grey darken-1" data-badge-caption="Full Time"><i className="tiny material-icons">schedule</i></span>
                  <span className="new badge job-badge red darken-1" data-badge-caption="Featured"><i className="tiny material-icons">new_releases</i></span>

                </div>
              </div>
              <div className="row margin-0">
                <div className="col s8">
                  <p className="light margin-0">
                    <i className="tiny material-icons">assignment</i> 1/16/17
                  </p>
                </div>
                <div className="col s4 right-align">
                  <p className="light margin-0">
                    <i className="tiny material-icons">business</i> Instant Financial
                    -
                    <i className="tiny material-icons">location_on</i> Montreal
                  </p>
                </div>
              </div>
            </div>

            <div className="card-panel">
              <div className="row margin-0">
                <div className="col s8">
                  <h2 className="margin-0">
                    <a href={FlowRouter.path('jobsD')}>Meteor, React, Redux and WebRTC specialists for music collaboration platform</a>
                  </h2>
                </div>
                <div className="col s4 right-align ">
                  <span className="new badge job-badge grey darken-1" data-badge-caption="Full Time"><i className="tiny material-icons">schedule</i></span>
                  <span className="new badge job-badge red darken-1" data-badge-caption="Featured"><i className="tiny material-icons">new_releases</i></span>
                  <span className="new badge job-badge green darken-1" data-badge-caption="Remote"><i className="tiny material-icons">language</i></span>
                  <span className="new badge job-badge grey darken-1" data-badge-caption="Hourly Contract"><i className="tiny material-icons">schedule</i></span>
                  <span className="new badge job-badge grey darken-1" data-badge-caption="Part Time"><i className="tiny material-icons">schedule</i></span>
                  <span className="new badge job-badge grey darken-1" data-badge-caption="Volunteer"><i className="tiny material-icons">schedule</i></span>
                </div>
              </div>
              <div className="row margin-0">
                <div className="col s8">
                  <p className="light margin-0">
                    <i className="tiny material-icons">assignment</i> 1/16/17
                  </p>
                </div>
                <div className="col s4 right-align">
                  <p className="light margin-0">
                    <i className="tiny material-icons">business</i> Instant Financial
                    -
                    <i className="tiny material-icons">location_on</i> Montreal
                  </p>
                </div>
              </div>
            </div>

            <div className="card-panel">
              <div className="row margin-0">
                <div className="col s8">
                  <h2 className="margin-0">
                    <a href={FlowRouter.path('jobsD')}>Meteor, React, Redux and WebRTC specialists for music collaboration platform</a>
                  </h2>
                </div>
                <div className="col s4 right-align ">
                  <span className="new badge job-badge grey darken-1" data-badge-caption="Full Time"><i className="tiny material-icons">schedule</i></span>
                  <span className="new badge job-badge red darken-1" data-badge-caption="Featured"><i className="tiny material-icons">new_releases</i></span>
                  <span className="new badge job-badge green darken-1" data-badge-caption="Remote"><i className="tiny material-icons">language</i></span>
                  <span className="new badge job-badge grey darken-1" data-badge-caption="Hourly Contract"><i className="tiny material-icons">schedule</i></span>
                  <span className="new badge job-badge grey darken-1" data-badge-caption="Part Time"><i className="tiny material-icons">schedule</i></span>
                  <span className="new badge job-badge grey darken-1" data-badge-caption="Volunteer"><i className="tiny material-icons">schedule</i></span>
                </div>
              </div>
              <div className="row margin-0">
                <div className="col s8">
                  <p className="light margin-0">
                    <i className="tiny material-icons">assignment</i> 1/16/17
                  </p>
                </div>
                <div className="col s4 right-align">
                  <p className="light margin-0">
                    <i className="tiny material-icons">business</i> Instant Financial
                    -
                    <i className="tiny material-icons">location_on</i> Montreal
                  </p>
                </div>
              </div>
            </div>

            <div className="card-panel">
              <div className="row margin-0">
                <div className="col s8">
                  <h2 className="margin-0">
                    <a href={FlowRouter.path('jobsD')}>Meteor, React, Redux and WebRTC specialists for music collaboration platform</a>
                  </h2>
                </div>
                <div className="col s4 right-align ">
                  <span className="new badge job-badge grey darken-1" data-badge-caption="Full Time"><i className="tiny material-icons">schedule</i></span>
                  <span className="new badge job-badge red darken-1" data-badge-caption="Featured"><i className="tiny material-icons">new_releases</i></span>
                  <span className="new badge job-badge green darken-1" data-badge-caption="Remote"><i className="tiny material-icons">language</i></span>
                  <span className="new badge job-badge grey darken-1" data-badge-caption="Hourly Contract"><i className="tiny material-icons">schedule</i></span>
                  <span className="new badge job-badge grey darken-1" data-badge-caption="Part Time"><i className="tiny material-icons">schedule</i></span>
                  <span className="new badge job-badge grey darken-1" data-badge-caption="Volunteer"><i className="tiny material-icons">schedule</i></span>
                </div>
              </div>
              <div className="row margin-0">
                <div className="col s8">
                  <p className="light margin-0">
                    <i className="tiny material-icons">assignment</i> 1/16/17
                  </p>
                </div>
                <div className="col s4 right-align">
                  <p className="light margin-0">
                    <i className="tiny material-icons">business</i> Instant Financial
                    -
                    <i className="tiny material-icons">location_on</i> Montreal
                  </p>
                </div>
              </div>
            </div>

          </div>
      </div>
    </div>
  </div>
)

export default DashPage
