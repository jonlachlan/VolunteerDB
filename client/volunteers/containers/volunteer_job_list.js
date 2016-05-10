import { authCommon } from '/client/core/context';
import { createContainer } from 'meteor/react-meteor-data';
import { VolunteerJobs } from '/common/collections';
import VolunteerJobList from '../components/volunteer_job_list';

const volunteerJobExamples = [
  {
    _id: "kjl3fa",
    createdDate: "3 days ago",
    createdBy: "Dave Mahler",
    title: "Research ballot requirements for candidate Alex Law",
    description: "We are looking for 2-3 volunteers who can research the ballot requirements in Congressional District 1 where Alex Law is running.",
    skills: ["Voting information research"]
  },
  {
    _id: "ljl2fj",
    createdDate: "6 days ago",
    createdBy: "Dave Mahler",
    title: "Twitter manager for candidate Pam Keith",
    description: "We are looking for an experienced Twitter ninja to take charge of Pam's Twitter account.",
    skills: ["Twitter", "Social media outreach"]
  },
];

export default createContainer(() => {
  let subs = [
    Meteor.subscribe('volunteer_jobs')
  ];
  let { userId, isOrganizer, isManager } = authCommon();
  let volunteerJobs = VolunteerJobs.find().fetch().map((job)=> {
    let isInterested = job.volunteersInterested.findIndex((vol)=> {return vol === userId}) >= 0;
    return {
      ...job,
      isInterested
    }
  });

  return {
    ready: true,
    userId,
    volunteerJobs,
    isOrganizer,
    isManager
  }
}, VolunteerJobList)
