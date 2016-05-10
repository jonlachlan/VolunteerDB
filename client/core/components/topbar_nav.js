import React from 'react';
import Meteor from 'meteor/meteor';


export default ({user, isOrganizer})=> (
  <div className="ui top fixed menu">
    <div className="icon link item" onClick={()=>FlowRouter.go('root')}>
      <i className="home icon"/>
    </div>
    <div className="right menu">
      {isOrganizer ?
        <div className="link item" onClick={()=>FlowRouter.go('volunteers.createJob')} >
          <i className="add square icon" />
          Add Job
        </div>
      : null }
      {user ?
        <div className="link item" onClick={()=>FlowRouter.go('volunteers.profile')}>
          <i className="user icon"/>
          My Profile
        </div>
      : null }
      <div className="link item" onClick={()=>FlowRouter.go('login')}>
        <i className="sign in icon" />
      </div>
    </div>
  </div>
)
