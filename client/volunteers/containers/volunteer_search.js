import { Meteor } from 'meteor/meteor';
import VolunteerSearch from '../components/volunteer_search';
import { createContainer } from 'meteor/react-meteor-data';
import { LocalState } from '/client/core/context';

export default createContainer(() => {
  let searchResults = LocalState.get('volunteers.searchResults');

  return {
    searchResults,
    resultsCount: searchResults.length
  };
}, VolunteerSearch);
