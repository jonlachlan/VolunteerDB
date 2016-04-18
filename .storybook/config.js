import { configure } from '@kadira/storybook';
import { disable } from 'react-komposer';

disable();

function loadStories() {
  require('../client/modules/volunteers/components/.stories');
  //require('../client/modules/comments/components/.stories');
   //require as many as stories you need.
}

configure(loadStories, module);
