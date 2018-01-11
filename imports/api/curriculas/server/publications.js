/* eslint prefer-arrow-callback: 0 */
import { Meteor } from 'meteor/meteor'
// import { Counts } from 'meteor/tmeasday:publish-counts'
import { check } from 'meteor/check'
import { _ } from 'meteor/underscore'
// import { Roles } from 'meteor/alanning:roles'

import Curriculas from '/imports/api/curriculas/curriculas'
import Categories from '/imports/api/categories/categories'

Meteor.publish('candidate.curricula', function candidateCurricula(selector = {}, options = {}) {
  check(selector, Object)
  check(options, Object)

  _.extend(selector, {
    owner: this.userId
  })

  _.defaults(options, {
    sort: {
      createdAt: -1
    }
  })


  return Curriculas.find(selector, options)
})
