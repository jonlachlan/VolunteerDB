import { LocalState } from '/client/core/context';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router'

export function updateProfile(doc) {
  console.log(doc)
  Meteor.users.update({_id: Meteor.userId()}, {$set: {
    'profile.issues': doc.issues,
    'profile.skills': doc.skills
  }});
}


export function updateDivision(division) {
  if(!division) return;
  check(division, String);
  Meteor.users.update({_id: Meteor.userId()}, {$set: {
    'profile.division': division || "",
  }});

}
