import React from 'react';
import { Input, Checkbox, Checkboxes, Radio } from '/client/core/components/form-components';
import Formsy from 'formsy-react';
import { submitRegistration } from '../actions/register';

export default class Onboarding extends React.Component {

  render() {
    let { submitRegistration } = this.props;
    return (
      <Formsy.Form onSubmit={(data)=>submitRegistration(data)} className="ui large form" >
        <EmailForm />
        <IssuesForm />
        <DivisionsForm />
        <button className="ui fluid large teal submit button" type="submit">Register</button>
      </Formsy.Form>
    )
  }
}

const EmailForm = ({}) => (
  <div>
    <Input name="email" placeholder="E-mail Address" iconClass="mail outline icon" className="ui left icon input" />
    <Input name="area_code" placeholder="Area Code" iconClass="map icon" className="ui left icon input" />
  </div>
);

const IssuesForm = ({}) => (
  <Checkboxes name="issues" label="What are your highest-priority issues?" groupClass="grouped fields" itemClass="ui checkbox"
              items={["Income Inequality", "Environment", "Education", "Campaign Finance Reform", "Jobs", "Healthcare", "Immigration", "Racial Justice", "Women's Rights", "LGBT", "Social Security", "Foreign Policy"]} />
);

const DivisionsForm = ({}) => (
  <Radio name="division" label="What area of volunteering are you most interested in helping with?" groupClass="grouped fields" itemClass="ui radio checkbox"
              items={["Research", "Social Media", "Campaign Support", "Writing", "Development", "Design", "PR / Communications" ]} />
);

const ResearchDivisionForm = ({}) => (
  <table className="ui celled table">
    <thead><tr>
      <th>Types of Research Tasks</th>
      <th>I have experience doing this</th>
      <th>I would like to do this!</th>
    </tr></thead>
    <tbody>
      <tr>
        <td>Candidate research (ex. background, voting record)</td>
        <td>Opposition and Election research (ex. voting record, viability)</td>
        <td>Campaign Law research (ex. Ballot access, filings)</td>
        <td>Voting information research (ex. primary dates registration deadlines)</td>
        <td>Policy research</td>
        <td>Media outlet analysis</td>
        <td>NGO rearch & analysis</td>
        <td>Other</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
);


