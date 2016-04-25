import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '../core/components/main_layout';
import VolunteerSearch from './containers/volunteer_search'


FlowRouter.route('/volunteers/search', {
  name: 'volunteers.search',
  action() {
    mount(MainLayout, {
      content: () => (<VolunteerSearch />)
    });
  }
});

