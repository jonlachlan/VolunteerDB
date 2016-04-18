import {Mongo} from 'meteor/mongo';

const VolunteerProfiles = new Mongo.Collection('volunteer-profiles');

export default {
  VolunteerProfiles
}
