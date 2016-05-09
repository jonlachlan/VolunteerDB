import {Meteor} from 'meteor/meteor';


Meteor.publish('users.current', function () {
  return Meteor.users.find(this.userId);
});
