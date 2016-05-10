import React from 'react';
import Formsy from 'formsy-react'
import { Checkboxes, Radio } from '/client/core/components/form-components'
import { updateDivision, updateProfile } from '../actions/profile';
import { DIVISIONS, ISSUES, SKILLS } from '../configs/profile_fields';

export default ProfileForm = ({ready, profile}) => {
  if(!ready) {
    return (<div class="ui text loader">Loading</div>)
  };
  return (
    <Formsy.Form onChange={(data)=>updateProfile(data)} className="ui form">
      <IssuesForm value={profile.issues} />
      <DivisionsForm value={profile.division} />
      <SkillsFormSwitch division={profile.division} value={profile.skills} />
    </Formsy.Form>
  )
}


const DivisionsForm = ({value}) => {
  return (
    <Formsy.Form onChange={({division})=>updateDivision(division)} >
      <Radio name="division" value={value} label="What area of volunteering are you most interested in helping with?" groupClass="grouped fields" itemClass="ui radio checkbox"
             items={DIVISIONS} />
    </Formsy.Form>
  )
}

const IssuesForm = ({value}) => {
  return (
    <Checkboxes name="issues" value={value} label="What are your highest-priority issues?" groupClass="grouped fields"
                itemClass="ui checkbox"
                items={ISSUES}/>
  );
}


export const SkillsFormSwitch = ({division, value}) => {
  switch(division) {
    case 'research':
      return <ResearchSkills value={value} />
    case 'social_media':
      return <SocialMediaSkills value={value} />
    case 'campaign_support':
      return <CampaignSupportSkills value={value} />
    case 'writing':
      return <WritingSkills value={value} />
    case 'development':
      return <DevelopmentSkills value={value} />
    case 'pr_communications':
      return <CommunicationsSkills value={value} />
    default:
      return null;
  }
}

export const SkillsMultiFormSwitch = ({divisions}) => divisions.map((division)=> {
  switch (division) {
    case 'research':
      return <ResearchSkills value={[]}/>
    case 'social_media':
      return <SocialMediaSkills value={[]}/>
    case 'campaign_support':
      return <CampaignSupportSkills value={[]}/>
    case 'writing':
      return <WritingSkills value={[]}/>
    case 'development':
      return <DevelopmentSkills value={[]}/>
    case 'pr_communications':
      return <CommunicationsSkills value={[]}/>
    default:
      return null;
  }
})

const ResearchSkills = ({value}) => {


  return (
    <Checkboxes name="skills" value={value} label="Which of the following research tasks match your skills and interests?" groupClass="grouped fields" itemClass="ui checkbox"
                items={SKILLS.RESEARCH} />
  )
}

const SocialMediaSkills = ({}) => (
  <div>

  </div>
)
const CampaignSupportSkills = ({}) => (
  <div>

  </div>
)
const WritingSkills = ({}) => (
  <div>

  </div>
)
const DevelopmentSkills = ({}) => (
  <div>

  </div>
)
const CommunicationsSkills = ({}) => (
  <div>

  </div>
)
