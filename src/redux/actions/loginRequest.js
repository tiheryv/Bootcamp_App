import axios from 'axios';

const API = 'http://proyectofinalbootcamp-env.eba-nmb4rsib.us-east-2.elasticbeanstalk.com';

const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST',
  };
};

const fetchUserSuccess = (payload) => {
  return {
    type: 'LOGIN_USER_SUCCESS',
    payload,
  };
};

const fetchTypeUser = (payload) => {
  return {
    type: 'USER_TYPE',
    payload,
  };
};

const fetchUserFailure = (payload) => {
  return {
    type: 'FETCH_USER_FAILURE',
    payload,
  };
};

const loginRequest = (email, type) => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios.post(`${API}/login`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      email,
      type,
    })
      .then((response) => {
        const user = response.data.content;
        dispatch(fetchUserSuccess(user));
        dispatch(fetchTypeUser(type));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchUserFailure(errMsg));
      });
  };
};

export default loginRequest;
