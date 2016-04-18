import React from 'react';

const ResultItem = ({item}) => (
  <div className="item">
    <div>Name: {item.name}</div>
    <div>Interests: {item.interests}</div>
  </div>
);

export default ResultItem;
