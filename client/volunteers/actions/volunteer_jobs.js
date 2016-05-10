import { LocalState } from '/client/core/context';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { authCommon } from '/client/core/context';
import { VolunteerJobs } from '/common/collections'

export function addInterestInVolunteerJob(volunteerJobId) {
  check(volunteerJobId, String);

  Meteor.call('addInterestInVolunteerJob', volunteerJobId)
}

export function removeInterestInVolunteerJob(volunteerJobId) {
  check(volunteerJobId, String);

  Meteor.call('removeInterestInVolunteerJob', volunteerJobId)
}




export function createVolunteerJob(volunteerJob) {
  console.log(volunteerJob)
  check(volunteerJob, Object);

  volunteerJob.createdBy = Meteor.userId();
  volunteerJob.createdDate = new Date();
  volunteerJob.volunteersInterested = [];
  VolunteerJobs.insert(volunteerJob);
}
