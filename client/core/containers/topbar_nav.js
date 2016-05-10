import TopbarNav from '../components/topbar_nav';
import { createContainer } from 'meteor/react-meteor-data';
import { authCommon } from '../context'

export default createContainer(() => {
  let { user, isOrganizer } = authCommon();
  return {
    user,
    isOrganizer
  };
}, TopbarNav);
