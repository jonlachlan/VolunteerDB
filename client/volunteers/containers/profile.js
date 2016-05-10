import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { LocalState, authCommon } from '/client/core/context';
import Profile from '../components/profile'

export default createContainer(() => {
  let { profile, user } = authCommon();
  console.log(profile)
  if(!user) {
    return { ready: false }
  }
  return {
    ready: true,
    profile
  }
}, Profile)
