import actionType from '../constant/action-types';

const INITIAL_STATE = {
  isSignedIn: null,
  userID: null,
  userName: null,
  email: null,
  userType: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.LOG_IN:
      return {
        ...state,
        isSignedIn: true,
        userID: action.payload.userID,
        userName: action.payload.userName,
        email: action.payload.email,
        userType: action.payload.userType,
      };
    case actionType.LOG_OUT:
      return {
        ...state,
        isSignedIn: false,
        userID: null,
        userName: null,
        email: null,
        userType: null,
      };
    default:
      return state;
  }
};
