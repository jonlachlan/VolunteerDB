import React from 'react';
import Meteor from 'meteor/meteor';

const LoginButton = ()=>(
  <div className="link item" onClick={()=>{FlowRouter.go('login')}}>
    Log In
  </div>
);

const LogoutButton = ()=>(
  <div className="link item" onClick={()=>{Meteor.logout()}}>
    <i className="sign out icon"></i>
    Log out
  </div>
);

export default class extends React.Component {

  componentDidMount() {
    $('.dropdown').dropdown()
  }

  render() {
    let { user } = this.props;
    var loginButton;
    if (user) {
      loginButton = <LogoutButton />;
    } else {
      loginButton = <LoginButton />;
    }

    return (
      <div className="ui top fixed menu">
        <div className="icon link item" onClick={()=>FlowRouter.go('root')}>
          <i className="home icon"></i>
        </div>
        <div className="right menu">
          <div className="right link item" onClick={()=>FlowRouter.go('volunteers.search')}>
            <i className="search icon"></i>
          </div>
          {loginButton}
        </div>
      </div>
    )
  }
}
