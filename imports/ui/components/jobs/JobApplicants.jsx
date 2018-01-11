import React from 'react'

// import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'

// import JobPreview from './JobPreview'
import JobCounter from './JobCounter'
import JobApplicantItem from './JobApplicantItem'

class JobApplicants extends React.Component {
  constructor(props) {
    super(props)
  }

  // getChildContext() {
  //   return { muiTheme: getMuiTheme(baseTheme) }
  // }

  render() {
    const { job, applicants } = this.props
    if (!job) {
      return (<div>loading...</div>)
    }
    const counter = { label: 'Jobs Counter', total: applicants.length }
    return (
      <div>
        <br />
        <JobCounter counter={counter} />

        <div className="row">
          <div className="col s12" >
            <h5>{job.title}</h5>
          </div>
          <div className="col s12" >
            <table className="highlight">
              <thead>
                <tr>
                  <th data-field="firstName">First Name</th>
                  <th data-field="lastName">Last Name</th>
                  <th data-field="email">Email</th>
                  <th data-field="location">Location</th>
                  <th data-field="contact">Contact</th>
                  <th data-field="contact">Date Applied</th>
                  <th data-field="membership">Membership</th>
                  <th data-field="status">Status</th>
                  <th data-field="option">Option</th>
                </tr>
              </thead>

              <tbody>
                {applicants.map(applicant => <JobApplicantItem applicant={applicant} key={applicant._id} />)}
              </tbody>
            </table>
          </div>
        </div>


      </div>
    )
  }
}

JobApplicants.propTypes = {
  job: React.PropTypes.object,
  applicants: React.PropTypes.array
}

// JobApplicants.childContextTypes = {
//   muiTheme: React.PropTypes.object.isRequired
// }

export default JobApplicants
