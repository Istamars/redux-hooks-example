import actionType from '../constant/action-types';
import apis from '../apis';
import history from '../history';

// class ProjectAction {
export const fetchProjects = () => async (dispatch) => {
  const response = await apis.get('/project/2509200006');

  dispatch({
    type: actionType.FETCH_PROJECTS,
    payload: response.data,
  });

  history.push('/');
};

// const fetchProject = (id) => async (dispatch) => {
//   const response = await apis.get('/project');
// };

// }

// export default new ProjectAction();

// export default fetchProjects;
// fetchProject,
