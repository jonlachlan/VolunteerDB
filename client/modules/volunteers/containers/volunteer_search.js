import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/volunteer_search';

export const composer = ({context}, onData) => {

  const {Meteor, Collections, LocalState} = context();
  let searchString = LocalState.get("volunteers.searchString");
  let searchResults = []; // todo: method call to elasticsearch
  onData(null, {
    searchString,
    searchResults
  });
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Component);
