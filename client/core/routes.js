import { Meteor } from 'meteor/meteor'
import React from 'react';
import { mount } from 'react-mounter';
import MainLayout from './components/main_layout';
import VolunteerJobList from '/client/volunteers/containers/volunteer_job_list'
import Welcome from './components/welcome'

FlowRouter.route('/', {
  name: 'root',
  action() {
    if(Meteor.userId()) {
      mount(MainLayout, {
        content: () => (<VolunteerJobList />)
      });
    } else {
      mount(MainLayout, {
        content: () => (<Welcome />)
      });
    }
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    mount(MainLayout, {
      content: () => (<Accounts.ui.LoginForm />)
    });
  }
});

FlowRouter.route('/signup', {
  name: 'signup',
  action() {
    mount(MainLayout, {
      content: () => (<Accounts.ui.LoginForm />)
    });
  }
});

FlowRouter.route('/reset-password', {
  name: 'reset-password',
  action() {
    mount(MainLayout, {
      content: () => (<Accounts.ui.LoginForm />)
    });
  }
});

