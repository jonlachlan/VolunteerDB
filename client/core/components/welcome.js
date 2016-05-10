import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'

let headerStyle={
  marginTop: "100px"
};
export default Homepage = ({}) => (
  <div className="ui middle aligned centered two column stackable grid">
    <div className="column">
      <h1 className="ui center aligned fluid text container" style={headerStyle}>
        Together, we can elect a Congress that represents all of us.
      </h1>
      <div className="ui large fluid primary button" onClick={()=>FlowRouter.go('volunteers.register')}>
        Let's Get Started
      </div>
    </div>
    <div className="column">
      <img className="ui large centered image" src="resources/grassrootsselect-logo.png" />
    </div>
  </div>
)
