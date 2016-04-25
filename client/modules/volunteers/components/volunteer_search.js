import React from 'react'
import { Panel, FormControl, Table } from 'react-bootstrap'

export default VolunteerSearch = ({
  searchString,
  searchResults,
  resultsCount,
  getResults
}) => (
  <div>
    <h1>"Volunteer Search"</h1>
    <p><em>For example, try "writing letters to the editor" or "web developer"</em></p>
    <form onSubmit={(e)=> {
      e.preventDefault();
    }}>
      <FormControl type="text" placeholder="Enter text" onChange={(e)=> {
        e.preventDefault();
        getResults(e.target.value);
      }}/>
    </form>
    <h4>{resultsCount} results found.</h4>
    <p><strong>Email / Interest</strong></p>
    <Table responsive striped bordered condensed hover>
      <thead>
      <tr>
        <th>Email</th>
        <th>Interests</th>
      </tr>
      </thead>
      <tbody>
      {searchResults.map((result) => (
        <tr>
          {/** Example Only **/}
          <td>{result.email}</td>
          <td>{result.interests}</td>
        </tr>
      ))}
      </tbody>
    </Table>
  </div>
);
