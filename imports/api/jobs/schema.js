import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Timestampable, Owner } from '../common/schemas'


const statuses = ['pending', 'active', 'flagged', 'inactive']
/**
* Stats
*/
const Stats = new SimpleSchema({
  visits: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  completed: {
    type: Number,
    defaultValue: 0,
    optional: true
  }
})

/**
* Job
*/

const Job = new SimpleSchema([
  Owner, Timestampable,
  {
    title: {
      type: String
    },
    jobTypes: {
      type: [String],
      srf: {
        options: [
          { label: 'Full Time', value: 'Full Time' },
          { label: 'Part Time', value: 'Part Time' },
          { label: 'Hourly Contract', value: 'Hourly Contract' },
          { label: 'Term Contract', value: 'Term Contract' },
          { label: 'Mentoring', value: 'Mentoring' },
          { label: 'Internship', value: 'Internship' },
          { label: 'Volunteer', value: 'Volunteer' }
        ]
      }
    },
    location: {
      type: String
    },
    url: {
      type: String,
      optional: true
    },
    company: {
      type: String
    },
    categoryId: {
      type: String
    },
    contact: {
      type: String
    },
    remoteBased: {
      type: Boolean,
      optional: true
    },
    officeBased: {
      type: Boolean,
      optional: true
    },
    description: {
      type: String
    },
    isFeatured: {
      type: Boolean,
      defaultValue: false,
      optional: true
    },
    stats: {
      type: Stats,
      optional: true
    },
    published: {
      type: Boolean,
      optional: true,
      defaultValue: false
    },
    publishedAt: {
      type: Date,
      optional: true
    },
    status: {
      type: String,
      optional: true,
      allowedValues: statuses,
      autoValue: () => {
        if (this.isInsert) {
          return 'pending'
        }
      },
      srf: {
        options: [
          { label: 'pending', value: 'pending' },
          { label: 'active', value: 'active' },
          { label: 'flagged', value: 'flagged' },
          { label: 'inactive', value: 'inactive' }
        ]
      }
    }
  }
])

export default Job
