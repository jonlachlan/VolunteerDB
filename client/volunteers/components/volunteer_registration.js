import React from 'react';
import { submitRegistration } from '../actions/register';
import { MyAppForm, Input, Checkbox, Checkboxes, Radio } from '/client/core/components/form-components';
import Formsy from 'formsy-react';

export default VolunteerRegistration = ({}) => (
  <div className="ui middle aligned center aligned grid">
    <div className="column">
      <h2 className="ui teal image header">
        <div className="content">
          Grassroots Volunteer Form
        </div>
      </h2>
      <div className="ui stacked segment">
        <div className="ui huge header">Personal Information</div>
        <Formsy.Form onSubmit={(data)=>submitRegistration(data)} className="ui large form" >
          <Input name="email" placeholder="E-mail Address" iconClass="mail outline icon" className="ui left icon input" />
          <Input name="reddit" placeholder="Reddit Username" iconClass="reddit icon" className="ui left icon input" />
          <Input name="state" placeholder="State of Residence" iconClass="flag icon" className="ui left icon input" />
          <Input name="district" placeholder="Your District" iconClass="pin icon" className="ui left icon input" />
          <Checkboxes name="availability" label="When are you available?" groupClass="inline fields" checkboxClass="ui checkbox"
                      items={["Weekday Mornings", "Weekday Days", "Weekday Nights", "Weekday Mornings", "Weekend Days", "Weekend Nights"]} />

          <button className="ui fluid large teal submit button" type="submit">Login</button>
        </Formsy.Form>

      </div>
    </div>
  </div>
)

