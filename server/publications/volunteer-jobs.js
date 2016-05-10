import { Meteor } from 'meteor/meteor'
import { VolunteerJobs } from '/common/collections'

Meteor.publish('volunteer_jobs', function(id) {
  if (this.userId) {
    return VolunteerJobs.find()
  }
})
