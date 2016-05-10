import React from 'react';
import Moment from 'moment';
import { addInterestInVolunteerJob, removeInterestInVolunteerJob } from '../actions/volunteer_jobs';

export default VolunteerJobItem = ({ userId, _id, createdDate, createdBy, title, description, skills, volunteersInterested, isInterested }) => {
  console.log(volunteersInterested)
  console.log(isInterested)
  return (
    <div className="item">
      <div className="content">
        <a className="header">{title}</a>
        <div className="meta">
          Created {Moment(createdDate).fromNow()} by {createdBy}
        </div>
        <div className="description">
          {description}
        </div>
        <div className="extra">
          {skills.map((skill) => (
            <div className="ui label">{skill}</div>
          ))}
          {isInterested ?
            <div className="ui right floated labeled button">
              <div className="ui icon button">
                <i className="green check icon"></i>
              </div>
              <div onClick={()=>removeInterestInVolunteerJob(_id)} className="ui basic label">
                I'm Interested
              </div>
            </div>
            :
          <div className="ui right floated labeled button">
            <div className="ui icon button">
              <i className="add user icon"></i>
            </div>
            <div onClick={()=>addInterestInVolunteerJob(_id)} className="ui basic label">
              I'm Interested
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  )
}
