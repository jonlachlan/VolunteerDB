import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '../core/components/main_layout';
import Search from './containers/volunteer_search'
import Onboarding from './components/onboarding'
import VolunteerJobList from './containers/volunteer_job_list'
import CreateVolunteerJob from './components/create_volunteer_job';

FlowRouter.route('/volunteers/search', {
  name: 'volunteers.search',
  action() {
    mount(MainLayout, {
      content: () => (<Search />)
    });
  }
});

FlowRouter.route('/volunteers/register', {
  name: 'volunteers.register',
  action() {
    mount(MainLayout, {
      content: () => (<Onboarding />)
    });
  }
});

FlowRouter.route('/volunteers/jobs', {
  name: 'volunteers.jobs',
  action() {
    mount(MainLayout, {
      content: () => (<VolunteerJobList />)
    });
  }
});

FlowRouter.route('/volunteers/create-job', {
  name: 'volunteers.createJob',
  action() {
    mount(MainLayout, {
      content: () => (<CreateVolunteerJob />)
    });
  }
});
