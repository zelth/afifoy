import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import getSlug from 'meteor/ongoworks:speakingurl'
// import _ from 'underscore'
// import s from 'underscore.string'
// import moment from 'moment'

/*
* Behavior Timestampable
*/
const Timestampable = new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return new Date()
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        }
      } else {
        this.unset()
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    autoValue() {
      if (this.isUpdate) {
        return new Date()
      }
    }
  }
})

/*
* Behavior Sluggable
*/
const Sluggable = new SimpleSchema({
  slug: {
    type: String,
    optional: true,
    unique: true,
    autoValue() {
      const title = this.field('title')
      const name = this.field('name')
      if (this.isSet && this.value) {
        return getSlug(this.value)
      } else if (title.isSet) {
        return getSlug(title.value)
      } else if (name.isSet) {
        return getSlug(name.value)
      } else {
        this.unset()
      }
    }
  }
})


/*
* Behavior Ownerable
*/
const Owner = new SimpleSchema({
  owner: {
    type: String,
    autoValue() {
      if (this.isInsert && this.userId) {
        return this.userId
      } else if (Meteor.isClient && !Meteor.isTest) {
        this.unset()
      }
    }
  }
})

/*
* Behavior Ownerable
*/
const OwnerOptional = new SimpleSchema({
  owner: {
    type: String,
    optional: true,
    autoValue() {
      if (this.isInsert && this.userId) {
        return this.userId
      } else if (Meteor.isClient && !Meteor.isTest) {
        this.unset()
      }
    }
  }
})


export {
  Timestampable,
  Owner,
  OwnerOptional,
  Sluggable
}
