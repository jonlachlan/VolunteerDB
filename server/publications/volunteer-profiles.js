import {Meteor} from 'meteor/meteor';
import {VolunteerProfiles} from '/common/collections'

export default function () {

  Meteor.publish('volunteer-profile', function (id) {
    // Is logged in?
    if(this.userId) {
      return VolunteerProfiles.find(id);
    }
  });
}
