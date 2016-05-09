import React from 'react';
import { submitRegistration } from '../actions/register';
import { Input } from '/client/core/components/form-components';

export default class Onboarding extends React.Component {

  render() {
    let { submitRegistration } = this.props;
    return (
      <Formsy.Form onSubmit={(data)=>submitRegistration(data)} className="ui large form" >
        <Input name="title" placeholder="Title of volunteering job" iconClass="mail outline icon" className="ui left icon input" />
        <Input name="description" placeholder="Description of volunteering job" iconClass="map icon" className="ui left icon input" />
        <button className="ui fluid large teal submit button" type="submit">Register</button>
      </Formsy.Form>
    )
  }
}
