import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import VolunteerSearch from '../volunteer_search';

storiesOf('volunteers.search', module)
  .add('no inputs, no results', () => {
    return (
      <VolunteerSearch
        searchString=""
        searchResults={[]}
      />
    );
  })
  .add('some input, no results', () => {
    const searchString = "Writing op-eds";
    return (
      <VolunteerSearch
        searchString={searchString}
        searchResults={[]}
      />
    );
  })
  .add('some input and results', () => {
    const searchString = "Writing op-eds";
    const searchResults = [
      {_id: 'one', name: 'Simone Sanders', interests: 'Press Secretary for Senator Sanders, wrote lots of op-eds.'},
      {_id: 'two', name: 'Willy Wonka', interests: 'This is not a real search result.'},
    ];
    return (
      <VolunteerSearch
        searchString={searchString}
        searchResults={searchResults}
      />
    );
  });

