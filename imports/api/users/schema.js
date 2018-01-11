// import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
// import s from 'underscore.string'
import _ from 'underscore'
import JCRoles from '/imports/startup/both/config/roles'

import { Timestampable } from '../common/schemas'

const UserProfile = new SimpleSchema({
  companyName: {
    type: String,
    optional: true
  },
  companyUrl: {
    type: String,
    optional: true
  },
  companyLogo: {
    type: String,
    optional: true
  },
  bio: {
    type: String,
    optional: true
  },
  phone: {
    type: String,
    optional: true
  },
  mobile: {
    type: String,
    optional: true
  },
  twitterUrl: {
    type: String,
    optional: true
  },
  facebookUrl: {
    type: String,
    optional: true
  },
  userLogo: {
    type: String,
    optional: true
  },
  linkedInUrl: {
    type: String,
    optional: true
  },
  videoUrl: {
    type: String,
    optional: true
  },
  // name: {
  //   type: String,
  //   optional: true,
  //   autoValue() {
  //     const firstName = this.siblingField('firstName')
  //     const lastName = this.siblingField('lastName')
  //     if (!this.value && firstName.value && lastName.value) {
  //       return `${firstName.value} ${lastName.value}`
  //     }
  //   }
  // },
  firstName: {
    type: String,
    optional: true

    // autoValue() {
    //   const name = this.siblingField('name')
    //   if (!this.value && name.value) {
    //     return s.words(name.value)[0]
    //   }
    // }
  },
  lastName: {
    type: String,
    optional: true
    // autoValue() {
    //   const name = this.siblingField('name')
    //   if (!this.value && name.value) {
    //     return s.words(name.value).slice(1).join(' ')
    //   }
    // }
  },
  dob: {
    type: Date,
    optional: true
  },

  address: {
    type: Object,
    optional: true
  },
  'address.city': {
    type: String,
    optional: true
  },
  'address.country': {
    type: String,
    optional: true
  },
  'address.line1': {
    type: String,
    optional: true
  },
  'address.line2': {
    type: String,
    optional: true
  },
  'address.state': {
    type: String,
    optional: true
  },
  'address.zip': {
    type: String,
    optional: true
  },
  'address.ip': {
    type: String,
    optional: true
  }

})


const User = new SimpleSchema([
  Timestampable,
  {
    profile: {
      type: UserProfile,
      optional: true
    },
    emails: {
      type: [Object],
      optional: true
    },
    'emails.$.address': {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    },
    'emails.$.verified': {
      type: Boolean,
      optional: true,
      defaultValue: false
    },
    services: {
      type: Object,
      optional: true,
      blackbox: true
    },
    roles: {
      type: [String],
      optional: true
    }

  }
])

const Customer = new SimpleSchema({
  name: {
    type: String
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  roles: {
    type: [String],
    srf: {
      options: _.map(JCRoles, (label, value) => (
        { label, value }
      ))
    }
  }
})

export {
  User,
  Customer
}
