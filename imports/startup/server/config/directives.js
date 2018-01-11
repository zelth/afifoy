import { Meteor } from 'meteor/meteor'
import { Slingshot } from 'meteor/edgee:slingshot'
import { Random } from 'meteor/random'

Slingshot.createDirective('applicantresume', Slingshot.S3Storage, {
  AWSAccessKeyId: Meteor.settings.S3.accessKeyId,
  AWSSecretAccessKey: Meteor.settings.S3.secretAccessKey,
  bucket: Meteor.settings.S3.bucket,
  region: Meteor.settings.S3.region,
  allowedFileTypes: null,
  maxSize: 10 * 500 * 500,
  acl: 'public-read',
  authorize(file, context) {
    // if (!this.userId) {
    //   throw new Meteor.Error(403, 'Access denied')
    // }
    return true
  },
  key(file, context) {
    const ext = file.name ? file.name.split('.').pop() : file.type ? file.type.split(/\//).pop() : ''
    if (!this.userId) {
      return `non-member/${Random.hexString(64)}.${ext}`
    }
    return `${this.userId}/${Random.hexString(64)}-${file.name}`
  }
})

Slingshot.fileRestrictions('applicantresume', {
  allowedFileTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  maxSize: 10 * 500 * 500 // 10 MB (use null for unlimited)
})

Slingshot.createDirective('postPhoto', Slingshot.S3Storage, {
  AWSAccessKeyId: Meteor.settings.S3.accessKeyId,
  AWSSecretAccessKey: Meteor.settings.S3.secretAccessKey,
  bucket: Meteor.settings.S3.bucket,
  region: Meteor.settings.S3.region,
  allowedFileTypes: null,
  maxSize: 2 * 500 * 500,
  acl: 'public-read',
  authorize() {
    if (!this.userId) {
      throw new Meteor.Error('Login Required', 'Please login before posting files')
    }
    return true
  },
  key(file, context) {
    // return context.userId + "/" + Date.now() + "-" + file.name
    return `${this.userId}/${Date.now()}-${file.name}`
  }
})

Slingshot.fileRestrictions('postPhoto', {
  allowedFileTypes: ['image/png', 'image/jpeg', 'image/jpg'],
  maxSize: 2 * 500 * 500 // 2 MB (use null for unlimited)
})


Slingshot.createDirective('videoUpload', Slingshot.S3Storage, {
  AWSAccessKeyId: Meteor.settings.S3.accessKeyId,
  AWSSecretAccessKey: Meteor.settings.S3.secretAccessKey,
  bucket: Meteor.settings.S3.bucket,
  region: Meteor.settings.S3.region,
  allowedFileTypes: null,
  maxSize: 10 * 500 * 500,
  acl: 'public-read',
  authorize() {
    if (!this.userId) {
      throw new Meteor.Error('Login Required', 'Please login before posting files')
    }
    return true
  },
  key(file, context) {
    // return context.userId + "/" + Date.now() + "-" + file.name
    return `${this.userId}/${Date.now()}-${file.name}`
  }
})

Slingshot.fileRestrictions('videoUpload', {
  allowedFileTypes: ['video/mov', 'video/avi', 'video/wmv', 'video/mp4'],
  maxSize: 10 * 500 * 500 // 2 MB (use null for unlimited)
})
