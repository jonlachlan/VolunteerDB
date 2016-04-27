import React from 'react'

let headerStyle={
  marginTop: "100px"
};
export default Homepage = ({}) => (
  <div className="ui middle aligned centered two column stackable grid">
    <div className="column">
      <h1 className="ui center aligned fluid text container" style={headerStyle}>
        <em>We</em> are the revolution.
      </h1>
      <div className="ui large fluid primary button" onClick={()=>FlowRouter.go('volunteers.register')}>
        Let's Get Started
      </div>
    </div>
    <div className="column">
      <img className="ui large centered image" src="resources/sanders-splash-img.jpg" />
    </div>
  </div>
)
