import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'
import _ from 'underscore'
import JCRoles from '/imports/startup/both/config/roles'

import { User } from './schema'

Meteor.users.attachSchema(User)

Meteor.users.helpers({
  name() {
    if (this.profile && this.profile.name) {
      return this.profile.name
    }
    return ''
  },
  displayName() {
    if (this.profile && this.profile.name) {
      return this.profile.name
    } else if (this.username) {
      return this.username
    } else if (this.emails && this.emails.length) {
      return this.emails[0].address
    }
    return ''
  },
  emailAddress() {
    if (this.emails && this.emails.length) {
      return this.emails[0].address
    } else if (this.services && this.services.facebook) {
      return this.services.facebook.email
    }
    return ''
  },
  displayRoles() {
    const rolesMap = JCRoles
    if (this.roles && this.roles.length) {
      return this.roles.map((role) => {
        const roleMap = _.findWhere(rolesMap, { value: role })
        return (roleMap && roleMap.label) || role
      }).join(', ')
    }
    return ''
  },
  isActive() {
    return (this.roles && this.roles.length)
  }
})

// Meteor.users.publicFields = {
//   username: 1,
//   profile: 1,
//   emails: 1
// }

