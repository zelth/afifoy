import { Meteor } from 'meteor/meteor'
import { AccountsTemplates } from 'meteor/useraccounts:core'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Roles } from 'meteor/alanning:roles'

if (Meteor.isClient) {
  // import { eventSignIn, eventSignUp, eventSignOut } from '/imports/startup/client/config/analytics'
}

const onSignIn = () => {
  Meteor.isClient
  const userId = Meteor.userId()

  if (Roles.userIsInRole(userId, ['admin'])) {
    FlowRouter.go('adminDashboard')
  } else if (Roles.userIsInRole(userId, ['jobseeker'])) {
    FlowRouter.go('candidateDashboard')
  } else if (Roles.userIsInRole(userId, ['employer'])) {
    FlowRouter.go('dashboard')
  } else {
    FlowRouter.go('home')
  }
}


AccountsTemplates.configure({
  confirmPassword: false,
  enablePasswordChange: true,
  forbidClientAccountCreation: true,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: false,
  focusFirstInput: true,
  showAddRemoveServices: false,
  showForgotPasswordLink: true,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,
  privacyUrl: '/privacy-policy',
  termsUrl: '/terms-of-use',
  homeRoutePath: '/',
  redirectTimeout: 500,
  texts: {
    socialSignUp: 'Register',
    button: {
      signUp: 'Create Account',
      signIn: 'Sign in securely'
    },
    title: {
      signIn: 'Account sign in',
      signUp: 'Create Account',
      forgotPwd: 'Reset Password'
    },
    inputIcons: {
      isValidating: 'fa fa-spinner fa-spin',
      hasSuccess: 'fa fa-check',
      hasError: 'fa fa-times'
    }
  },
  onLogoutHook() {
    Meteor.isClient
    return FlowRouter.go('home')
  },
  onSubmitHook(err, state) {
    if (!err) {
      if (state === 'signIn') {
        onSignIn()
      } else if (state === 'signUp') {
        // onSignIn()
      }
    }
  }
})
