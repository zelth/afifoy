import { Meteor } from 'meteor/meteor'
import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import Header from './Header.jsx'


const HeaderContainer = createContainer(() => {
  return {
    user: Meteor.user() ? Meteor.user() : {}
  }
}, Header)

export default HeaderContainer
