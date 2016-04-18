import {VolunteerProfiles} from '/lib/collections';
import elasticsearch from '../configs/elasticsearch'
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'volunteer-profiles.search'(query) {
      check(query, String);

      if(!this.userId) {
        return;
      }

      const createdAt = new Date();
      const post = {_id, title, content, createdAt};
      Posts.insert(post);
    }
  });
}