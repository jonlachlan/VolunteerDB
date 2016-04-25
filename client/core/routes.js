import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from './components/main_layout';
import Homepage from './components/homepage'

FlowRouter.route('/', {
  name: 'root',
  action() {
    mount(MainLayout, {
      content: () => (<Homepage />)
    });
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
