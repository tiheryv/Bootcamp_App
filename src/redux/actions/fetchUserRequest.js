import axios from 'axios';

const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST',
  };
};

const fetchUserSuccess = (payload) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload,
  };
};

const fetchUserFailure = (payload) => {
  return {
    type: 'FETCH_USER_FAILURE',
    payload,
  };
};

const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios.get('http://proyectofinalbootcamp-env.eba-nmb4rsib.us-east-2.elasticbeanstalk.com/student/2')
      .then((response) => {
        const user = response.data.content;
        dispatch(fetchUserSuccess(user));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchUserFailure(errMsg));
      });
  };
};

export default fetchUser;
