import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Timestampable } from '../common/schemas'


/**
* Contact info
*/
const ContactInfo = new SimpleSchema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  avatar: {
    type: String,
    optional: true
  },
  country: {
    type: String,
    optional: true
  },
  region: {
    type: String,
    optional: true
  },
  city: {
    type: String,
    optional: true
  },
  postal: {
    type: String,
    optional: true
  },
  gender: {
    type: String,
    optional: true
  },
  phone: {
    type: String,
    optional: true
  },
  position: {
    type: String,
    optional: true
  },
  resumeUrl: {
    type: String,
    optional: true
  },
  videoUrl: {
    type: String,
    optional: true
  }
})

/**
* Contact info
*/
const work = new SimpleSchema({
  position: {
    type: String
  },
  company: {
    type: String
  },
  from: {
    type: Date
  },
  to: {
    type: Date
  },
  description: {
    type: String
  }
})

/**
* Skills
*/
const skill = new SimpleSchema({
  skillName: {
    type: String
  },
  description: {
    type: String,
    optional: true
  }
})

/**
* Education
*/
const education = new SimpleSchema({
  attainment: {
    type: String,
    srf: {
      options: [
        { label: 'Elementary', value: 'Elementary' },
        { label: 'High School', value: 'High School' },
        { label: 'Associate', value: 'Associate' },
        { label: 'Vocational', value: 'Vocational' },
        { label: 'College', value: 'College' },
        { label: 'Masteral', value: 'Masteral' },
        { label: 'PhD', value: 'PhD' },
        { label: 'Volunteer', value: 'Volunteer' }
      ]
    }
  },
  school: {
    type: String
  },
  course: {
    type: String,
    optional: true
  },
  from: {
    type: Date
  },
  to: {
    type: Date
  },
  accomplishment: {
    type: String,
    optional: true
  }
})

/**
* Curricula
*/

const Curricula = new SimpleSchema([
  Timestampable,
  {
    contact: {
      type: ContactInfo,
      optional: true
    },
    works: {
      type: [work],
      optional: true
    },
    educations: {
      type: [education],
      optional: true
    },
    skills: {
      type: [skill],
      optional: true
    },
    owner: {
      type: String
    }

  }
])

export default Curricula
