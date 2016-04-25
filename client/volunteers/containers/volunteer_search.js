import { Meteor } from 'meteor/meteor';
import VolunteerSearch from '../components/volunteer_search';
import { getResults } from '../actions/search';
import { createContainer } from 'meteor/react-meteor-data';
import { LocalState } from '/client/core/context';

export default createContainer(() => {
  let searchResults = LocalState.get('volunteers.search.results');
  let isLoading = LocalState.get('volunteers.search.isLoading');

  return {
    searchResults,
    resultsCount: searchResults.length,
    isLoading,
    getResults
  };
}, VolunteerSearch);
