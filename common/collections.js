import {Mongo} from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';

export const Volunteers = new Mongo.Collection('volunteers');

export const VolunteerJobs = new Mongo.Collection('volunteer-jobs');

VolunteerJobs.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId && Roles.userIsInRole(userId, ['organizer', 'manager'], 'grassrootsselect.org'));
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return (userId && (doc.owner === userId || Roles.userIsInRole(userId, ['organizer', 'manager'], 'grassrootsselect.org')));
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return (userId && (doc.owner === userId || Roles.userIsInRole(userId, ['manager'], 'grassrootsselect.org')));
  },
  fetch: ['owner']
});

VolunteerJobs.deny({
  update: function (userId, doc, fields, modifier) {
    // can't change owners
    return _.contains(fields, 'owner');
  }
});

export const Skills = new Mongo.Collection('skills');
export const Interests = new Mongo.Collection('interests');
export const Districts = new Mongo.Collection('districts');

export const Issues = new Mongo.Collection('issues');

