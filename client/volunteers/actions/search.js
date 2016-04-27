import { LocalState } from '/client/core/context';

export function getResults (str) {
  LocalState.set("volunteers.search.isLoading", true);

  Meteor.call('volunteers.profiles.search', str, function (err, searchResults) {
    if (err) {
      LocalState.set("volunteers.search.isLoading", false);
      LocalState.set("volunteers.search.isError", true);
      throw err;
    } else {
      LocalState.set("volunteers.search.results", searchResults);
      LocalState.set("volunteers.search.isLoading", false);
      LocalState.set("volunteers.search.isError", false);
    }
  });
}
