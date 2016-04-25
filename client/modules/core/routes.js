import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from './components/main_layout';
import Homepage from './components/homepage'

export default function (injectDeps, {FlowRouter}) {

  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'root',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Homepage />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Accounts.ui.LoginForm />)
      });
    }
  });

}
