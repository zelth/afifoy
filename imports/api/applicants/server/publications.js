/* eslint prefer-arrow-callback: 0 */
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { _ } from 'meteor/underscore'
// import { Roles } from 'meteor/alanning:roles'

import Applicants from '../applicants'
import Jobs from '/imports/api/jobs/jobs'
import Curriculas from '/imports/api/curriculas/curriculas'

Meteor.publishComposite('jobseeker.applications', function candidateApplied(selector = {}, options = {}) {
  check(selector, Object)
  check(options, Object)
  _.extend(selector, {
    owner: this.userId
  })
  return {
    find() {
      return Applicants.find(selector, options)
    },
    children: [
      {
        find(applicant) {
          return Jobs.find({ _id: applicant.jobId })
        }
      }
    ]
  }
})

Meteor.publishComposite('employer.applicants', function candidateApplied(selector = {}, options = {}) {
  check(selector, Object)
  check(options, Object)

  return {
    find() {
      return Applicants.find(selector, options)
    },
    children: [
      {
        find(applicant) {
          return Curriculas.find({ owner: applicant.owner })
        }
      }
    ]
  }
})

Meteor.publish('jobView.checkApplication', function checkApplication(selector = {}, options = {}) {
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

  return Applicants.find(selector, options)
})
