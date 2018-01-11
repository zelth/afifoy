import { Meteor } from 'meteor/meteor'
import moment from 'moment'

import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Subs } from '/imports/api/common/subs'

import Container from '/imports/ui/containers/Container'
import Users from '/imports/api/users/users'

export default createContainer(({ component }) => {
  Subs.subscribe('admin.users')

  const users = Meteor.users.find()
    .map((user) => ({
      _id: user._id,
      name: user.name(),
      email: user.emailAddress(),
      roles: user.displayRoles(),
      isActive: user.isActive() ? 'yes' : 'no',
      createdAt: moment(user.createdAt).format('MM/DD/YYYY')
    }))

  return {
    component,
    subsReady: Subs.ready(),
    users
  }
}, Container)
