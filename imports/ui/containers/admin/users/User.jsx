import { Meteor } from 'meteor/meteor'

import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Subs } from '/imports/api/common/subs'
import Curriculas from '/imports/api/curriculas/curriculas'

import Container from '/imports/ui/containers/Container'

export default createContainer(({ component, userId }) => {
  Subs.subscribe('admin.user', userId)

  const user = Meteor.users.findOne(userId)
  const curricula = Curriculas.findOne() || {}

  return {
    component,
    subsReady: Subs.ready(),
    subUser: user,
    curricula,
    user: {
      name: user && user.profile ? user.profile.name : '',
      email: user ? user.emailAddress() : '',
      roles: user ? user.roles : []
    }
  }
}, Container)
