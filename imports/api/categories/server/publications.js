/* eslint prefer-arrow-callback: 0 */
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { _ } from 'meteor/underscore'
// import { Roles } from 'meteor/alanning:roles'

import Categories from '../categories'

Meteor.publish('categories', function clientCategories(selector = {}, options = {}) {
  check(selector, Object)
  check(options, Object)

  _.defaults(options, {
    sort: {
      createdAt: -1
    }
  })


  return Categories.find(selector, options)
})
