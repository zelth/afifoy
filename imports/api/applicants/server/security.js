import { Roles } from 'meteor/alanning:roles'

import Applicants from '../applicants'

Applicants.allow({
  insert(userId, doc) {
    if (!doc) { return false }
    return true
  },
  update(userId, doc, fields, modifier) {
    return Roles.userIsInRole(userId, ['admin', 'employer'])
  },
  remove(userId, doc) {
    return Roles.userIsInRole(userId, ['admin', 'employer'])
  }
})
