import React from 'react';
import Meteor from 'meteor/meteor';

export default class extends React.Component {

  componentDidMount() {
    $('.dropdown').dropdown()
  }

  renderLoginLogout() {
    let logout = ()=>{Meteor.logout()}
    if(!this.props.user) {
      return (
        <div className="right link item" onClick={()=>{FlowRouter.go('login')}}>
          Log In
        </div>
      )
    } else {
      return (
        <div className="right link item" onClick={logout}>
          <i className="sign out icon"></i>
          Log out
        </div>
      )
    }
  }

  render() {
    return (
      <div className="ui top fixed menu">
        <div className="icon link item" onClick={()=>FlowRouter.go('root')}>
          <i className="home icon"></i>
        </div>
        {this.renderLoginLogout()}
      </div>
    )
  }
}
