import React from 'react';

export default class extends React.Component {

  componentDidMount() {
    $('.dropdown').dropdown()
  }

  render() {

    return (
      <div className="ui top fixed menu">
        <div className="icon link item" onClick={()=>{FlowRouter.go('root')}}>
          <i className="home icon"></i>
        </div>
        <div className="right link item" onClick={()=>{FlowRouter.go('login')}}>
          Log In
        </div>
      </div>
    )
  }
}
