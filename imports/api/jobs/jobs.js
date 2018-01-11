import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import Categories from '/imports/api/categories/categories'

import Job from './schema'

class JobsCollection extends Mongo.Collection {

}

const Jobs = new JobsCollection('jobs')

Jobs.attachSchema(Job)

Jobs.helpers({
  author() {
    return Meteor.users.findOne(this.owner)
  },
  category() {
    return Categories.findOne(this.categoryId)
  }
})

Jobs.friendlySlugs(
  {
    slugFrom: 'title',
    slugField: 'slug',
    distinct: true,
    updateSlug: true
  }
)

export default Jobs
