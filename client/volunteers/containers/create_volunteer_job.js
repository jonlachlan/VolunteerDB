import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { LocalState } from '/client/core/context';
import CreateVolunteerJob from '../components/create_volunteer_job'

export default createContainer(() => {
  let divisions = LocalState.get('volunteerJobs.divisions');
  return {
    divisions: divisions || []
  }
}, CreateVolunteerJob)
