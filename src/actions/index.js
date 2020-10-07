import actionType from "../constant/action-types";
import history from "../history";
import apis from "../apis";

class userAction {
  // addData = (data) => async (dispatch) => {
  //   // const response = await books.post('/books', data);

  //   const response = await apis.post('/apis/users', data);

  //   dispatch({
  //     type: actionType.ADD_DATA,
  //     payload: response.data,
  //   });

  //   history.push('/');
  // };

  fetchDatas = () => async (dispatch) => {
    const response = await apis.get("/apis/users");

    console.log("action fetch datas: ", response.data);

    dispatch({
      type: actionType.FETCH_DATAS,
      payload: response.data,
    });
  };

  fetchData = (id) => async (dispatch) => {
    const response = await apis.get(`/apis/users/${id}`);

    dispatch({
      type: actionType.FETCH_DATA,
      payload: response.data,
    });
  };

  // deleteData = (id) => async (dispatch) => {
  //   const response = await apis.delete(`/apis/users/${id}`);

  //   console.log(id);
  //   dispatch({
  //     type: actionType.DELETE_DATA,
  //     payload: id,
  //   });

  //   history.push('/');
  // };

  editData = (id, formValues) => async (dispatch) => {
    const response = await apis.patch(`/apis/users/${id}`, formValues);

    dispatch({
      type: actionType.EDIT_DATA,
      payload: response.data,
    });

    history.push("/");
  };
}

export default new userAction();
