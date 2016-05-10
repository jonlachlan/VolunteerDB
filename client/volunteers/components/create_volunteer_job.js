import React from 'react';
import { createVolunteerJob } from '../actions/volunteer_jobs';
import { Input, Checkboxes } from '/client/core/components/form-components';
import { DIVISIONS, ISSUES, SKILLS } from '../configs/profile_fields';

//_id, createdDate, createdBy, title, description, skills
export default class CreateVolunteerJob extends React.Component {

  render() {
    let { divisions } = this.props;
    return (
      <Formsy.Form onSubmit={(data)=>createVolunteerJob(data)} className="ui large form" >
        <Input name="title" label="Title" placeholder="Title of volunteering job" iconClass="mail outline icon" className="ui left icon input" />
        <Input name="description" label="Description" placeholder="Description of volunteering job" iconClass="map icon" className="ui left icon input" />
        <Checkboxes name="divisions" items={DIVISIONS} label="Divisions" groupClass="grouped fields" itemClass="ui checkbox" />
        <Checkboxes name="skills" items={SKILLS.RESEARCH} label="Research skills" groupClass="grouped fields" itemClass="ui checkbox" />

        <button className="ui fluid large teal submit button" type="submit">Submit</button>
      </Formsy.Form>
    )
  }
}
