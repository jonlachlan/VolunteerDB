import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '/client/modules/core/components/main_layout';
import Homepage from './components/homepage'

//import {
  //AuthCheck,
  //LayoutDefault,
  //Simplest,
//} from '/client/configs/components.js';

export default function (injectDeps, {FlowRouter}) {

  const MainLayoutCtx = injectDeps(MainLayout);

  //const AuthCheckCtx = injectDeps(AuthCheck);

  FlowRouter.route('/', {
    name: 'root',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Homepage />)
      });
    }
  });

}
