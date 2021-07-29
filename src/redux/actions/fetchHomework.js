import axios from 'axios';

const fetchHomeworkStarted = () => {
  return {
    type: 'FETCH_HOMEWORK_REQUEST',
  };
};

const fetchHomeworkSuccess = (payload) => {
  return {
    type: 'FETCH_HOMEWORK_SUCCESS',
    payload,
  };
};

const fetchHomeworkFailure = (payload) => {
  return {
    type: 'FETCH_WORK_FAILURE',
    payload,
  };
};

const fetchHomework = (scheduleDay) => {
  const API = 'http://proyectofinalbootcamp-env.eba-nmb4rsib.us-east-2.elasticbeanstalk.com';
  return (dispatch) => {
    dispatch(fetchHomeworkStarted);
    axios.get(`${API}/homework/list/schedule?idSchedule=${scheduleDay}`)
      .then((response) => {
        const homework = response.data;
        dispatch(fetchHomeworkSuccess(homework));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchHomeworkFailure(errMsg));
      });
  };
};

export default fetchHomework;
