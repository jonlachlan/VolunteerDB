import React from 'react';
import { showInterestInJob } from '../actions/volunteer_jobs';

export default VolunteerJobItem = ({ _id, createdDate, createdBy, title, description, skills }) => (
  <div className="item">
    <div className="content">
      <a className="header">{title}</a>
      <div className="meta">
        Created {createdDate} by {createdBy}
      </div>
      <div className="description">
        {description}
      </div>
      <div className="extra">
        {skills.map((skill) => (
          <div className="ui label">{skill}</div>
        ))}
        <div className="ui right floated labeled button" >
          <div className="ui icon button">
            <i className="add user icon"></i>
          </div>
          <div onClick={()=>showInterestInJob(_id)} className="ui basic label">
            I'm Interested
          </div>
        </div>
      </div>
    </div>
  </div>
)
