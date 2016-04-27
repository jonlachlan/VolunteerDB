import React from 'react'
import ProfileForm from './registration_form'

export default VolunteerSearch = ({
  searchResults,
  resultsCount,
  getResults,
  isLoading,
  isError
}) => (
  <div>
    <h1>Volunteer Search</h1>
    <p><em>For example, try "writing letters to the editor" or "web developer"</em></p>
    <form onSubmit={(e)=> {
      e.preventDefault();
    }}>
      <div className={isLoading ? "ui fluid loading icon input" : "ui fluid icon input"} >
        <input type="text" placeholder="Search..."  onChange={(e)=> {
          e.preventDefault();
          getResults(e.target.value)
        }} />
          <i className={isError ? "yellow warning sign icon" : "search icon"}></i>
      </div>
      <span><em>{isError ? "Sorry, could not connect for search." : ""}</em></span>
    </form>
    <h4>{resultsCount} results found.</h4>
    <table className="ui table">
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
    </table>
  </div>
);
