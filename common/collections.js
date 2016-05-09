import {Mongo} from 'meteor/mongo';

export const Volunteers = new Mongo.Collection('volunteers');

export const VolunteerJobs = new Mongo.Collection('volunteer-jobs');
export const Skills = new Mongo.Collection('skills');
export const Interests = new Mongo.Collection('interests');
export const Districts = new Mongo.Collection('districts');

export const Issues = new Mongo.Collection('issues');

