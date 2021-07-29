import axios from 'axios';

const fetchScheduleAgenda = () => {
  return {
    type: 'FETCH_SCHEDULE_REQUEST',
  };
};

const fetchScheduleAgendaSuccess = (payload) => {
  return {
    type: 'FETCH_SCHEDULE_SUCCESS',
    payload,
  };
};

const fetchScheduleAgendaFailure = (payload) => {
  return {
    type: 'FETCH_SCHEDULE_FAILURE',
    payload,
  };
};

const fetchSchedule = (scheduleDay) => {
  const API = 'http://proyectofinalbootcamp-env.eba-nmb4rsib.us-east-2.elasticbeanstalk.com';
  return (dispatch) => {
    dispatch(fetchScheduleAgenda);
    axios.get(`${API}/schedule/${scheduleDay}`)
      .then((response) => {
        const schedule = response.data;
        dispatch(fetchScheduleAgendaSuccess(schedule));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchScheduleAgendaFailure(errMsg));
      });
  };
};

export default fetchSchedule;
