/* eslint prefer-arrow-callback: 0 */
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { _ } from 'meteor/underscore'
import { Roles } from 'meteor/alanning:roles'
import Curriculas from '/imports/api/curriculas/curriculas'

Meteor.publishComposite('currentUser', function currentUser() {
  return {
    find() {
      return Meteor.users.find({
        _id: this.userId
      }, {
        fields: {
          profile: 1,
          avatar: 1,
          hashEmail: 1,
          settings: 1,
          roles: 1,
          createdAt: 1
        }
      })
    },
    children: [
      {
        find(user) {
          return Curriculas.find({ owner: user._id })
        }
      }
    ]
  }
})

Meteor.publishComposite('userView', function userViewPub(userId) {
  check(userId, String)
  return {
    find() {
      return Meteor.users.find({ _id: userId }, {
        fields: {
          profile: 1,
          avatar: 1,
          hashEmail: 1,
          settings: 1,
          roles: 1,
          createdAt: 1
        }
      })
    }
  }
})

Meteor.publish('usersList', function usersList(selector = {}, options = {}) {
  check(selector, Object)
  check(options, Object)

  _.extend(selector, {
    emails: { $exists: true }
  })

  _.defaults(options, {
    sort: {
      createdAt: -1
    }
  })

  return Meteor.users.find(selector, options)
})

Meteor.publish('public.employers', function adminUsers() {
  const selector = {
    roles: 'employer'
  }
  const options = {
    sort: {
      createdAt: -1
    }
  }
  return Meteor.users.find(selector, options)
})


Meteor.publish('admin.users', function adminUsers(selector = {}, options = {}) {
  check(selector, Object)
  check(options, Object)

  if (!Roles.userIsInRole(this.userId, ['admin'])) {
    return this.ready()
  }

  _.extend(selector, {
    emails: { $exists: true }
  })

  _.defaults(options, {
    sort: {
      createdAt: -1
    }
  })

  return Meteor.users.find(selector, options)
})

Meteor.publishComposite('admin.user', function userViewPub(userId) {
  check(userId, String)
  if (!Roles.userIsInRole(this.userId, ['admin'])) {
    return this.ready()
  }
  return {
    find() {
      return Meteor.users.find({ _id: userId })
    },
    children: [
      {
        find(user) {
          return Curriculas.find({ owner: user._id })
        }
      }
    ]
  }
})

