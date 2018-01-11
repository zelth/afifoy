import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import Jobs from '../jobs'

Meteor.methods({

  updateJobStats(jobId, fieldName, delta) {
    check(jobId, String)
    check(fieldName, String)
    check(delta, Number)

    return Jobs.update(jobId, {
      $inc: {
        [`stats.${fieldName}`]: delta
      }
    })
  }
})
