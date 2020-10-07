import actionType from '../constant/action-types';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case actionType.FETCH_PROJECTS:
      console.log('action payload', action.payload);
      return { ...state, ..._.mapKeys(action.payload, 'projectID') };
    default:
      return state;
  }
};
