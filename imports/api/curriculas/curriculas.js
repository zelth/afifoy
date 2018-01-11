import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
// import Categories from '/imports/api/categories/categories'

import Curricula from './schema'

class CurriculasCollection extends Mongo.Collection {

}

const Curriculas = new CurriculasCollection('curriculas')

Curriculas.attachSchema(Curricula)

Curriculas.helpers({
  author() {
    return Meteor.users.findOne(this.owner)
  }

})

export default Curriculas
