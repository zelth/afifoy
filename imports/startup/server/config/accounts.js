/* global Assets */
import { Accounts } from 'meteor/accounts-base'

Accounts.emailTemplates.siteName = 'JobSpace'
Accounts.emailTemplates.from = 'JobSpace <info@idyoo.com>'
Accounts.onCreateUser((options, user) => {
  // We still want the default hook's 'profile' behavior.
  const newUser = user
  if (options.profile) {
    newUser.profile = options.profile
  }

  return newUser
})

