import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import _ from 'lodash';


export const authCommon = function () {

  let userSubReady = Meteor.subscribe('users.current').ready();

  const userId = Meteor.userId() || null;
  const user = Meteor.user();
  const profile = _.get(Meteor.user(), 'profile', {} );
  const email = _.get(Meteor.user(), 'emails[0].address', {});
  const isOrganizer = Roles.userIsInRole(userId, ['organizer', 'manager'], 'grassrootsselect.org');
  const isManager = Roles.userIsInRole(userId, 'manager', 'grassrootsselect.org');

  return {
    userSubReady,
    userId,
    user,
    email,
    profile,
    isOrganizer,
    isManager
  };
};

export const LocalState = new ReactiveDict();
