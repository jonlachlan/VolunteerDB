import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '../core/components/main_layout';
import Search from './containers/volunteer_search'
import Registration from './components/registration'
//import VolunteerJobList from './containers/volunteer_job_list'
import CreateVolunteerJob from './containers/create_volunteer_job';
import Profile from './containers/profile'

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
      content: () => (<Registration />)
    });
  }
});

FlowRouter.route('/volunteers/profile', {
  name: 'volunteers.profile',
  action() {
    mount(MainLayout, {
      content: () => (<Profile />)
    });
  }
});


/**
 * This is not needed, currently root route
 */
//FlowRouter.route('/volunteers/jobs', {
//  name: 'volunteers.jobs',
//  action() {
//    mount(MainLayout, {
//      content: () => (<VolunteerJobList />)
//    });
//  }
//});

FlowRouter.route('/volunteers/create-job', {
  name: 'volunteers.createJob',
  action() {
    mount(MainLayout, {
      content: () => (<CreateVolunteerJob />)
    });
  }
});
