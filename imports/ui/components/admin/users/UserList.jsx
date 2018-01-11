/* global Bert */
// import { FlowRouter } from 'meteor/kadira:flow-router'

import React from 'react'
import UserItem from './UserItem'

class UserListComponent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const { users } = this.props

    return (
      <div className="section">
        <table>
          <thead>
            <tr>
              <th data-field="id">Name</th>
              <th data-field="name">Email</th>
              <th data-field="price">Roles</th>
              <th data-field="price">Active</th>
              <th data-field="price">Options</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => <UserItem user={user} key={user._id} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

UserListComponent.propTypes = {
  users: React.PropTypes.array
}

UserListComponent.defaultProps = {

}

export default UserListComponent
