import React from 'react'
// import jQuery from 'jquery'
import EmployerItem from '/imports/ui/components/users/EmployerItem.jsx'

class CompaniesPage extends React.Component {
  componentDidMount() {
    // jQuery('.button-collapse').sideNav()
  }

  render() {
    const { employers } = this.props
    return (
      <div>
        <div className="container">
          <div className="section">
            <div className="row">
              {employers.map(employer => <EmployerItem employer={employer} key={employer._id} />) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}


CompaniesPage.propTypes = {
  employers: React.PropTypes.array
}

export default CompaniesPage
