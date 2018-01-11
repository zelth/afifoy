/* eslint prefer-arrow-callback: 0 */
import { Meteor } from 'meteor/meteor'
import { Counts } from 'meteor/tmeasday:publish-counts'
import { check, Match } from 'meteor/check'
import { _ } from 'meteor/underscore'
import { Roles } from 'meteor/alanning:roles'

import Categories from '/imports/api/categories/categories'
import Applicants from '/imports/api/applicants/applicants'
import Jobs from '../jobs'

Meteor.publish('jobs.match', function jobMatch(searchValue) {
  check(searchValue, String)


  if (!Roles.userIsInRole(this.userId, ['jobseeker'])) {
    return this.ready()
  }

  if (!searchValue) {
    return Jobs.find({})
  }

  const cursor = Jobs.find(
    { $text: { $search: searchValue } },
    {
      fields: {
        score: { $meta: 'textScore' }
      },
      sort: {
        score: { $meta: 'textScore' }
      }
    }
  )
  return cursor
})


Meteor.publish('employer.jobs', function employerJobs(selector = {}, options = {}) {
  check(selector, Object)
  check(options, Object)

  if (!Roles.userIsInRole(this.userId, ['employer'])) {
    return this.ready()
  }
  _.extend(selector, {
    owner: this.userId
  })

  _.defaults(options, {
    sort: {
      createdAt: -1
    }
  })

  Counts.publish(this, 'employer.jobs', Jobs.find(selector), { noReady: true })

  return Jobs.find(selector, options)
})

Meteor.publishComposite('employer.job', function jobSingle(selector = {}, options = {}) {
  check(selector, Object)
  check(options, Object)

  _.extend(selector, {
    owner: this.userId
  })

  return {
    find() {
      return Jobs.find(selector, options)
    },
    children: [
      {
        find(job) {
          return Meteor.users.find({ _id: job.owner }, {
            fields: Meteor.users.publicFields
          })
        }
      },
      {
        find(job) {
          return Categories.find({ _id: job.categoryId })
        }
      }
    ]
  }
})

Meteor.publishComposite('employer.jobApplicants', function jobApplicants(selector = {}, options = {}) {
  check(selector, Object)
  check(options, Object)

  _.extend(selector, {
    owner: this.userId
  })

  return {
    find() {
      return Jobs.find(selector, options)
    },
    children: [
      {
        find(job) {
          return Meteor.users.find({ _id: job.owner }, {
            fields: Meteor.users.publicFields
          })
        }
      },
      {
        find(job) {
          return Applicants.find({ jobId: job._id })
        }
      }
    ]
  }
})


Meteor.publish('public.jobs', function publicJobs(selector = {}, options = {}) {
  check(selector, Object)
  check(options, Object)

  _.extend(selector, {
    status: 'active'
  })

  _.defaults(options, {
    sort: {
      createdAt: -1
    }
  })

  Counts.publish(this, 'public.jobs', Jobs.find(selector), { noReady: true })

  return Jobs.find(selector, options)
})

Meteor.publishComposite('public.job', function jobSingle(selector = {}, options = {}) {
  check(selector, Object)
  check(options, Object)
  console.log('user', this.userId)
  // _.extend(selector, {
  //   owner: this.userId
  // })

  return {
    find() {
      return Jobs.find(selector, options)
    },
    children: [
      {
        find(job) {
          return Meteor.users.find({ _id: job.owner }, {
            fields: Meteor.users.publicFields
          })
        }
      },
      {
        find(job) {
          return Categories.find({ _id: job.categoryId })
        }
      },
      {
        find(job) {
          return Applicants.find({ jobId: job._id, userId: this.userId })
        }
      }
    ]
  }
})


Meteor.publish('admin.jobs', function adminQuizzes(selector = {}, options = {}) {
  check(selector, Object)
  check(options, Object)

  if (!Roles.userIsInRole(this.userId, ['admin'])) {
    return this.ready()
  }

  _.defaults(options, {
    sort: {
      createdAt: -1
    }
  })

  return Jobs.find(selector, options)
})
