import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Subs } from '/imports/api/common'

import { createContainer } from 'meteor/react-meteor-data'

import { AppSubs } from '/imports/api/common'
import Curriculas from '/imports/api/curriculas/curriculas'

import Container from '/imports/ui/containers/Container'

export default createContainer(({ component }) => {
  const user = Meteor.user()
  const curricula = Curriculas.findOne()
  return {
    component,
    subsReady: AppSubs.ready(),
    curricula,
    user

  }
}, Container)
