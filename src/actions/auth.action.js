import actionType from '../constant/action-types';
import apis from '../apis';
import history from '../history';

class AuthAction {
  logIn = (formData) => async (dispatch) => {
    console.log(formData);
    const response = await apis.post('/auth/login', formData);

    console.log('response', response);

    dispatch({
      type: actionType.LOG_IN,
      payload: response.data,
    });

    history.push('/');
  };

  signOut = () => {
    return {
      type: actionType.LOG_OUT,
    };
  };
}

export default new AuthAction();
