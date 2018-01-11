import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import Category from './schema'

class CategoriesCollection extends Mongo.Collection {

}

const Categories = new CategoriesCollection('categories')

Categories.attachSchema(Category)

Categories.helpers({

})

Categories.friendlySlugs(
  {
    slugFrom: 'name',
    slugField: 'slug',
    distinct: true,
    updateSlug: true
  }
)

export default Categories
