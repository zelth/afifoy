import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'
import Curriculas from '/imports/api/curriculas/curriculas'

Meteor.methods({
  registerJobSeeker(doc) {
    check(doc, Object)

    const { email, password, firstName, lastName } = doc
    const userId = Accounts.createUser({ email, password, profile: { firstName, lastName } })
    if (userId) {
      Curriculas.insert({
        owner: userId,
        contact: {
          email,
          firstName,
          lastName
        }
      })
    }
    Roles.addUsersToRoles(userId, 'jobseeker')

    // const user = Meteor.users.findOne(userId)
    // Meteor.defer(() => {
    //   Email.accountSetup({
    //     email,
    //     password,
    //     name: user.name()
    //   })
    // })

    return userId
  },

  registerEmployer(doc) {
    check(doc, Object)
    console.log(doc)
    const { email, password, firstName, lastName, companyName } = doc
    const userId = Accounts.createUser({ email, password, profile: { firstName, lastName, companyName } })
    Roles.addUsersToRoles(userId, 'employer')
    return userId
  },

  updateUserAdmin(userId, doc) {
    check(userId, String)
    check(doc, Object)

    if (!Roles.userIsInRole(this.userId, ['admin'])) {
      throw new Meteor.Error('access-denied')
    }

    const user = Meteor.users.findOne(userId)
    if (!user) {
      throw new Meteor.Error('not-found')
    }

    const modifier = { $set: {} }
    if (doc.email) {
      modifier.$set['emails.0.address'] = doc.email
    }
    if (doc.name) {
      modifier.$set['profile.name'] = doc.name
    }

    if (doc.roles) {
      Roles.setUserRoles(userId, doc.roles)
    }

    Meteor.users.update(userId, modifier)
  },

  getImpersonateToken(userId) {
    check(userId, String)

    if (!Roles.userIsInRole(this.userId, ['admin'])) {
      throw new Meteor.Error('access-denied')
    }

    return Accounts.impSvc.set(userId)
  }

})
