import { LocalState } from '/client/core/context';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router'
import { VolunteerJobs } from '/common/collections'

export function showInterestInVolunteerJob(volunteerJobId) {
  //let user = Meteor.user();
  let user = {
    email: "dave@grassrootsselect.org"
  }
  //let volunteerJob = VolunteerJobs.findOne(volunteerJobId);
  let volunteerJob = {
    volunteerJobId,
    title: "Job title"
  }
  console.log(user.email + "showed interest in job" + volunteerJob.title);
  // todo
}

export function createVolunteerJob(volunteerJob) {
  check(volunteerJob, Object);
  console.log(volunteerJob);
  //VolunteerJobs.insert(volunteerJob);
}
