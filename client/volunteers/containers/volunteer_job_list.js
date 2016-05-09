import { createContainer } from 'meteor/react-meteor-data';
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
  return {
    volunteerJobs: volunteerJobExamples,
  }
}, VolunteerJobList)
