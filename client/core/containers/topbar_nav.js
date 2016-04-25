import { Meteor } from 'meteor/meteor';
import TopbarNav from '../components/topbar_nav';
import { createContainer } from 'meteor/react-meteor-data';

export default createContainer(() => {
  let user = Meteor.user();
  return {
    user
  };
}, TopbarNav);
