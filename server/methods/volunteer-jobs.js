import { VolunteerJobs } from '/common/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({

  'addInterestInVolunteerJob'(volunteerJobId) {
    check(volunteerJobId, String);
    console.log("[showInterestInVolunteerJob]", volunteerJobId, this.userId);
    VolunteerJobs.update({_id: volunteerJobId}, {$push: {volunteersInterested: this.userId}});
  },

  'removeInterestInVolunteerJob'(volunteerJobId) {

    check(volunteerJobId, String);
    console.log("[unshowInterestInVolunteerJob]", volunteerJobId, this.userId);
    VolunteerJobs.update({_id: volunteerJobId}, {$pull: {volunteersInterested: this.userId}});
  }


});
