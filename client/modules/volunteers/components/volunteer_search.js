import React from 'react'
import ResultItem from './search_result_item'

const VolunteerSearch = ({searchString, searchResults}) => (
  <div>
    <h1>Volunteer Search</h1>
    <div className="ui input">{searchString}</div>
    <div className="ui divided items">
      {searchResults.map((item, index) => {
        return (
          <ResultItem item={item} />
        )
      })}
    </div>
  </div>
);




export default VolunteerSearch;
