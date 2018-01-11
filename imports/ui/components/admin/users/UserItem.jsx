/* global Bert: true */
import { Meteor } from 'meteor/meteor'
// import moment from 'moment'
import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { confirm } from '/imports/lib/actions'
import { Accounts } from 'meteor/accounts-base'

export default class UserItem extends React.Component {

  constructor(props) {
    super(props)
    this.removeUser = this.removeUser.bind(props.user)
    this.actionsCell = this.actionsCell.bind(this)
  }

  removeUser(userId) {
    confirm({}, () => Meteor.users.remove(userId))
  }

  loginAs(userId) {
    Meteor.call('getImpersonateToken', userId, (err, token) => {
      Accounts.loginWithImpersonate(token, (err, res) => {
        FlowRouter.go('home')
      })
    })
  }

  actionsCell(userId, doc) {
    return (
      <div className="row">
        <div className="col s12" >
          <a href="#" className="btn btn-default" onClick={() => this.loginAs(userId)} title="Login as">
            <i className="fa fa-sign-out" />
          </a>
          <a href={FlowRouter.path('adminUserEdit', { userId })} className="btn btn-default" title="Edit">
            <i className="fa fa-edit" />
          </a>
          <a href="#" className="btn btn-default" onClick={() => this.removeUser(userId)} title="Remove">
            <i className="fa fa-remove" />
          </a>
        </div>
      </div>
    )
  }

  render() {
    const { user } = this.props
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.roles}</td>
        <td>{user.isActive}</td>
        <td>{this.actionsCell(user._id, user)}</td>

      </tr>
    )
  }
}

UserItem.propTypes = {
  user: React.PropTypes.object.isRequired
}
