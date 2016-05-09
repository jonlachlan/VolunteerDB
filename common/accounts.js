
// Accounts UI for React in Meteor 1.3  ||  https://github.com/studiointeract/accounts-ui/
import { Accounts } from 'meteor/std:accounts-ui'

Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  //loginPath: '/login',
  //signUpPath: '/signup',
  //resetPasswordPath: '/reset-password',
  //profilePath: '/profile',
  //onSignedInHook: () => FlowRouter.go('/'),
  onSignedOutHook: () => FlowRouter.go('/'),
  minimumPasswordLength: 6
});
