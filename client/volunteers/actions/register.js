import { LocalState } from '/client/core/context';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router'


export function submitRegistration(data) {
  console.log(data)
  FlowRouter.go('volunteers.dashboard')
  // todo
  //Meteor.call('createVolunteerUser', doc)
}
