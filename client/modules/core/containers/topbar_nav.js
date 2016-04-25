import TopbarNav from '../components/topbar_nav';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  let {Meteor} = context()
  let user = Meteor.user();
  onData(null, {user});
};

export default composeAll(
  composeWithTracker(composer),
)(TopbarNav);
