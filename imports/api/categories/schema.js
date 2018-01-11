import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Timestampable } from '../common/schemas'

const Category = new SimpleSchema([
  Timestampable,
  {
    name: {
      type: String
    }
  }
])

export default Category

