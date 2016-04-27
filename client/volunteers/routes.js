import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '../core/components/main_layout';
import Search from './containers/volunteer_search'
import RegistrationForm from './components/volunteer_registration'


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
      content: () => (<RegistrationForm />)
    });
  }
});
