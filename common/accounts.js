
// Accounts UI for React in Meteor 1.3  ||  https://github.com/studiointeract/accounts-ui/
import { Accounts } from 'meteor/std:accounts-ui'

Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/login',
  signUpPath: '/volunteers/register',
  resetPasswordPath: '/reset-password',
  profilePath: '/volunteers/profile',
  //onSignedInHook: () => FlowRouter.go('/'),
  onSignedOutHook: () => FlowRouter.go('/'),
  minimumPasswordLength: 6,
  onPostSignUpHook: () => FlowRouter.go('volunteers.profile')
});
