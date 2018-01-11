// Fill the DB with example data on startup
import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'
import Categories from '/imports/api/categories/categories'
import Jobs from '/imports/api/jobs/jobs'

Meteor.startup(() => {
  Jobs._ensureIndex({
    title: 'text',
    description: 'text',
    location: 'text',
    jobTypes: 'text'
  })
  if (Categories.find().count() === 0) {
    const dataCategory = [
      { name: 'ACCOUNTING / FINANCE' },
      { name: 'ADMINISTRATION / OFFICE' },
      { name: 'ARTS / MEDIA / DESIGN' },
      { name: 'CALL CENTER / BPO' },
      { name: 'EDUCATION / SCHOOL' },
      { name: 'ENGINEERING' },
      { name: 'GOVERNMENT/NON-PROFIT' },
      { name: 'HEALTH/MEDICAL/SCIENCE' },
      { name: 'HOTEL/RESTAURANT' },
      { name: 'HR/TRAINING/RECRUITMENT' },
      { name: 'IT/COMPUTER/WEB' },
      { name: 'LEGAL/DOCUMENTATION' },
      { name: 'MARITIME/SEABASED' },
      { name: 'MARKETING/RETAIL/SALES' },
      { name: 'OFFSHORE/OUTSOURCING' },
      { name: 'PRODUCTION/MANUFACTURING' },
      { name: 'SKILLED WORK/TECHNICAL' }
    ]

    dataCategory.forEach(category => Categories.insert(category))
  }


  // Setup Admin Users
  _.each(['wiredots@gmail.com'], (email) => {
    const user = Meteor.users.findOne({ 'emails.address': email })
    if (user) {
      if (user.roles) {
        Roles.addUsersToRoles(user, 'admin')
      } else {
        Roles.setUserRoles(user, 'admin')
      }
    }
  })
  // Setup Roles
  _.each(_.difference(['jobseeker', 'employer', 'hr', 'staff', 'admin'], _.pluck(Roles.getAllRoles().fetch(), 'name')),
    (role) => {
      Roles.createRole(role)
    }
  )
})
