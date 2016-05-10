import React from 'react';
import VolunteerJobItem from './volunteer_job_item'


export default VolunteerJobList = ({ready, volunteerJobs, isOrganizer, isManager, userId}) => {
  if(!ready) return false;
  return (
    <div>
      <img className="ui small right floated image" src="/resources/grassrootsselect-logo.png"/>
      <h2>
        Volunteer Jobs
      </h2>
      <p>
        Let us know if there is something that interests you.
      </p>
      <div className="ui divided items">
        {volunteerJobs.map((job) => (
          <VolunteerJobItem {...job} userId={userId} />
        ))}
      </div>
    </div>
)}

