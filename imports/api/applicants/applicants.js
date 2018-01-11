import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import Category from './schema'
import Jobs from '/imports/api/jobs/jobs'

class ApplicantsCollection extends Mongo.Collection {

}

const Applicants = new ApplicantsCollection('applicants')

Applicants.attachSchema(Category)

Applicants.helpers({
  author() {
    return Meteor.users.findOne(this.owner)
  },
  jobDetails() {
    return Jobs.findOne(this.jobId)
  }
})

export default Applicants
