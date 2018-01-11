import { Roles } from 'meteor/alanning:roles'

import Jobs from '../jobs'

Jobs.allow({
  insert(userId, doc) {
    return doc.owner === userId || Roles.userIsInRole(userId, ['admin'])
  },
  update(userId, doc, fields, modifier) {
    return doc.owner === userId || Roles.userIsInRole(userId, ['admin'])
  },
  remove(userId, doc) {
    return doc.owner === userId || Roles.userIsInRole(userId, ['admin'])
  }
})
