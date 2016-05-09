import React from 'react';
import VolunteerJobItem from './volunteer_job_item'
import { showInterestInJob } from '../actions/volunteer_jobs';


export default VolunteerJobList = ({volunteerJobs}) => (
  <div className="ui divided items">
    {volunteerJobs.map((job) => (
      <VolunteerJobItem {...job}  />
    ))}
  </div>
)
