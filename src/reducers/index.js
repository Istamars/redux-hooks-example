import { combineReducers } from 'redux';
import auth from './auth.reducer';
import projects from './projects.reducer';

export default combineReducers({
  auth,
  projects,
});
