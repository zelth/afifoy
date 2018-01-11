import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { _ } from 'meteor/underscore'

import Curriculas from '/imports/api/curriculas/curriculas'

import Applicants from '../applicants'

Meteor.methods({

  jobApply(jobId, slug) {
    check(jobId, String)
    check(slug, String)
    const curricula = Curriculas.findOne({ owner: this.userId })
    const jobData = {
      jobId,
      slug,
      status: 'sent',
      firstName: curricula.contact.firstName || '',
      lastName: curricula.contact.lastName || '',
      location: `${curricula.contact.city} ${curricula.contact.country} ${curricula.contact.postal}` || '',
      contact: curricula.contact.phone || '',
      email: curricula.contact.email || ''
    }
    // Meteor.call('updateJobStats', jobId, 'completed', 1)
    return Applicants.insert(jobData)
  }
})
