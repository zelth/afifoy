import React from 'react'

class EmployerItem extends React.Component {

  render() {
    const { employer } = this.props
    const isEmployer = _.contains(employer.roles, 'employer')
    if (!isEmployer) {
      return (<div />)
    }
    return (
      <div className="col s4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            {employer.profile.companyLogo &&
              <img className="activator" alt={employer.profile.companyName} src={employer.profile.companyLogo} />
            }
            {!employer.profile.companyLogo &&
              <img alt="logo" src="/img/sample.jpg" />
            }
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{employer.profile.companyName}<i className="material-icons right">more_vert</i></span>
            <p><a href="test">This is a link</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{employer.profile.companyName}<i className="material-icons right">close</i></span>
            <div dangerouslySetInnerHTML={{ __html: employer.profile.bio }} />
          </div>
        </div>
      </div>
    )
  }
}

EmployerItem.propTypes = {
  employer: React.PropTypes.object.isRequired
}

export default EmployerItem
