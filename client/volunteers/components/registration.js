import React from 'react';
import Formsy from 'formsy-react';
import { Accounts, STATES } from 'meteor/std:accounts-ui';

export default class Registration extends React.Component {

  render() {
    let { division } = this.props;
    return (
      <div>
        <h1>Grassroots Select Sign-Up Sheet</h1>
        <LoginForm {...{
          formState: STATES.SIGN_UP
        }}/>
      </div>
    )
  }
}

class LoginForm extends Accounts.ui.LoginForm {
  fields() {
    const { formState } = this.state;
    if (formState == STATES.SIGN_UP) {
      return {
        firstname: {
          id: 'nickname',
          hint: 'Enter nickname',
          label: 'Nickname',
          onChange: this.handleChange.bind(this, 'firstname')
        },
        area_code: {
          id: 'area_code',
          hint: 'Enter area code',
          label: 'Area code',
          onChange: this.handleChange.bind(this, 'area_code')
        },

        ...super.fields()
      };
    }
    return super.fields();
  }

  signUp(options = {}) {
    const { nickname = null, area_code = null } = this.state;
    if (nickname !== null) {
      options.profile = Object.assign(options.profile || {}, { nickname });
    }
    if (area_code !== null) {
      options.profile = Object.assign(options.profile || {}, { area_code });
    }
    super.signUp(options);
  }
}






