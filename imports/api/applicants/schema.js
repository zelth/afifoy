import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Timestampable, OwnerOptional } from '../common/schemas'

const Applicant = new SimpleSchema([
  OwnerOptional, Timestampable,
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String
    },
    location: {
      type: String
    },
    contact: {
      type: String
    },
    coverLetter: {
      type: String,
      optional: true
    },
    resumeUrl: {
      type: String,
      optional: true
    },
    jobId: {
      type: String
    },
    slug: {
      type: String
    },
    status: {
      type: String,
      srf: {
        options: [
          { label: 'sent', value: 'sent' },
          { label: 'review', value: 'review' },
          { label: 'for interview', value: 'for interview' },
          { label: 'exam', value: 'exam' },
          { label: 'final interview', value: 'final interview' },
          { label: 'accepted', value: 'accepted' },
          { label: 'declined', value: 'declined' }
        ]
      }
    }
  }
])

export default Applicant

